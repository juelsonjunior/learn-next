"use server";
import { waitTime } from "./utils";
import products from "../constants/product";

export default async function getProduct() {
  await waitTime(3000);
  return products;
}
