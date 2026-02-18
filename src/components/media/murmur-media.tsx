"use client";

import Image from "next/image";
import { useState } from "react";

type BrandMediaProps = {
  kind: "image" | "video";
  src: string;
  alt: string;
  poster?: string;
  fallbackSrc?: string;
  priority?: boolean;
  className?: string;
};

export function BrandMedia({ kind, src, alt, poster, fallbackSrc, priority = false, className = "" }: BrandMediaProps) {
  const [failed, setFailed] = useState(false);

  if (kind === "video" && !failed) {
    return (
      <video
        className={`absolute inset-0 block h-full w-full ${className}`}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        onError={() => setFailed(true)}
      >
        <source src={src} type="video/mp4" />
        {alt}
      </video>
    );
  }

  if (!failed) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={className}
        onError={() => setFailed(true)}
      />
    );
  }

  if (fallbackSrc) {
    return <Image src={fallbackSrc} alt={`${alt} fallback`} fill priority={priority} className={className} />;
  }

  return (
    <div className={`flex h-full w-full items-center justify-center bg-zinc-100 text-xs uppercase tracking-[0.16em] text-zinc-500 ${className}`}>
      Media unavailable
    </div>
  );
}

