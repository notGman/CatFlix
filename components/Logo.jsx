import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Logo({ style }) {
  return (
    <Link href="/">
      <Image src={"/logo.png"} width={150} height={53} alt="CatFlix" className={style} />
    </Link>
  );
}
