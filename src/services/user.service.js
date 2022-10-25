import axios from "axios";

const API_URL = "http://129.153.201.136:8080//api";

const getPublicContent = () => {

    return axios.get(API_URL + "/items/status?status=true");

}

const getUserBoard = () => {
    return axios.get(API_URL + "/items/status?status=false");
};

const UserService = {

    getPublicContent,
    getUserBoard
};

export default UserService;