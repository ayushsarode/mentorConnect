import React from "react";
import mentors from "../../../data/mentorsData";
import MentorCard from "./MentorCard";
const Mentor = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-6   gap-4">
        {mentors.map((mentor) => (
          <div key={mentor.id}>
            <MentorCard mentor={mentor}/>
            
          </div>
        ))}
   
        {/* Pass the ID of the mentor you want to display */}
      </div>
    </div>
  );
};

export default Mentor;