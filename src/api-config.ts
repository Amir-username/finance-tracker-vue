import axios from "axios";

const todosAPI = axios.create({
    baseURL: "https://dummyjson.com/todos"
})


export default todosAPI