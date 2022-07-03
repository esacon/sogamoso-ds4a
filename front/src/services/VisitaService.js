import http from "../services/HttpService";

class VisitaService{
    findAll(){
        return await http.get("/visit?page=0")
    }

    find(idVisit){
        return await http.get(`/visit/${idVisit}`)
    }

    update(visit){
        return await http.put("/visit", visit);
    }

    save(visit){
        return await http.post("/visit", visit);
    }
}

export const service = new VisitaService();
export default service;