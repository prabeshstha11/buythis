"use client";
import Navbar from "@/app/(components)/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm, SubmitHandler } from "react-hook-form";

type Login = {
    username: string;
    password: string;
};

const page = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Login>();
    const onSubmit: SubmitHandler<Login> = (data) => {
        console.log(data);
    };

    // console.log(watch("username"));

    return (
        <>
            <Navbar />
            <div className="flex justify-center min-h-screen px-4">
                <form onSubmit={handleSubmit(onSubmit)} className="p-10 flex flex-col gap-10 w-full max-w-md">
                    <h1 className="font-bold text-3xl text-center">Login</h1>

                    <Input type="text" {...register("username", { required: "Username is required" })} placeholder="Username" className="h-12" defaultValue={"neko"} />
                    {errors.username && <span className="text-red-500">{errors.username.message}</span>}

                    <Input type="password" {...register("password", { required: "Password is required" })} placeholder="Password" className="h-12" defaultValue={"neko"} />
                    {errors.password && <span className="text-red-500">{errors.password.message}</span>}

                    <Button type="submit" className="h-12 w-max">
                        Login
                    </Button>
                </form>
            </div>
        </>
    );
};

export default page;
