// Example usage in a parent component
import Mentors from "../components/mentors";

function Mentor() {
  return (
    <div className="h-[100vh] bg-orange-300 text-black">
    <h1 className="text-7xl mb-10 py-10 flex justify-center">For people <span className="font-bold"> making Impact</span></h1>
    <div className="flex justify-center">
      <Mentors mentorId={1} /> {/* Pass the ID of the mentor you want to display */}
      <Mentors mentorId={2} />
      <Mentors mentorId={3} />

      </div>
    </div>
  );
}

export default Mentor;
