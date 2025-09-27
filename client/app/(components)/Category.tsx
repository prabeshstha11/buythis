"use client";

import Image from "next/image";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Link from "next/link";

const Category = () => {
    const category = [
        {
            id: 1,
            name: "Fresh Fruits",
            image_url: "https://i.imgur.com/0mxuRy9.jpeg",
        },
        {
            id: 2,
            name: "Fresh Vegetables",
            image_url: "https://i.imgur.com/RnJrDt5.jpeg",
        },
        {
            id: 3,
            name: "Dairy & Eggs",
            image_url: "https://i.imgur.com/BkTJVOf.jpeg",
        },
        {
            id: 4,
            name: "Meat & Seafood",
            image_url: "https://i.imgur.com/ERZraAa.jpeg",
        },
        {
            id: 5,
            name: "Bakery & Snacks",
            image_url: "https://i.imgur.com/HIhgDcP.png",
        },
        {
            id: 6,
            name: "Beverages",
            image_url: "https://i.imgur.com/BGXaywU.jpeg",
        },
        {
            id: 7,
            name: "Daily Essentials",
            image_url: "https://i.imgur.com/Jdl7K0z.jpeg",
        },
        {
            id: 8,
            name: "Frozen Foods",
            image_url: "https://i.imgur.com/xgWgKOC.jpeg",
        },
        {
            id: 9,
            name: "Household Essentials",
            image_url: "https://i.imgur.com/Y7GDK6q.jpeg",
        },
        {
            id: 10,
            name: "Personal Care & Health",
            image_url: "https://i.imgur.com/B3U6CV5.jpeg",
        },
    ];

    function slugify(text: string) {
        return text
            .toLowerCase()
            .replace(/&/g, "and")
            .replace(/[^a-z0-9\s-]/g, "")
            .trim()
            .replace(/\s+/g, "-");
    }

    return (
        <div className="p-3 mt-10">
            <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={50}
                breakpoints={{
                    320: { slidesPerView: 2 },
                    640: { slidesPerView: 3 },
                    768: { slidesPerView: 4 },
                    1024: { slidesPerView: 6 },
                    1280: { slidesPerView: 8 },
                }}
            >
                {category.map((item) => (
                    <SwiperSlide key={item.id}>
                        <Link href={`/category/${slugify(item.name)}`}>
                            <div className="h-44 w-44 relative overflow-hidden rounded-lg group">
                                <Image src={item.image_url} alt={item.name} fill className="object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110" />
                            </div>

                            <h1 className="font-bold text-xl mt-2">{item.name}</h1>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Category;
