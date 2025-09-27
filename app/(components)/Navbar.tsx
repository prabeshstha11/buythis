"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Search, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
    const placeholders = [
        "Search for apples, milk, or bread",
        "Find your favorite fruits",
        "Looking for fresh vegetables?",
        "Type a grocery item...",
        "Search deals & discounts",
        "Find organic or local produce",
        "Grab your weekly essentials",
    ];

    const [index, setIndex] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setIndex((prev) => (prev + 1) % placeholders.length);
    //     }, 1000);

    //     return () => clearInterval(interval);
    // }, []);

    return (
        <div className="h-28 flex justify-between shadow-2xl items-center p-3">
            <Image src={"/buythis.png"} alt="logo" width={200} height={200}></Image>

            <div>
                <h1 className="text-3xl font-bold">Delivery in 19 minutes</h1>
                <p>Kalanki, Kathmandu</p>
            </div>

            <div className="w-1/3 h-14 flex items-center relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input placeholder={placeholders[index]} className="w-full h-full pl-12" />
            </div>

            <div>
                <h1 className="font-bold">Login</h1>
            </div>

            <div className="relative w-28">
                <ShoppingBag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Button className="h-14 pl-12">My Cart</Button>
            </div>

            {/* <div className="relative w-28">
                <ShoppingBag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-900" />
                <Button className="h-14 pl-12 bg-[#50fa7b] hover:bg-[#50fa7b] text-gray-900 font-bold">Rs 500 (2)</Button>
            </div> */}
        </div>
    );
};

export default Navbar;
