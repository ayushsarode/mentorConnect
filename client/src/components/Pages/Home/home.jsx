import React, { useState } from "react";

const Home = () => {
  const [selected, setSelected] = useState("Mentor");

  return (
    <div data-theme="light">
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
      <div className="h-[100dvh] bg-neutral flex   items-center">
        <div className=" text-white p-8">
          <h1 className="text-6xl font-bold">Are you,</h1>
          <div className="flex items-center mt-6 ">
            <div className="bg-white rounded-full p-1 flex items-center w-44 cursor-pointer">
              <div
                onClick={() => setSelected("Mentor")}
                className={`w-1/2 text-center py-2  rounded-full ${
                  selected === "Mentor" ? "bg-black text-white" : "text-black"
                }`}
              >
                Mentor
              </div>

              <div
                onClick={() => setSelected("User")}
                className={`w-1/2 text-center py-2 rounded-full ${
                  selected === "User" ? "bg-black text-white" : "text-black"
                }`}
              >
                User
              </div>
            </div>
          </div>
          <div className="mt-12 text-2xl font-bold">
            {selected === "Mentor" ? (
              <>
                <p>Step 1: Register</p>
                <p>Step 2: Verify Documents</p>
                <p>Step 3: Set up your mentor account</p>
              </>
            ) : (
              <>
                <p>Step 1: Join</p>
                <p>Step 2: Find Mentor of your choice</p>
                <p>Step 3: Book a 1:1 session or join workshops</p>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-[100dvh] bg-white text-center">
        <h1 className="text-8xl font-bold text-neutral">
          100+ Language supported{" "}
          <span role="img" aria-label="surprised face">
            😲
          </span>
        </h1>
        <p className="mt-4 text-3xl text-black py-4">
          Be you from any part of the globe, there&apos;s someone to guide you!
        </p>
      </div>
      <footer className="footer bg-base-200 text-base-content p-10 px-20">
  <aside>
    <p className="text-5xl font-bold tracking-tight text-foreground">mentorConnect</p>
  </aside>
  
  <nav>
    <h6 className="footer-title">Links</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Mentors</a>
    <a className="link link-hover">FaQ</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
    </div>
  );
};

export default Home;
