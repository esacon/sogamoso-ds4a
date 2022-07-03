import http from "../services/HttpService";

class UserService{
    async exists(username, password){
        return await http.post("/user/exists", {
            username,
            password
        });
    }

    async save(user){
        return await http.post("/user", user);
    }

    async update(){
        return await http.put("/user", {});
    }

    async findAll(){
        return await http.get("/user");
    }

    async find(username){
        return await http.get(`/user/${username}`);
    }
}

export const service = new UserService();
export default service;