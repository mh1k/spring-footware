import Swal from 'sweetalert2'
import { useLoaderData } from "react-router-dom";


const EditProfile = () => {
    const user = useLoaderData();

    console.log(user);



    const handleAddProduct = async (e) => {
        e.preventDefault();
        console.log(e);
        const form = e.target;
        const name = form.name.value;
        const age = form.age.value;
        const mobile = form.mobile.value;

        const data = { name, age, mobile };
        console.log(data);

        await fetch(`http://localhost:5000/users/${user.email}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
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
                <h1 className=" text-2xl font-semibold border-b-2 text-center pb-2">Edit Profile</h1>
            </div>
            <form onSubmit={handleAddProduct} className=" md:w-3/4 lg:w-2/3 mx-auto card-body">

                <div className="form-control">

                    <input type="text" defaultValue={user?.name} required name="name" placeholder="Product Name" className="input input-bordered" />
                </div>
                <div className="form-control">

                    <input type="text" value={user?.email} disabled  name="email" placeholder="Email" className="input input-bordered" />
                </div>
                <div className="form-control">

                    <input type="number"  required name="age" placeholder="Age" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <input type="number"  required name="mobile" placeholder="Phone No." className="input input-bordered" />
                </div>


                <div className="form-control mt-6">
                    <button className="btn btn-primary">Update Profile</button>
                </div>
            </form>
        </div>
    );
};

export default EditProfile;