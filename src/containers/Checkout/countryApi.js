import axios from "axios"


export const regionApi = async (setter) =>{
    try {
        const res = await axios.get('https://bdapis.herokuapp.com/api/v1.0/divisions');
        const newDivision =res?.data?.data?.map(div =>{
            return {value: div?._id, label: div?.division}
        })
        setter(newDivision);
    } catch (error) {
        console.log(error);
    }
}
export const districApi = async (dis, setter, setUpzela) =>{
    try {
        const res = await axios.get(`https://bdapis.herokuapp.com/api/v1.0/division/${dis}`);
        const district =res?.data?.data?.map(div =>{
            const upazilla =  div?.upazilla?.map((up, index) =>{
                return {value: index, lebel: up}
            })
            console.log(upazilla);
            return {value: div?._id, label: div?.district}
        })
        setter(district);
    } catch (error) {
        console.log(error);
    }
}