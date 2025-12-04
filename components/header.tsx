import React from "react";
import { AuroraText } from "./ui/aurora-text";

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-zinc-950/60">
      <div className="flex h-16 items-center justify-between px-6">

          <h1 className="text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">
            0down.<AuroraText className="text-2xl">AI</AuroraText>
          </h1>
        </div>
    </header>
  );
}

export default Header;
