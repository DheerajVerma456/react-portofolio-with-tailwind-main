import React from 'react'
import { AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import deved from "../public/dev-ed-wave.png";
import Image from 'next/image';

function MidSection() {
    const handleLinkedInRedirect = () => {
        window.open("https://www.linkedin.com/in/dheeraj-verma-10206a251/", '_blank');
    };
    const handleTwitterRedirect = () => {
        window.open("https://twitter.com/dheeraj_verma", '_blank');
    };

    return (
        <section className="min-h-screen">
            <nav className="py-10 mb-12 flex justify-between dark:text-white">
                <h1 className="font-burtons text-xl">developedbyed</h1>
                <ul className="flex items-center">
                    <li>
                        <BsFillMoonStarsFill
                            onClick={() => setDarkMode(!darkMode)}
                            className=" cursor-pointer text-2xl"
                        />
                    </li>
                    <li>
                        <a
                            className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                            href="#"
                        >
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="text-center p-10 py-10">
                <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
                    Dheeraj Verma
                </h2>
                <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
                    Web and Android Developer
                </h3>
                <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                    Skilled Web and Android Developer Seeking New Opportunities. Explore my work below and let's build something great together!
                </p>
                <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
                    <button onClick={handleLinkedInRedirect}><AiFillLinkedin /></button>
                    <AiFillYoutube />
                    <button onClick={handleTwitterRedirect}><AiFillTwitterCircle /></button>
                </div>
                <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
                    <Image src={deved} alt="" layout="fill" objectFit="cover" />
                </div>
            </div>
        </section>
    )
}

export default MidSection
