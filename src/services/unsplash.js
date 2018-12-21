import axios from "axios";

export default async term => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        params: {
            query: term
        }
    });

    return response.data.results;
};
