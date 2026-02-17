// sanity/sanity.client.ts
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'f69fcuq2',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: "2023-05-03", // Use current date for latest
  useCdn: false, // Set to true to cache content
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}