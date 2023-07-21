import ProductList from "./product/ProductList";
import CategoryList from "./general/category/Category";
import BrandList from "./general/brand/Brand";

const Home =()=>{
    return (
        <div>
            <CategoryList/>
            <BrandList/>
            <ProductList/>
        </div>
    )
}
export default Home;