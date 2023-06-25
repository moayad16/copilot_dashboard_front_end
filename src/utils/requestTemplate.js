import axios from "axios";

const ax = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Authorization": localStorage.getItem("token")
    },
});


export default ax;