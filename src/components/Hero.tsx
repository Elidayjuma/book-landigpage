import React from 'react';
import { heroDetails } from '@/data/hero';
import { bookDetails } from '@/data/bookDetails';
import Image from "next/image";

type HeroProps = {
    form?: React.ReactNode;
    title?: string;
    subheading?: string;
};

const Hero: React.FC<HeroProps> = ({ form, title, subheading }) => {
    return (
        <section
            id="hero"
            className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5 min-h-[80vh]"
        >
            <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
                <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]">
                </div>
            </div>

            <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)]">
            </div>

            <div className="text-center w-[80vw] mx-auto">
                <h1 className="text-4xl md:text-6xl md:leading-tight font-bold text-foreground">{title ? title : heroDetails.heading}</h1>
                <p className="mt-4 text-foreground ">{subheading ? subheading : heroDetails.subheading}</p>
                <div className="mt-6 mb-60 sm:gap-4">
                    {form ?? (
                        <div className="mt-6 mb-60 flex flex-col sm:flex-row items-center justify-center gap-10">
                            <Image
                                src="/images/buildcover.jpg"
                                alt="Book Cover"
                                width={320}
                                height={480}
                                className="rounded shadow-lg"
                                priority
                            />
                            <div className="flex flex-col items-center gap-4">
                                <div className="text-4xl font-semibold text-foreground">
                                    <span className="line-through text-gray-400 mr-2">$15</span>
                                    <span className="text-green-600">{bookDetails.price}</span>
                                </div>
                                <div className="text-sm text-gray-500 mb-2">
                                    Limited offer at <span className="font-bold text-green-600">$9.99</span>!
                                </div>
                                <a
                                    href={bookDetails.buyUrl}
                                    className="px-8 py-4 bg-blue-600 text-white rounded font-semibold text-lg hover:bg-blue-700 transition"
                                >
                                    Buy Now
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Hero;
