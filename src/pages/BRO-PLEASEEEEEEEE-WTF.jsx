import Button from "../components/Button";
import myImage from "../assets/image 3.png";

export default function BroPleaseeeeWTF() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-4">PLEASEEEEEEEEEEEEEEEE</h1>

      {/* Image */}
      <img
        src={myImage}
        alt="Description of image"
        className="w-[200px] h-[200px] object-cover mb-4"
      />

      {/* Buttons */}
      <div className="relative w-full flex justify-center">
        {/* MASSIVE YES BUTTON */}
        <Button
          to="/YAYYY"
          className="shadow-md text-6xl bg-red-400 text-white font-extrabold rounded-lg px-12 py-8 z-10"
        >
          Yes
        </Button>

        {/* TINY NO BUTTON (HIDDEN IN THE CORNER) */}
        <Button
          to="/double-negative-if-u-rlly-need-a-hint"
          className="shadow-md text-[2px] bg-gray-400 text-white font-semibold 
                     rounded-lg px-1 py-0.5 text-center 
                     absolute top-2 right-2"
        >
          No
        </Button>
      </div>
    </div>
  );
}
