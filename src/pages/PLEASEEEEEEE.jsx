import Button from "../components/Button";
import myImage from "../assets/image 2.jpeg";

export default function PLEASEEE() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Title */}
      <h1 className="text-2xl font-semibold text-center mb-4">
        istg if u say no again i'll crash out fr
      </h1>

      {/* Image */}
      <img
        src={myImage}
        alt="Angry emoji"
        className="w-[200px] h-[200px] object-cover mb-4"
      />

      {/* Button Container */}
      <div className="flex items-center gap-4">
        <Button
          to="/YAYYY"
          className="shadow-md text-4xl bg-red-400 text-white font-bold rounded-lg px-6 py-3"
        >
          Yes
        </Button>
        <Button
          to="/BRO-PLEASEEEEEEEE-WTF"
          className="shadow-md text-xs bg-gray-400 text-white font-semibold rounded-lg px-2 py-1"
        >
          No
        </Button>
      </div>
    </div>
  );
}
