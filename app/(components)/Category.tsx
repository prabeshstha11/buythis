import Image from "next/image";
import React from "react";

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

    return (
        <div className="flex justify-between gap-3 h-48">
            {category.map((item) => (
                <div className="h-full aspect-square m-3" key={item.id}>
                    <div className="h-44 w-full bg-red-500 relative overflow-hidden">
                        <Image src={item.image_url} alt={item.name} fill className="object-cover transition-transform duration-300 ease-in-out hover:scale-110" />
                    </div>
                    <h1 className="font-bold text-xl">{item.name}</h1>
                </div>
            ))}
        </div>
    );
};

export default Category;
