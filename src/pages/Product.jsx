import  { useState, useEffect } from 'react';
import Title from "../components/Title";
import useGetProduct from "../hooks/auth/useGetProduct";

const Product = () => {
    const { dataProduct, error, isLoading } = useGetProduct();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (dataProduct?.data) {
            setProducts(dataProduct.data);
        }
    }, [dataProduct]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error fetching products: {error.message}</div>;
    }

    return (
        <div>
            <Title title="Ordena un producto" />
            <div className="product">
                {products.length > 0 ? (
                    products.map((product, index) => (
                        <div key={product.id || index} className="product-item">
                            <h2>Nombre: {product.product_name}</h2>
                            <p>Descripción: {product.description}</p>
                            <p>Precio: {product.price}</p>
                        </div>
                    ))
                ) : (
                    <div>No products available.</div>
                )}
            </div>
        </div>
    );
}

export default Product;
