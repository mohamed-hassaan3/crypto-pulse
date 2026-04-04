import axios from "axios";

const COINGECKO_API = process.env.BASE_URL
const COINGECKO_API_KEY = process.env.COINGECKO_API_KEY

export default axios.create({
    baseURL: COINGECKO_API || 'http://localhost:3000',
    headers: {
        "Content-Type": "application/json",
        "x-cg-demo-api-key": COINGECKO_API_KEY
    }
})