import axios from "axios";

export const getTest = async () => {
    try {
        const response = await axios.post("http://localhost:3000/json");
        return response.data;
    } catch (error) {
        console.error(error);
    }
}