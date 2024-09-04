import React from 'react';
import mentors from '../data/mentorsData'; // Adjust the path as necessary

const Mentor = ({ mentorId }) => {
  // Find the mentor by ID
  const mentor = mentors.find((m) => m.id === mentorId);

  if (!mentor) {
    return <div>Mentor not found</div>;
  }

  return (
    <div className="h-auto bg-orange-300 text-black">
      <div className="flex flex-col items-center ">
        
        <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm bg-white shadow-xl rounded-lg text-gray-900">
          <div className="rounded-t-lg h-32 overflow-hidden bg-pink-300 w-[24rem]">
            {/* You can add an image or other content here */}
          </div>
          <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
            <img
              className="object-cover object-center h-32"
              src={mentor.imageUrl}
              alt={`${mentor.name} profile`}
            />
          </div>
          <div className="text-center mt-8">
            <h2 className="font-semibold">{mentor.name}</h2>
            <p className="text-gray-500">{mentor.title}</p>
          </div>
          <div className="flex justify-center mt-5 break-words mx-4 px-2">
            {mentor.description}
          </div>
          <div className="p-4 border-t mx-8 mt-2">
            <button className="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">
              Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentor;
