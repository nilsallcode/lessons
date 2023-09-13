import { api } from "../axios";

export const getProducts = async () => {
    const { data } = await api.get("/products");
    return data;
};