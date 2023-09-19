import axios from "axios";

export const addTodo = async (formData) => {
    const { data } = await axios.post("/api/add-todo", formData);
    return data;
};

export const getTodos = async () => {
    const { data } = await axios.get("/api/get-todos");
    return data;
};