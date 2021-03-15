import axiosIntance from "../helper/axios";

export const productWithSlug = async (slug, setter) =>{
    try {
        const res = await axiosIntance.get(`/products/${slug}`);
        setter(res?.data?.products);
    } catch (error) {
        console.log(error);
    }
}