import Image from 'next/image';
import { MediaCard } from './card';
import { IconButton } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Typeography from '@mui/material/Typography';


export function Banner() {

    // Handle clicking the arrow down button
    function handleDownwardIconButtonClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {

        // Prevent the default behavior of the button
        event.preventDefault();

        // Scroll to the Experience section
        window.scrollTo({
            top: document.getElementById("Experience")?.offsetTop || 0,
            behavior: 'smooth'
        })
    }

    return (
        <main className={"flex flex-1 justify-center items-center flex-col min-h-screen  gap-2  "}>
            <div className={"flex  flex-col justify-center items-center"}>
                <h1 className={"text-3xl md:text-4xl text-black my-4"}>
                    Joseph Whiteaker
                </h1>
            </div>
            <div className={"flex flex-col justify-center items-center"}>
                <h2 className={" text-xl md:text-2xl text-black"}>
                    Full Stack Software Engineer
                </h2>
            </div>
            <IconButton className="w-24 h-24" onClick={handleDownwardIconButtonClick}>
                <ArrowDownwardIcon className="text-black" />
            </IconButton>
        </main>
    )
}