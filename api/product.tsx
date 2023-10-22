import { API } from "@/api/api";
import { ProductModel } from "@/interfaces/product.interface";

export async function getProduct(category: string): Promise<ProductModel[]> {
    const res = await fetch(API.product.find, {
        method: "POST",
        body: JSON.stringify({
            category,
            limit: 10,
        }),
        headers: new Headers({ "content-type": "application/json" }),
        next: { revalidate: 1000 },
    });
    return res.json();
}
