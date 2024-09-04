/* eslint-disable react/prop-types */
import React from "react";
import {useNavigate} from "react-router-dom";


function MentorCard({ mentor }) {
        const navigate = useNavigate();
  return (
        <div className="flex justify-center items-center hover:transform hover:scale-105 transition-transform duration-700 cursor-pointer"
         onClick={(e)=>{
                e.preventDefault()
navigate(`/mentor/${mentor.id}`)
         }}>
        <div className="bg-indigo-600 text-white p-4 rounded-lg max-w-sm">
          <div className="rounded-t-lg overflow-hidden">
            <img
              src={mentor.imageUrl}
              alt="Profile"
              className="w-full h-auto object-cover"
              width="300"
              height="200"
              style={{ aspectRatio: "300/200", objectFit: "cover" }}
            />
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">{mentor.name}</h2>
              <div className="flex items-center">
                <p className="text-sm text-base-300">{mentor.title}</p>
               
              </div>
            </div>
            <p className="mt-2 text-sm text-base-300">{mentor.description}</p>
          </div>
        </div>
      </div>
   
  );
}

export default MentorCard;