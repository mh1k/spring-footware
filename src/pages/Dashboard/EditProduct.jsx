import Swal from 'sweetalert2'
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
const EditProduct = () => {

    const token = localStorage.getItem("token");

    const shoe = useLoaderData();

    console.log(shoe);

    const [title, setTitle] = useState(shoe?.name);
    const [price, setPrice] = useState(shoe?.price);
    const [brand, setBrand] = useState(shoe?.brand);
    const [description, setDescription] = useState(shoe?.productDetails);
    const [image_url, setImageURL] = useState(shoe?.imageLink);

    const handleAddProduct = async (e) => {
        e.preventDefault();
        console.log(e);
        const form = e.target;
        const name = form.name.value;
        const imageLink = form.imageLink.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const productDetails = form.productDetails.value;

        const data = { name, imageLink, price, brand, productDetails };
        console.log(data);

        await fetch(`http://localhost:5000/shoes/${shoe._id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
                authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    Swal.fire({
                        title: "Successfully updated",
                        timer: 1500,
                        showConfirmButton: false,
                        // text: "You clicked the button!",
                        icon: "success",
                      });
                    // toast.success("Sucessfully Added");
                
                }
            });
    }

    return (
        <div>
            <div className="mt-5 mx-5 ">
                <h1 className=" text-2xl font-semibold border-b-2 text-center pb-2">Edit Product </h1>
            </div>

            <form onSubmit={handleAddProduct} className=" md:w-3/4 lg:w-2/3 mx-auto card-body">
                
                <div className="form-control">

                    <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} required name="name" placeholder="Product Name" className="input input-bordered" />
                </div>
                <div className="form-control">

                    <input type="text" onChange={(e) => setImageURL(e.target.value)} value={image_url} required name="imageLink" placeholder="Product Image URL" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <input type="text" onChange={(e) => setBrand(e.target.value)} value={brand} required name="brand" placeholder="Product Brand Name" className="input input-bordered" />
                </div>
                <div className="form-control">

                    <input type="number" onChange={(e) => setPrice(e.target.value)} value={price} required name="price" placeholder="Product Price" className="input input-bordered" />
                </div>
                <div className="form-control">

                    <textarea type="text" onChange={(e) => setDescription(e.target.value)} value={description} required name="productDetails" placeholder="Product details..." className="textarea textarea-bordered textarea-md " />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Update Product</button>
                </div>
            </form>

        </div>
    );
};

export default EditProduct;