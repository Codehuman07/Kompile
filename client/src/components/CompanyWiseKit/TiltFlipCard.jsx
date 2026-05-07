import React, { useRef, useState } from "react";
import squirrelImg from "../../../Assets/logos/Squirrel_logo_computer.png";

export function ArrowBtn({ dark = false }) {
  return (
    <div
      className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0
        ${dark ? "bg-white text-black" : "bg-[#111] text-white"}`}
    >
      ↗
    </div>
  );
}

export function CardBack({
  price,
  label,
  bg = "#f0eeeb",
  textColor = "#111",
  arrowDark = true,
}) {
  return (
    <div
      className="flex flex-col items-center justify-center gap-3 p-6 h-full w-full relative"
      style={{ background: bg }}
    >
      <div className="absolute -top-5 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 shadow-lg shadow-orange-500/40" />
      <div className="absolute -top-3 right-2 w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 shadow-lg shadow-orange-500/40" />
      <div className="absolute top-1/2 -left-5 w-9 h-9 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 shadow-lg shadow-orange-500/40" />

      <img
        src={squirrelImg}
        alt="Kompile mascot"
        className="w-36 h-36 object-contain drop-shadow-xl"
        style={{ transform: "rotate(-4deg)" }}
      />
      <p className="text-2xl font-extrabold" style={{ color: textColor }}>
        {price}
      </p>
      {label && (
        <p
          className="text-xs font-medium opacity-60"
          style={{ color: textColor }}
        >
          {label}
        </p>
      )}
      <ArrowBtn dark={arrowDark} />
    </div>
  );
}

export function TiltFlipCard({
  front,
  back,
  accent = false,
  featured = false,
  minHeight = 320,
}) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState("");
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [flipped, setFlipped] = useState(false);

  const handleMouseMove = (e) => {
    if (flipped) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    const rotX = -dy * 14;
    const rotY = dx * 14;
    setTransform(
      `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.04)`,
    );
    const gx = ((e.clientX - rect.left) / rect.width) * 100;
    const gy = ((e.clientY - rect.top) / rect.height) * 100;
    setGlare({ x: gx, y: gy, opacity: 0.18 });
  };

  const handleMouseLeave = () => {
    setTransform("perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)");
    setGlare((g) => ({ ...g, opacity: 0 }));
  };

  return (
    <div
      style={{ perspective: "800px", transformStyle: "preserve-3d" }}
      className="relative"
      onClick={() => setFlipped((f) => !f)}
    >
      {/* Tilt wrapper */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: flipped ? `${transform} rotateY(180deg)` : transform,
          transition: "transform 0.55s cubic-bezier(0.23, 1, 0.32, 1)",
          transformStyle: "preserve-3d",
          position: "relative",
          cursor: "pointer",
          willChange: "transform",
        }}
        className={`rounded-3xl ${featured ? "shadow-2xl shadow-orange-500/20" : ""}`}
      >
        <div
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            minHeight,
          }}
          className={`
            relative rounded-3xl overflow-hidden
            ${
              accent
                ? "bg-[#f97316] text-white"
                : featured
                  ? "bg-[#111111] border border-orange-500/40 text-white"
                  : "bg-[#f0eeeb] text-[#111]"
            }
          `}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.55) 0%, transparent 65%)`,
              opacity: glare.opacity,
              pointerEvents: "none",
              transition: "opacity 0.3s",
              borderRadius: "inherit",
              zIndex: 10,
            }}
          />
          {front}
        </div>

        <div
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            position: "absolute",
            inset: 0,
          }}
          className="rounded-3xl overflow-hidden flex flex-col items-center justify-center"
        >
          {back}
        </div>
      </div>

      <p className="text-center text-xs text-gray-500 mt-2 select-none opacity-60">
        {flipped ? "click to flip back" : "click to flip"}
      </p>
    </div>
  );
}
