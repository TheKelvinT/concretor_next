"use client"

import Link from "next/link"
import axios from "axios"
import Image from 'next/image';
import heroimg from "@/assets/hero-img.png";
import construction from "@/assets/construction.png"
import { useRouter } from 'next/navigation';
import Button from "@/components/Button"

export default function Home() {
    const router = useRouter()

    const onClickContactUs = () => {
        router.push('/contact')
    }

    return (
        <div>
            <div className="relative">
                <div className = "h-4/6">
                    <Image
                        src={heroimg}
                        alt="Hero image"
                        layout="responsive"
                        // width={1440}
                        className = "object-cover"
                        fill = {true}
                        // height={605}
                    />
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                    <div className="text-white text-center">
                    <h2 className="font-bold">Transforming Spaces with <br/> Expert Renovation Solutions</h2>
                    <p className = "text-base">CONCRETOR is your trusted partner for all your renovation and construction needs. With <br/> our expertise and attention to detail, we deliver exceptional results that exceed <br/> expectations.</p>
                    </div>
                </div>
                <div>
                    <Button title={"Contact Us"} onClick={onClickContactUs}/>
                </div>
            </div>

            <div className = "mx-auto grid gap-10 md:grid-cols-2 md:items-center py-16 px-16">
                <div className="flex flex-col justify-center items-center md:items-start">
                    <h2 className="font-bold mb-4 text-center md:text-left">
                        Solving Construction and <br /> Renovation Challenges with <br /> Expertise
                    </h2>
                    <p className="text-center md:text-left">
                        At CONCRETOR, we specialize in providing innovative solutions to
                        <br /> construction and renovation challenges. With our expertise and
                        <br /> commitment to excellence, we are dedicated to delivering high-
                        <br /> quality results that exceed our clients' expectations. Whether it's a
                        <br /> small renovation project or a large-scale construction endeavor, we
                        <br /> have the knowledge and skills to tackle any challenge. Our unique
                        <br /> approach ensures that every project is completed efficiently, on time,
                        <br /> and within budget.
                    </p>
                </div>

                <div className = "flex justify-center hidden md:block">
                    <Image
                        src={construction}
                        alt="Construction image"
                        className ="w-[580px] h-[430px] rounded-lg"
                    />
                </div>
            </div>
        </div>


        
    );
}


