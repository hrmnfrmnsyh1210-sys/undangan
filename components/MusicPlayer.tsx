
import React, { useState, useEffect, useRef } from 'react';
import { Music, Music2, Volume2, VolumeX } from 'lucide-react';

const MusicPlayer: React.FC<{ autoStart?: boolean }> = ({ autoStart = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Royalty-free traditional/acoustic music
    const audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3'); 
    audio.loop = true;
    audioRef.current = audio;

    if (autoStart) {
      const playAudio = () => {
        audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
        document.removeEventListener('click', playAudio);
      };
      document.addEventListener('click', playAudio);
    }

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, [autoStart]);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <button
        onClick={toggleMusic}
        className="w-12 h-12 bg-[#8b6e4e] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
      >
        {isPlaying ? <Volume2 size={24} className="animate-pulse" /> : <VolumeX size={24} />}
      </button>
    </div>
  );
};

export default MusicPlayer;
