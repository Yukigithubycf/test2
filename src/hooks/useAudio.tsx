import { useState, useEffect, useRef } from 'react';

export const useAudio = (url: string) => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(url);
    audioRef.current.loop = true;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [url]);

  const toggle = () => {
    if (!audioRef.current) return;
    
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => {
        console.error("Audio playback failed:", e);
      });
    }
    setPlaying(!playing);
  };

  const play = () => {
    if (!audioRef.current) return;
    audioRef.current.play().catch(e => {
      console.error("Audio playback failed:", e);
    });
    setPlaying(true);
  };

  return { playing, toggle, play };
};
