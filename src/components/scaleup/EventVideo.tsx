"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { PlayCircle, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/cn";
import type { ScaleUpEvent } from "@/lib/scale-up-events";

type Props = {
  event: ScaleUpEvent;
};

/**
 * Video block for an event landing page.
 *
 * Behavior:
 * - No `event.video`: renders a framed 16:9 placeholder using the venue photo.
 * - `event.video` with `kind: "mp4" | "mov"` and `autoplayMuted: true`: the default for
 *   LP invites. Plays muted + looping on view, with a "Tap for sound" overlay.
 *   First unmute restarts from 0 so the viewer hears the message from the top.
 * - `event.video` with `kind: "vimeo" | "youtube"`: embedded iframe. Click-to-
 *   play behavior is handled by the provider.
 *
 * All modes lock to the venue photo as the poster so the frame is never empty.
 */
export function EventVideo({ event }: Props) {
  const video = event.video;
  const poster = video?.poster ?? event.venue.heroImage;
  const aspect = video?.aspect ?? "16/9";
  const aspectClass =
    aspect === "9/16"
      ? "aspect-[9/16]"
      : aspect === "4/5"
        ? "aspect-[4/5]"
        : aspect === "1/1"
          ? "aspect-square"
          : "aspect-[16/9]";

  // Placeholder state, unchanged from before.
  if (!video) {
    return (
      <div className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-3xl border border-cv-black/10 bg-cv-black shadow-[var(--shadow-2)]">
        <div className={cn("relative w-full", aspectClass)}>
          <Image
            src={poster}
            alt={`${event.venue.name} — ${event.cityDisplay} Scale Up preview`}
            fill
            sizes="(min-width: 1024px) 960px, 100vw"
            className="object-cover object-center"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-cv-black/70 via-cv-black/30 to-cv-black/40"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-white">
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/15 text-white/80 ring-8 ring-white/10 backdrop-blur">
              <PlayCircle className="h-10 w-10" strokeWidth={1.5} />
            </span>
            <p className="rounded-full bg-cv-black/55 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-white/85 backdrop-blur-sm">
              Video coming soon
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (video.kind === "mp4" || video.kind === "mov") {
    return (
      <MP4Player
        src={video.src}
        srcWebm={video.srcWebm}
        sourceMimeType={video.kind === "mov" ? "video/quicktime" : "video/mp4"}
        poster={poster}
        aspectClass={aspectClass}
        autoplayMuted={video.autoplayMuted ?? true}
        label={video.label}
      />
    );
  }

  // Vimeo / YouTube iframe. Both providers expect their embed URL format.
  // Poster is rendered as a CSS background so the iframe paints on top once ready.
  return (
    <div className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-3xl border border-cv-black/10 bg-cv-black shadow-[var(--shadow-2)]">
      <div className={cn("relative w-full", aspectClass)}>
        <iframe
          src={video.src}
          title={video.label ?? `${event.cityDisplay} Scale Up invite`}
          loading="lazy"
          allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    </div>
  );
}

type MP4Props = {
  src: string;
  srcWebm?: string;
  /** MIME type for the primary `<source>` (QuickTime for hosted `.mov`). */
  sourceMimeType: "video/mp4" | "video/quicktime";
  poster: string;
  aspectClass: string;
  autoplayMuted: boolean;
  label?: string;
};

function MP4Player({
  src,
  srcWebm,
  sourceMimeType,
  poster,
  aspectClass,
  autoplayMuted,
  label,
}: MP4Props) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(autoplayMuted);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v || !autoplayMuted) return;
    v.muted = true;
    const tryPlay = () => {
      v.play().catch(() => {
        // Some mobile browsers still block even muted autoplay until gesture.
        // The overlay handles that case: tapping plays + unmutes.
      });
    };
    tryPlay();
  }, [autoplayMuted]);

  const handleUnmute = () => {
    const v = ref.current;
    if (!v) return;
    if (!hasInteracted) {
      // First tap: restart from 0 so the viewer hears the whole message.
      v.currentTime = 0;
      setHasInteracted(true);
    }
    v.muted = false;
    v.play().catch(() => {});
    setMuted(false);
  };

  const handleMute = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    setMuted(true);
  };

  return (
    <div className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-3xl border border-cv-black/10 bg-cv-black shadow-[var(--shadow-2)]">
      <div className={cn("relative w-full", aspectClass)}>
        <video
          ref={ref}
          className="absolute inset-0 h-full w-full object-cover"
          poster={poster}
          playsInline
          loop
          muted={muted}
          autoPlay={autoplayMuted}
          preload="metadata"
          controls={hasInteracted}
          aria-label={label ?? "Event invite video"}
        >
          {srcWebm ? <source src={srcWebm} type="video/webm" /> : null}
          <source src={src} type={sourceMimeType} />
        </video>

        {!hasInteracted ? (
          <button
            type="button"
            onClick={handleUnmute}
            aria-label="Unmute video"
            className="group absolute inset-0 flex items-end justify-end bg-gradient-to-t from-cv-black/45 via-transparent to-transparent p-5 transition-opacity hover:opacity-95"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-cv-black/70 px-4 py-2 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm ring-1 ring-white/15 transition-transform group-hover:-translate-y-0.5">
              <VolumeX className="h-4 w-4" />
              Tap for sound
            </span>
          </button>
        ) : muted ? (
          <button
            type="button"
            onClick={handleUnmute}
            aria-label="Unmute video"
            className="absolute bottom-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-cv-black/70 text-white backdrop-blur-sm ring-1 ring-white/15 transition-colors hover:bg-cv-black/85"
          >
            <VolumeX className="h-4 w-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleMute}
            aria-label="Mute video"
            className="absolute bottom-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-cv-black/70 text-white backdrop-blur-sm ring-1 ring-white/15 transition-colors hover:bg-cv-black/85"
          >
            <Volume2 className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}
