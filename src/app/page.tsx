"use client";
import { useRouter } from "next/navigation";
import Player from "react-lottie-player";
import animationData from "../../public/Animation.json";

export default function Home() {
  const router = useRouter();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      router.push('/details');
    }
  };

  return (
    <div className="flex justify-center flex-col items-center mt-32 ">
      <h1 className="text-7xl">Hello! I am Credit DPR</h1>
      <h3 className="text-4xl mt-3">Detailed Project Report Generator</h3>
      <Player
        play 
        loop
        animationData={animationData} 
        style={{ height: '300px', width: '300px' }}
      />
      <input
        className="w-[40%] outline-none p-3 rounded-full mt-5 text-black placeholder:text-gray-500"
        type="text"
        placeholder="Press Enter to Begin"
        readOnly
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
