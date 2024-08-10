interface ProductPageId {
    params: {
        productId: string;
    }
}
const ProductPageId = ({ params }: ProductPageId) => {
    return (
        <div>
            console.log(product);
        </div>
    )
}