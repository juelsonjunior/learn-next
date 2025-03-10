"use server";
import { waitTime } from "./utils";
import products from "../constants/product";

export default async function getProductById(id: number) {
  await waitTime(3000);
  const product = products.find((product) => product.id === id);
  return product;
}
