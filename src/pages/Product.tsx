import { BannerHeader, ProductList } from "@/components";
import { SEO } from "@/components/SEO";

const Product = () => {
    return(
        <>
            <SEO
                title="Raw Organic Honey – HanaHoney"
                description="Discover our best-selling raw organic honey, packed with natural nutrients and flavor."
                image="https://hanahoney.com.au/images/product-raw-honey.jpg"
                url="https://hanahoney.com.au/products/raw-organic-honey"
                type="product"
            />

            <div>

                <BannerHeader 
                backgroundImage="../../public/images/banner_header_product.png" 
                title="PURE BEE PRODUCTS"
                backgroundPosition=""
                >
                    <p>
                    PURE BEE PRODUCTS 
                    </p>
                </BannerHeader>

                <ProductList/>
            </div>
        </>
    )
}

export default Product;