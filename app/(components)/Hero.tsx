import React from "react";
import Image from "next/image";
import Category from "./Category";

const Hero = () => {
    return (
        <div className="p-10">
            <Image src={"/banner.png"} alt="banner" height={200} width={1920} className="w-full h-auto rounded-xl" />
            <Category />
        </div>
    );
};

export default Hero;
