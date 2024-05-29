import{Link} from "react-router-dom"

// eslint-disable-next-line react/prop-types
const Products = ({shoe}) => {

    // eslint-disable-next-line react/prop-types
    // const id = shoe._id;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            {/* // eslint-disable-next-line react/prop-types */}
            <figure><img src={shoe?.imageLink} alt="Shoes" /></figure>
            <div className="card-body">
                {/* // eslint-disable-next-line react/prop-types */}
                <h2 className="card-title">{shoe.name}</h2>
                <h2 className="text-base">Brand : {shoe.brand}</h2>
                <h2 className="text-base">Price : {shoe.price} $</h2>
                <p>{shoe.productDetails.slice(0,75)}...<Link to={`/products/${shoe.id}`}> <a className="text-blue-500">Read more</a></Link></p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
)};

export default Products;