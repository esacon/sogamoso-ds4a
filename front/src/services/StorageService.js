class StorageService{
    get(name){
        const itemValue = localStorage.getItem(name)
        if(itemValue !== undefined)
            return JSON.parse(itemValue)
    }

    put(name, value){
        localStorage.setItem(name, JSON.stringify(value))
    }

    remove(name){
        localStorage.removeItem(name);
    }
}

const service = new StorageService();
export default service;