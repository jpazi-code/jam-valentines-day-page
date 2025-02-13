import Button from "../components/Button"

export default function YAYYY2() {
    return (
        <><h1 className='text-black'>YAY I LOVE U MWA</h1><div className="flex flex-row gap-4 mt-4 justify-center">
            <Button
                to="/home"
                className="text-lg bg-red-400 text-white font-semibold rounded-lg px-4 py-2 text-center"
            >
                go to the actual website
            </Button>
        </div></>
    )
}