"use client";
import React, { useEffect, useRef } from "react";
import styles from "./IceCrystalVideo.module.css";

function IceCrystalVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      video.currentTime = video.duration - 0.001;
      video.pause();
    };

    video.addEventListener("ended", handleEnded);
    return () => video.removeEventListener("ended", handleEnded);
  }, []);

  return (
    <video
      ref={videoRef}
      playsInline
      autoPlay
      muted
      preload="auto"
      className={styles.video}
    >
      <source src="/videos/iceCrystals.mp4" type="video/mp4" />
    </video>
  );
}

export default IceCrystalVideo;
