import Header from "@/components/Header";
import { ClerkLoaded, ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

      <ClerkLoaded>
          <div>
            <Header />
            <main className={inter.className}>{children}</main>
          </div>
      </ClerkLoaded>

  );
}
