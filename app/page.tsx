import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return <div className="flex justify-center items-center h-screen">
    <Button asChild>
      <Link href="/dashboard">Get Started</Link>
    </Button>
  </div>;
}
