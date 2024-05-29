import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {

    const shoe = useLoaderData();

    console.log(shoe);

    return (
        <div className="hero min-h-[90vh] bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse mt-10">
                <img src={shoe?.imageLink} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-4xl font-bold">{shoe.name}</h1>
                    <h1 className="text-2xl font-bold">Brand : {shoe.brand}</h1>
                    <h1 className="text-2xl font-bold">Price : {shoe.price}$</h1>
                    <p className="py-6">{shoe?.productDetails}</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;