"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type ItemQuantity = {
    stock: number;
};

type Item = {
    id: number;
    product_name: string;
    product_description: string;
    product_category: string;
    product_price: number;
    offer_price: number;
    image_url: string;
    quantity?: ItemQuantity;
};

const ProductList = () => {
    const [products, setProducts] = useState<Item[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const token = Cookies.get("token");
                const response = await axios.get<Item[]>("http://127.0.0.1:8000/api/admin/Items/", {
                    headers: token
                        ? {
                              Authorization: `Bearer ${token}`,
                          }
                        : undefined,
                });
                setProducts(response.data);
            } catch (error: any) {
                console.error("Error fetching products:", error.response?.data || error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <div>Loading products...</div>;
    if (!products.length) return <div>No products found</div>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-10">
            {products.map((item) => (
                <Card key={item.id}>
                    <CardHeader>
                        <CardTitle>{item.product_name}</CardTitle>
                        <Badge>{item.product_category}</Badge>
                    </CardHeader>
                    <CardContent>
                        <p>{item.product_description}</p>
                        <p>Price: ${item.product_price}</p>
                        <p>Offer: ${item.offer_price}</p>
                        <p>Stock: {item.quantity?.stock ?? 0}</p>
                        {item.image_url && <img src={item.image_url} alt={item.product_name} className="mt-2 w-full h-40 object-cover rounded" />}
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default ProductList;
