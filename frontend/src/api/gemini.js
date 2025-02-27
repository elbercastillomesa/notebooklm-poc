import axios from "axios";

const API_URL = "http://localhost:8000";

export const generateResponse = async (prompt) => {
    const { data } = await axios.post(`${API_URL}/generate`, { prompt });
    return data.response;
};
