import { Head } from "./head";
import { Navbar } from "./navbar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <header className="fixed w-full top-0 z-30">
        <Navbar />
      </header>
      {children}
    </div>
  );
}
