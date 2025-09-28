"use client";
import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import axios from "axios";
import Cookies from "js-cookie";

import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

type ItemQuantity = {
    stock: number;
};

type ItemForm = {
    product_name: string;
    product_description: string;
    product_category: "FRUITS" | "VEGGIES" | "DAIRY" | "MEAT" | "BAKERY" | "BEV" | "ESSENTIALS" | "FROZEN" | "HOUSE" | "CARE";
    product_price: number;
    offer_price: number;
    image_url: string;
    quantity?: ItemQuantity;
};

export default function AddProduct() {
    const form = useForm<ItemForm>();

    const onSubmit: SubmitHandler<ItemForm> = async (data) => {
        try {
            const token = Cookies.get("token");
            const response = await axios.post("http://127.0.0.1:8000/api/admin/Items/", data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });
            console.log("Item created:", response.data);
        } catch (error: any) {
            console.error("Error creating item:", error.response?.data || error.message);
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 p-10">
                {/* Product Name */}
                <FormField
                    control={form.control}
                    name="product_name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Product Name</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder="Product Name" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Description */}
                <FormField
                    control={form.control}
                    name="product_description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder="Description" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Category (Controller required for ShadCN Select) */}
                <FormField
                    control={form.control}
                    name="product_category"
                    render={() => (
                        <FormItem>
                            <FormLabel>Category</FormLabel>
                            <FormControl>
                                <Controller
                                    name="product_category"
                                    control={form.control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select Category" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="FRUITS">Fruits</SelectItem>
                                                <SelectItem value="VEGGIES">Vegetables</SelectItem>
                                                <SelectItem value="DAIRY">Dairy & Eggs</SelectItem>
                                                <SelectItem value="MEAT">Meat & Seafood</SelectItem>
                                                <SelectItem value="BAKERY">Bakery & Snacks</SelectItem>
                                                <SelectItem value="BEV">Beverages</SelectItem>
                                                <SelectItem value="ESSENTIALS">Daily Essentials</SelectItem>
                                                <SelectItem value="FROZEN">Frozen Foods</SelectItem>
                                                <SelectItem value="HOUSE">Household Essentials</SelectItem>
                                                <SelectItem value="CARE">Personal Care & Health</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Price */}
                <FormField
                    control={form.control}
                    name="product_price"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Price</FormLabel>
                            <FormControl>
                                <Input type="number" step="0.01" {...field} placeholder="Price" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Offer Price */}
                <FormField
                    control={form.control}
                    name="offer_price"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Offer Price</FormLabel>
                            <FormControl>
                                <Input type="number" step="0.01" {...field} placeholder="Offer Price" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Image URL later change this to upload*/}
                <FormField
                    control={form.control}
                    name="image_url"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Image URL</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder="Image URL" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Stock */}
                <FormField
                    control={form.control}
                    name="quantity.stock"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Stock</FormLabel>
                            <FormControl>
                                <Input type="number" {...field} placeholder="Stock" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit">Create Item</Button>
            </form>
        </Form>
    );
}
