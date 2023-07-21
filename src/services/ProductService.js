import axios from "axios"

const TOKEN =localStorage.getItem("token");

class ProductService{
    saveProduct(product){
        console.log(TOKEN);

        return axios.post(`localhost:8080/api/admin/addCat?token=${TOKEN}`,product)
    }

    getAllProduct(){
        return axios.get(`localhost:8080/api/shopviet/allProd?sort=nameAsc`);
    }

    deleteProduct(id){
        return axios.delete(`localhost:8080/api/admin/delCat/${id}?token=${TOKEN}`)
    }

    editProduct(id,product){
        return axios.put(`localhost:8080/api/admin/putCat/${id}?token${TOKEN}`,product)
    }
}
export default new ProductService();