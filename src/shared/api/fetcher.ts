import { AxiosRequestConfig, isAxiosError } from "axios"
import apiClient from "../lib/apiClient"

interface FetcherProps {
    endpoint: string
    params?: Record<string, unknown>
    config?: AxiosRequestConfig
}
export const fetcher = async<T>(endpoint: string, params?: Record<string, unknown>, config?: AxiosRequestConfig ): Promise<T> => {

    try {
        const response = await apiClient<T>(endpoint, {
            ...config,
            params: {
                ...params,
            },
        })
        return response.data
    } catch (error) {
        if (isAxiosError(error)) {
            if (error.response) {
                console.error("Server Error:", error.response.status, error.response.data);
                throw new Error(error.response.data.message || "Server Error");
            }
            else if (error.request) {
                console.error("Network Error: No response received");
                throw new Error("Network issues. Please check your connection.");
            }
        }
        throw new Error("An unexpected error occurred");
    }
}