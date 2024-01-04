import axios from 'axios';
import { MenuItem } from '@/interfaces/menu.interface';
import { CourseModel } from '@/interfaces/course.interface';
import { ProductModel } from '@/interfaces/product.interface';

const baseURL = 'https://nodejs-homework-rest-api-7or0.onrender.com';

export async function getCourses(): Promise<MenuItem[]> {
    const {data} = await axios.get(`${baseURL}/courses`);
    return data;
}

export async function getCourseByAlias(alias: string): Promise<CourseModel> {
    const res = await axios.get(`${baseURL}/courses/${alias}`);
    return res.data;
}

export async function getProducts(categories: string): Promise<ProductModel[]> {
    const res = await axios.post(`${baseURL}/courses/products`, {categories});
    return res.data;
}
