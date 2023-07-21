import axios from "axios"

const TOKEN =localStorage.getItem("token");

class BrandService{
    saveBrand(brand){
        console.log(TOKEN);

        return axios.post(`localhost:8080/api/admin/addBrand?token=${TOKEN}`,brand)
    }

    getAllBrand(){
        return axios.get(`localhost:8080/api/shopviet/allBrand`);
    }

    deleteBrand(id){
        return axios.delete(`localhost:8080/api/admin/delBrand/${id}?token=${TOKEN}`)
    }

    editBrand(id){
        return axios.put(`localhost:8080/api/admin/putBrand/${id}?token${TOKEN}`,brand)
    }
}
export default new BrandService();