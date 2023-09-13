import { api } from "../axios";

export const postProduct = async (formData) => {
    const { data } = await api.post("/products/add", formData);
    return data;
};