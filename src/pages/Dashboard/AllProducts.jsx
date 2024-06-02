import { useState } from "react";
import { useEffect } from "react";
import DashboardProduct from "./DashboardProduct";

const AllProducts = () => {
    // eslint-disable-next-line no-unused-vars
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/shoes/")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    const handleDeleteProduct = (id) => {
        setProducts(products.filter((product) => product._id !== id));
      };

    return (
        <>
            <div className="mt-5 mx-5 ">
                <h1 className=" text-2xl font-semibold border-b-2 text-center pb-2">All Products</h1>
            </div>
            <div className="mx-10 flex flex-row flex-wrap justify-center  gap-5  mt-10 mb-4">
                {
                    products.map(shoe => <DashboardProduct key={shoe?._id} shoe={shoe} onDeleteProduct={handleDeleteProduct}></DashboardProduct>)
                }
            </div>
        </>

    );
};

export default AllProducts;