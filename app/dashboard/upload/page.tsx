"use client";

import useUpload from "@/hooks/useUpload";
import { CircleArrowDown, RocketIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";

function UploadPage() {
    const {progress, status, fileId, handleUpload} = useUpload();
    const router = useRouter();

    useEffect(() => {
      if (fileId) {
        router.push(`/dashboard/flashcards/${fileId}`)
      }
    }, [fileId, router])
  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    // Do something with the files
    const file = acceptedFiles[0];
    if (file) {
        await handleUpload(file)
    } else {

    }
    console.log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive
   } = useDropzone({
    onDrop, maxFiles: 1, accept: {"application/pdf": [".pdf"]}
  });
  return (
    <div className="bg-gradient-to-tl from-white to-gray-300 flex-1 flex items-center justify-center">
      <div className="bg-white p-5 drop-shadow-lg h-[50%] w-[50%] rounded-xl flex justify-center items-center">
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <div className="flex justify-center items-center flex-col">
              <RocketIcon className="h-20 w-20 animate-ping" />
              <p className="text-lg font-semibold text-center">
                Drop the files here ...
              </p>
            </div>
          ) : (
            <div className="flex justify-center items-center flex-col">
              <CircleArrowDown className="h-20 w-20 animate-bounce" />
              <p className="text-lg font-semibold text-center">
                Drag and drop some files here, or click to select files
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UploadPage;
