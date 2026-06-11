"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/constants/site";

const FULL_TEXT = SITE.name;
const TYPE_SPEED_MS = 95;
const DELETE_SPEED_MS = 55;
const PAUSE_WHEN_DONE_MS = 2200;
const PAUSE_WHEN_EMPTY_MS = 400;

export function AnimatedName() {
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const blink = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 530);

    return () => clearInterval(blink);
  }, []);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < FULL_TEXT.length) {
      timeout = setTimeout(() => {
        setDisplayed(FULL_TEXT.slice(0, displayed.length + 1));
      }, TYPE_SPEED_MS);
    } else if (!isDeleting && displayed.length === FULL_TEXT.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, PAUSE_WHEN_DONE_MS);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(FULL_TEXT.slice(0, displayed.length - 1));
      }, DELETE_SPEED_MS);
    } else if (isDeleting && displayed.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, PAUSE_WHEN_EMPTY_MS);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting]);

  return (
    <h1 className="text-hero-name relative font-bold tracking-tight text-title">
      <span aria-hidden="true" className="invisible block select-none">
        {FULL_TEXT}
      </span>

      <span className="absolute inset-0 flex items-center">
        <span aria-live="polite">{displayed}</span>
        <span
          aria-hidden="true"
          className={`ml-0.5 inline-block w-[3px] shrink-0 rounded-full bg-primary sm:w-1 ${
            cursorVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ height: "0.85em" }}
        />
      </span>
    </h1>
  );
}
