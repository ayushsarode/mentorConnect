import React from "react";
import HeroGif from "../../../assets/hero.png"; 

function LandingPage() {
  return (
<div className="flex flex-col lg:flex-row items-center justify- h-[92vh] bg-background px-4 gap-[8rem] py-10 sm:px-6 lg:px-8">
  <div className="lg:w-1/2 text-center lg:text-left">
    <h1 className="text-5xl lg:text-8xl font-bold tracking-tight text-foreground">
    <span className="font-normal">Do you have the best</span>  Mentor?
    </h1>
    <p className="mt-4 text-xl lg:text-3xl text-muted-foreground">
     Find or become a mentor to help you reach your full potential.
    </p>
    <div className="mt-6">
      <a
        href="#"
        className="inline-flex items-center rounded-md bg-primary text-base-100 px-7 py-4 text-lg font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        Find a Mentor
      </a>
    </div>
  </div>
  
  <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
    <div className="carousel w-full space-x-4">
      <div className="carousel-item">
        <img src={HeroGif} alt="Tech Person 1" className="rounded-full w-[40rem] object-cover" />
      </div>

  
    </div>
  </div>
</div>

  );
}

export default LandingPage;
