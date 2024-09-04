import React from "react";

function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-[90dvh] bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className=" text-center">
        <h1 className="text-8xl font-bold tracking-tight text-foreground">
          Do you have the best Mentor?
        </h1>
        <p className="mt-4 text-3xl text-muted-foreground">
          Find or become a mentor to help you reach your full potential.
        </p>
        <div className="mt-6">
          <a
            href="#"
            className="inline-flex items-center rounded-md bg-primary text-base-100 px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Find a Mentor
          </a>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
