"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import AddProduct from "../(screen)/AddProduct";
import Order from "../(screen)/Order";
import ProductList from "../(screen)/ProductList";

import Cookie from "js-cookie";
import axios from "axios";

const page = () => {
    const [activeTab, setActiveTab] = useState<"add" | "list" | "order" | null>(null);

    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");

    useEffect(() => {
        const token = Cookie.get("token");
        axios
            .get("http://127.0.0.1:8000/api/admin/superuser/", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                console.log(response.data);
                setIsAdmin(true);
                setMessage(response.data.msg);
            })
            .catch((error) => {
                console.log("error fetching data", error);
                setMessage("you are not admin");
            });
    }, []);

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
                {activeTab === null && <h1 className="font-bold text-5xl text-center text-red-500 my-10">{message}</h1>}
                {isAdmin ? activeTab === "add" && <AddProduct /> : <h1 className="font-bold text-5xl text-center text-red-500 my-10">You can't access Add Product Page</h1>}
                {isAdmin ? activeTab === "list" && <ProductList /> : <h1 className="font-bold text-5xl text-center text-red-500 my-10">You can't access list Page</h1>}
                {isAdmin ? activeTab === "order" && <Order /> : <h1 className="font-bold text-5xl text-center text-red-500 my-10">You can't access order Page</h1>}
            </div>
        </>
    );
};

export default page;
