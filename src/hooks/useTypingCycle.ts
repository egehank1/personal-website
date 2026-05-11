"use client";

import { useEffect, useState } from "react";

export function useTypingCycle(phrases: string[], typingMs = 55, pauseMs = 2200) {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[phraseIndex % phrases.length] ?? "";
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === phrase) {
      timeout = setTimeout(() => setDeleting(true), pauseMs);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
    } else if (deleting) {
      timeout = setTimeout(
        () => setText((t) => t.slice(0, -1)),
        Math.max(18, typingMs / 2),
      );
    } else {
      timeout = setTimeout(
        () => setText(phrase.slice(0, text.length + 1)),
        typingMs,
      );
    }

    return () => window.clearTimeout(timeout);
  }, [text, deleting, phraseIndex, phrases, typingMs, pauseMs]);

  return text;
}
