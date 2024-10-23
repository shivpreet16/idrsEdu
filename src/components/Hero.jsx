import React from 'react'
import Navbar from "../components/Navbar";
const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Navbar */}
      <Navbar />
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-20"
        autoPlay
        loop
        muted
        src="/headerVideo.mp4" // Replace with your video file name
      />

      {/* Overlay */}
      <div className="absolute -z-10 top-0 left-0 w-full h-full bg-primary opacity-50" />


      {/* Hero Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="text-3xl md:text-6xl font-bold pointer-events-none tracking-wide">International Daily Rising School</h1>
        <p className="mt-4 text-lg md:text-xl pointer-events-none">
          Discover, Learn, Succeed – Your Journey Starts Here
        </p>
        <button className="mt-6 px-6 py-3 bg-secondary text-primary rounded-md shadow-lg hover:bg-primary hover:text-secondary duration-200">
          Know us more
        </button>
      </div>
    </div>
  )
}

export default Hero