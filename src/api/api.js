

import axios from "axios";

const BASE_URL = "http://127.0.0.1:5000/"; // Replace this with your actual API base URL

export async function uploadImage(file) {
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await axios.post(BASE_URL + "predict", formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        return response.data;
    } catch (error) {
        console.error("Error uploading image:", error);
        throw new Error("Error uploading image: " + error.message);
    }
}

export async function getPlayerStats() {
    try {
        const response = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/your-endpoint`);
        if (!response.data) {
            return { runs: 0, wickets: 0, catches: 0, sixes: 0 }; // default values
        }
        return response.data;
    } catch (error) {
        console.error(error);
        return { runs: 0, wickets: 0, catches: 0, sixes: 0 }; // default values in case of an error
    }
}

//sendPlayerData
export async function sendPlayerData(playerData) {
    try {
        const response = await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/your-endpoint`, playerData);
        return response.data;
    } catch (error) {
        console.error("Error sending player data:", error);
        throw new Error("Error sending player data: " + error.message);
    }
}


