import React from 'react';
import pinkVideo from '../../assets/pink-background.mp4';
import { useNavigate } from 'react-router-dom';

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        autoPlay
        loop
        muted
        playsInline
        src={pinkVideo}
        type="video/mp4"
      />

      <div className="flex flex-col items-center justify-center h-full text-white backdrop-brightness-75 text-center px-4">
        <h1 className="text-5xl font-extrabold mb-4">Premier League Analyzer</h1>
        <p className="text-xl max-w-md mb-6">
          Dive into the stats and stories of your favorite teams!
        </p>
       <button
  onClick={() => navigate('/teams')}
  className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-semibold text-white transition duration-300 ease-out border-2 border-white rounded-full shadow-md group hover:scale-105"
>
  <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-full bg-white opacity-10 group-hover:translate-x-0"></span>
  <span className="relative z-10 text-lg tracking-wider">Explore Teams →</span>
</button>

      </div>
    </div>
  );
}

export default Landing;
