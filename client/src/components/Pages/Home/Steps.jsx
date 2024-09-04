import {useState} from "react";

function Steps() {
  const [selected, setSelected] = useState("Mentor");
  return (
    <div className="h-[100dvh] bg-indigo-600 flex   items-center">
    <div className=" text-white p-8">
      <h1 className="text-9xl font-bold my-14">Are you,</h1>
      <div className="flex items-center mt-6 ">
        <div className="bg-white rounded-full p-1 flex items-center w-72 text-3xl cursor-pointer">
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
      <div className="mt-12 text-4xl font-bold">
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
  );
}

export default Steps;
