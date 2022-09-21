import axios from 'axios';

const USER_SYSTEM_API_BASE_URL = "http://localhost:8081/userSystem";

class UserSystemService {

    getUserSystems(){
        return axios.get(USER_SYSTEM_API_BASE_URL);
    }

    createUserSystem(userSystem){
        return axios.post(USER_SYSTEM_API_BASE_URL, userSystem);
    }

    getUserSystemById(userSystemId){
        return axios.get(USER_SYSTEM_API_BASE_URL + '/' + userSystemId);
    }

    updateUserSystem(userSystem){
        return axios.put(USER_SYSTEM_API_BASE_URL, userSystem);
    }

    deleteUserSystem(userSystemId){
        return axios.delete(USER_SYSTEM_API_BASE_URL + '/' + userSystemId);
    }
}

export default new UserSystemService()