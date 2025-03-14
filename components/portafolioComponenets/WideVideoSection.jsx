"use client";
import { useEffect, useRef, useState } from 'react';

const WideVideoSection = ({ src }) => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          videoRef.current?.play();
        } else {
          setIsVisible(false);
          videoRef.current?.pause();
        }
      });
    }, options);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <video
      ref={videoRef}
      loop
      muted
      playsInline
      className="w-full h-full object-cover opacity-80"
      preload="none"
      poster="/assets/images/placeholder.jpg"
    >
      {isVisible && <source src={src} type="video/mp4" />}
      Your browser does not support the video tag.
    </video>
  );
};

export default WideVideoSection;