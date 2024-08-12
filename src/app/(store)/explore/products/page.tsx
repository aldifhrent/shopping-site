import Header from "@/components/header"
import ProductCard from "@/components/products/products-card"
import Wrapper from "@/components/wrapper"
import { getProduct } from "@/features/product/hooks/product"
import { formatPrice } from "@/lib/formatprice"
import { Product } from "@prisma/client"

const ProductsPage = async() => {
    const products = await getProduct();


    return (
    <>
        <Header/>
        <Wrapper>
            <h1 className="text-4xl font-bold">Find the Perfect Product for You</h1>
            <p className="text-sm">Browse through our wide range of categories and find what suits your needs.</p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-6 md:grid-cols-4 mt-6">
                {products.map((product) => (
                    <ProductCard 
                    name={product.name} 
                    price={formatPrice(product.price)}
                    key={product.id}/>
                ))}
            </div>
        </Wrapper>
    </>
    )
}

export default ProductsPage