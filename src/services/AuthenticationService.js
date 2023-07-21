import axios from "axios"

const TOKEN=localStorage.getItem("token")

class AuthenticationService{
    loginUser(loginRequest){
        return axios.post(`localhost:8080/api/auth/login`,loginRequest);
    }

    registerUser(registerRequest){
        return axios.post(`localhost:8080/api/auth/register`,registerRequest);
    }


}

export default new AuthenticationService();