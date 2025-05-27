import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers:{
        accept: "application/json",
        Authorization:
        "Bearer eyJhbGci0iJIUZI1NiJ9.eyJhdWQiOiIyMjM2NjdkMTIzOTg3MWZjNGI2ZWVlZjhkMGQ2ZGVmOCIsInN1YiI6IjYxZmQyNWFjZWV1MT92MDA5MTFKOTZjNCIsInNjb3Blcy16wyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uPjuX67gkt1PIFC1Y6ZuR7Xm5bZESAcyqvSu8swmOLI",
    },
})

export default instance;