import { products } from "@/data/product";
import ProductCard from "../Product/ProductCard";

const ProductList =  ()=>{

    return(
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((item, index)=>(
                    <ProductCard product={item} key={index}/>
                ))}
            </div>
        </div>
    )
}

export default ProductList;