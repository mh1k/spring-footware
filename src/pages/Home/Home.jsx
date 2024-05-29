import Banner from "../../components/Home/Banner";
import { useLoaderData } from "react-router-dom";
import Products from "../../components/products/Products";


const Home = () => {

    const data = useLoaderData();
    console.log(data);
    return (
        <div className="">
            <Banner />
            <div className="text-center mt-8">
                <h2 className="text-center mt-6 inline font-semibold text-3xl border-b-4 border-b-black ">Our Products</h2>
            </div>
            <div className="mx-10 flex flex-row flex-wrap  gap-5  mt-10">
                {
                data.map(shoe => <Products key={shoe?.id} shoe={shoe}></Products>)
                }
            </div>

        </div>
    );
};

export default Home;