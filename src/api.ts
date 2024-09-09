import axios from 'axios';
import { ILog, IProduct } from './types';

const axiosInstance = axios.create({
    baseURL: process.env.BACKEND_URL,
    timeout: 5000
});

export async function asyncGetProducts() {
    try {
        const response = await axiosInstance.get<IProduct[]>('/db-collection');
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}

export async function asyncGetLogs(interval: number) {
    let endPoint = '';
    if (interval !== 0) {
        endPoint = `?interval=${interval}`;
    }

    try {
        const response = await axiosInstance.get<ILog[]>(`/logs${endPoint}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}

export async function asyncPostProduct(formData: IProduct) {
    try {
        const response = await axiosInstance.post('/db', { data: formData });

        return response.data;
    } catch (error) {
        console.error('Error posting product:', error);

        return false;
    }
}

export const asyncUpdateProduct = async (id: string, updatedData: IProduct) => {
    try {
        const encodedId = encodeURIComponent(id);
        const response = await axiosInstance.post(`/db/${encodedId}`, { data: updatedData });

        return response.data;
    } catch (error) {
        console.error('Error updating product:', error);
    }
};

export const asyncDeleteProduct = async (id: string) => {
    try {
        const encodedId = encodeURIComponent(id);
        const response = await axiosInstance.delete(`/db/${encodedId}`);

        return response.data;
    } catch (error) {
        console.error('Error deleting product:', error);
    }
};
