import axios from "axios";

class UserService{
    registerService(user){
     return axios.post('http://localhost:9090/LIFELINE-api/LIFELINE/registerUser', user);   
    }
    loginService(user){
        // alert('service'+JSON.stringify(user));
        //user is the data we're gonna pass
        return axios.post('http://localhost:9090/LIFELINE-api/LIFELINE/user/login', user)
    }
    logoutService(user){
        // alert('service'+JSON.stringify(user));
        //user is the data we're gonna pass
        return axios.post('http://localhost:9090/LIFELINE-api/LIFELINE/user/logout', user)
    }

}
export default UserService;