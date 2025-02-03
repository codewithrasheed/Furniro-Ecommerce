import { groq } from "next-sanity";
import sanityClient from "./sanity.client";

export async function getProducts() {
    return sanityClient.fetch(
        groq `
        *[_type == "product"]{
        _id,
        title,
        description,
        "slug": slug.current,
        "productImage": productImage.asset->url,
        price,
        category,
        summary,
        tags,
        isNew
        }
        `
    )
}



export async function getHomeProducts() {
    return sanityClient.fetch(
        groq `
        *[_type == "product"][0...8]{
        _id,
        title,
        description,
        "slug": slug.current,
        "productImage": productImage.asset->url,
        price,
        category,
        summary,
        tags,
        isNew
        }
        `
    )
}

export async function getOrders() {
    return sanityClient.fetch(
        groq `
        *[_type == "order"]{
        _id,
        firstName,
        lastName,
        company,
        country,
        address,
        city,
        province,
        zipCode,
        phone,
        email,
        "cartItem": cartItems[]->{title, price, quantity},
        total,
        orderStatus,
        orderDate
        }
        `
    )
}

