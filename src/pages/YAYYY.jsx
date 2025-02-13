import Button from "../components/Button"
import myImage from '../assets/images 5.jpeg'

export default function YAYYY() {
    return (
        <><h1 className='text-black'>FINALLY</h1><div className="flex flex-col gap-4 mt-4 justify-center">

            <img src={myImage} alt="Description of image" className="object-cover mt-4 mx-auto" />

            <Button
                to="/home"
                className="text-lg bg-red-400 text-white font-semibold rounded-lg px-4 py-2 text-center"
            >
                go to the actual website
            </Button>
        </div></>
    )
}