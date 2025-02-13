import Button from '../components/Button';
import myImage from '../assets/images.jpeg'; // Adjust the path to your image file


export default function BroCmon() {
    return (
        <>
          <h1 className="flex flex-col">cmon bruh ts (this) pmo (piss me off)</h1>
          <h2 className="flex flex-col">just press yes</h2>

          <img src={myImage} alt="Description of image" className="w-[200px] h-[200px] object-cover mt-4 mx-auto" />
    
          <div className="flex flex-row gap-4 mt-4 justify-center">
            <Button
              to="/YAYYY"
              className="text-lg bg-red-400 text-white font-semibold rounded-lg px-5 py-2 text-center"
            >
              Yes
            </Button>
            <Button
              to="/PLEASEEEEEEE"
              className="text-lg bg-gray-400 text-white font-semibold rounded-lg px-4 py-2 text-center"
            >
              No
            </Button>
          </div>
        </>
    );
}