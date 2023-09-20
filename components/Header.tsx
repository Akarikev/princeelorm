"use client";

import Image from "next/image";
import { ModeToggle } from "./ModeToggle";

export default function Header() {
  return (
    <div className="px-6 md:px-40 lg:px-44">
      <div className="flex flex-col items-center gap-2">
        <div className="flex justify-between gap-5">
          <h1 className="text-2xl font-bold text-cyan-600 mt-2">
            PRINCE ELORM 🎧
          </h1>
          <ModeToggle />
        </div>

        <Image
          src={"/prince elorm.jpg"}
          width={100}
          height={100}
          alt="Prince Elorm"
          className="rounded-full shadow-2xl"
        />
      </div>

      <div>
        <p className="text-xl text-muted-foreground mt-4 font-semibold text-center">
          Hi there 👋 am <span className="text-cyan-700">Prince Elorm</span> and
          am an artist from Ghana, i love making music.
        </p>
      </div>
    </div>
  );
}
