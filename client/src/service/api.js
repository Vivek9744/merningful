import axios from "axios"
const URL="https://a1-w3yj.onrender.com"
export const addUser=async (data)=>{
    try{
        return await axios.post(`${URL}/register`,data)

    }catch(error){
        console.log("Error add",error.response.data)
        return error
    }
}
export const posts=async (data)=>{
    try{
        return await axios.post(`${URL}/post`,data)

    }catch(error){
        console.log("Error add",error)
    }
}

export const getUsers=async ()=>{
    try{
    return await axios.get(`${URL}/fetchUsers`)

}catch(error){
    console.log("Error Get",error)
}
}
export const getPosts=async ()=>{
    try{
    return await axios.get(`${URL}/fetchPosts`)

}catch(error){
    console.log("Error Get",error)
}
}

export const addMessage=async (data)=>{
    try{
        return await axios.post(`${URL}/message`,data)

    }catch(error){
        console.log("Error add",error)
        console.log(data)
        return error
    }
}
export const getMessages=async (data)=>{
    console.log("message get requyues")
    try{
        return await axios.post(`${URL}/fetchMessage`,data)

    }catch(error){
        console.log("Error add",error)
        return(error)
    }
}
export const isUser=async (data)=>{
    try{
        return await axios.post(`${URL}/isUser`,data)

    }catch(error){
        console.log("Error message",error)
        return(error)
    }
}