import Button from "../components/Button";
import myImage from "../assets/image 3.png";

export default function BroPleaseeeeWTF() {
    return (
        <>
            <h1 className="flex flex-col">PLEASEEEEEEEEEEEEEEEE</h1>

            <img src={myImage} alt="Description of image" className="w-[200px] h-[200px] object-cover mt-4 mx-auto" />
            
            
            <div className="flex flex-row gap-4 mt-4 justify-center">
                <Button
                to="/YAYYY"
                className="text-lg bg-red-400 text-white font-semibold rounded-lg px-4 py-2 text-center"
                >
                    Yes
                </Button>
                <Button
                to="/survive"
                className="text-lg bg-gray-400 text-white font-semibold rounded-lg px-4 py-2 text-center"
                >
                    No
                </Button>
            </div>
        </>
    );
}