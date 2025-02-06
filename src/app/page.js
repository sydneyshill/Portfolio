"use client";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="grid grid-cols-[20%_80%] gap-4">
      <div className="text-6xl px-10 font-moderustic pt-20">
        <TypeAnimation
          sequence = {[
            'Sydney Shillinglaw',
            30,
            'Sydney Shillinglaw',
            30,
          ]}
          speed={20}
          repeat={Infinity} />
      </div>
      <div className="pt-20 text-xl px-60 font-moderustic">
        Hello! I'm Sydney, and I am a software developer who is a self-starter
        with an interest in backend development and cybersecurity. I believe the 
        world is full of problems waiting to be solved, and can't wait to see what
        the future brings. </div>
    </div>
  );
}

