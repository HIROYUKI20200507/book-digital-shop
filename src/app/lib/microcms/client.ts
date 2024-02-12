import { createClient } from "microcms-js-sdk";
import { BookType } from "@/app/types/types"

export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN || "",
  apiKey: process.env.NEXT_PUBLIC_API_KEY || "",
});

export const getAllBooks = async () => {
  const data = await client.getList<BookType>({
    endpoint: "ebook",
  });

  return data;
};
