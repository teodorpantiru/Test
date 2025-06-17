"use client";

import { useEffect, useRef } from "react";
import Globe from "globe.gl";

export default function RotatingGlobe() {
  const globeRef = useRef(null);

  useEffect(() => {
    const globe = Globe()(globeRef.current)
      .globeImageUrl(
        "https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      )
      .bumpImageUrl(
        "https://unpkg.com/three-globe/example/img/earth-topology.png"
      )
      .atmosphereColor("#1e3a8a")

      .backgroundColor("rgba(0,0,0,0)") // ✅ transparență validă
      .width(600)
      .height(600);

    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.5;
  }, []);

  return <div ref={globeRef} className="mx-auto" />;
}
