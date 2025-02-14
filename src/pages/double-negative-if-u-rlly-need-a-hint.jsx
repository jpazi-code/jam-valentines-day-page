import Button from "../components/Button";
import myImage from "../assets/image 4.png";

export default function DoubleNegation() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Title */}
      <h1 className="text-2xl font-semibold text-center mb-4">
        Will u not be my valentine?
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
          to="/survive"
          className="shadow-md text-4xl bg-red-400 text-white font-bold rounded-lg px-6 py-3"
        >
          Yes
        </Button>
        <Button
          to="/YAYYY"
          className="shadow-md text-xs bg-gray-400 text-white font-semibold rounded-lg px-2 py-1"
        >
          No
        </Button>
      </div>
    </div>
  );
}
