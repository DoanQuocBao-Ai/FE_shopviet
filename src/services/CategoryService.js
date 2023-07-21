import axios from "axios"

const TOKEN =localStorage.getItem("token");

class CategoryService{
    saveCategory(category){
        console.log(TOKEN);

        return axios.post(`localhost:8080/api/admin/addCat?token=${TOKEN}`,category)
    }

    getAllCategory(){
        return axios.get(`localhost:8080/api/shopviet/allCat`);
    }

    deleteCategory(id){
        return axios.delete(`localhost:8080/api/admin/delCat/${id}?token=${TOKEN}`)
    }

    editCategory(id,category){
        return axios.put(`localhost:8080/api/admin/putCat/${id}?token${TOKEN}`,category)
    }
}
export default new CategoryService();