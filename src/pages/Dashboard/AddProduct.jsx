
const AddProduct = () => {
    const handleAddProduct = async (e)=>{
        e.preventDefault();
        console.log(e);
        const form = e.target;
    const id = form.id.value;
    const name = form.name.value;
    const imageLink = form.imageLink.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const productDetails = form.productDetails.value;

    const data = { id, name, imageLink, price, brand, productDetails };
    // console.log(data);

    await fetch("http://localhost:3000/shoes", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
      });
    }

    return (
        <div>
            <div className="mt-5 mx-5 ">
                <h1 className=" text-2xl font-semibold border-b-2 text-center pb-2">Add Product </h1>
            </div>

            <form onSubmit={handleAddProduct}  className=" md:w-3/4 lg:w-2/3 mx-auto card-body">
                    <div className="form-control">
                        
                        <input type="text" required name="id" placeholder="Product Id" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        
                        <input type="text" required name="name" placeholder="Product Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                
                        <input type="text" required name="imageLink" placeholder="Product Image URL" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="text" required name="brand" placeholder="Product Brand Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        
                        <input type="number" required name="price" placeholder="Product Price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        
                        <input type="text" required name="productDetails" placeholder="Product details" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Add Product</button>
                    </div>
                </form>

        </div>
    );
};

export default AddProduct;