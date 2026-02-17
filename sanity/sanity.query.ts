// sanity/sanity.query.ts
import { groq } from "next-sanity";
import { client } from "./sanity.client";

export async function getPortfolioItems() {
  return client.fetch(
    groq`*[_type == "portfolioItem"]{
      _id,
      title,
      category,
      image,
      videoUrl,
      date,
      description
    }`
  );
}

export async function getPortfolioItemsByCategory(category: string) {
  return client.fetch(
    groq`*[_type == "portfolioItem" && category == $category] | order(date desc) [0...6] {
      _id,
      title,
      category,
      image,
      videoUrl,
      date,
      description
    }`, { category }
  );
}
