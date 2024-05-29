
import {Link} from "react-router-dom"
// eslint-disable-next-line react/prop-types
const DashboardProduct = ({shoe,onDeleteProduct}) => {

    const handleDelete =async ()=>{
        await fetch(`http://localhost:3000/shoes/${shoe.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        onDeleteProduct(shoe.id);
      });

    }
    
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            {/* // eslint-disable-next-line react/prop-types */}
            <figure><img src={shoe?.imageLink} alt="Shoes" /></figure>
            <div className="card-body">
                {/* // eslint-disable-next-line react/prop-types */}
                <h2 className="card-title">{shoe.name}</h2>
                <h2 className="text-base">Brand : {shoe.brand}</h2>
                <h2 className="text-base">Price : {shoe.price} $</h2>
                {/* // eslint-disable-next-line react/prop-types */}
                <p>{shoe.productDetails.slice(0, 75)}...<Link to=""> <a className="text-blue-500">Read more</a></Link></p>
                <div className="card-actions justify-between ">
                    <button className="btn bg-green-500 text-white px-6">Edit</button>
                    <button onClick={handleDelete} className="btn bg-red-500 text-white">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default DashboardProduct;