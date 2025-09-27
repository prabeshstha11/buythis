"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import AddProduct from "../(screen)/AddProduct";
import Order from "../(screen)/Order";
import ProductList from "../(screen)/ProductList";

const page = () => {
    const [activeTab, setActiveTab] = useState<"add" | "list" | "order" | null>(null);

    return (
        <>
            <div className="h-28 flex justify-between shadow-2xl items-center p-3">
                <Link href={"/"}>
                    <Image src={"/buythis.png"} alt="logo" width={200} height={200}></Image>
                </Link>
                <div className="flex gap-9 mr-10">
                    <Button className="font-bold h-12 w-32 bg-[#50fa7b] text-[#f8f8f2] hover:bg-[#50fa7b] cursor-pointer" onClick={() => setActiveTab("add")}>
                        Add Product
                    </Button>
                    <Button className="font-bold h-12 w-32 bg-[#50fa7b] text-[#f8f8f2] hover:bg-[#50fa7b] cursor-pointer" onClick={() => setActiveTab("list")}>
                        Product List
                    </Button>
                    <Button className="font-bold h-12 w-32 bg-[#50fa7b] text-[#f8f8f2] hover:bg-[#50fa7b] cursor-pointer" onClick={() => setActiveTab("order")}>
                        Order
                    </Button>
                </div>
            </div>

            <div>
                {activeTab === null && <h1 className="text-3xl text-red-500 text-center">Sorry you are not admin!</h1>}
                {activeTab === "add" && <AddProduct />}
                {activeTab === "list" && <ProductList />}
                {activeTab === "order" && <Order />}
            </div>
        </>
    );
};

export default page;
