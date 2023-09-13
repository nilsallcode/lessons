import { api } from "../axios";

export const getProduct = async (id) => {
    const { data } = await api.get(`/products/${id}`);
    return data;
};