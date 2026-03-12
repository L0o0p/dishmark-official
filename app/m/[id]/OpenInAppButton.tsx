"use client";

import type { MouseEvent } from "react";

type OpenInAppButtonProps = {
  momentId: string;
  universalLink: string;
};

export default function OpenInAppButton({
  momentId,
  universalLink,
}: OpenInAppButtonProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const schemeUrl = `dishmark://moment/${encodeURIComponent(momentId)}`;

    let fallbackTimer: ReturnType<typeof setTimeout> | undefined;

    const clearFallback = () => {
      if (fallbackTimer) {
        clearTimeout(fallbackTimer);
        fallbackTimer = undefined;
      }
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("pagehide", clearFallback);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearFallback();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("pagehide", clearFallback, { once: true });

    fallbackTimer = setTimeout(() => {
      clearFallback();
      window.location.href = universalLink;
    }, 1200);

    window.location.href = schemeUrl;
  };

  return (
    <a
      href={universalLink}
      onClick={handleClick}
      className="inline-flex items-center justify-center rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-700"
    >
      在 App 中打开
    </a>
  );
}
