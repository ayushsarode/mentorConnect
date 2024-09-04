import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import mentors from "../../../data/mentorsData";

function MentorPage() {
  const { id } = useParams(); // Destructure the id from useParams
  const [mentor, setMentor] = React.useState({});

  const navigate = useNavigate();

  React.useEffect(() => {
    const foundMentor = mentors.find((m) => m.id === Number(id));
    setMentor(foundMentor || {}); 
  }, [id]); 

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3">
            <img
              className="w-full h-full  object-cover object-center"
              src={mentor.imageUrl}
              alt={mentor.name}
            />
          </div>
          <div className="md:w-2/3 p-8">
            <h1 className="text-4xl font-bold text-gray-900">{mentor.name}</h1>
            <p className="text-xl text-gray-600 mt-2">{mentor.title}</p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              {mentor.description}
            </p>
            <div className="mt-8">
              <button className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300">
                Quick Chat
              </button>
            </div>
            <div className="mt-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                Book a 1:1 Session
              </h2>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/mentormeet/${mentor.id}`);
                }}
                className="w-full bg-green-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-600 transition duration-300 mt-4"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MentorPage;