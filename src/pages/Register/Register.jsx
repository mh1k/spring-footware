import { Link } from "react-router-dom"
import useAuth from "../../hooks/useAuth";
import { getAuth, updateProfile } from "firebase/auth";


const Register = () => {
    const auth = getAuth();
    const { setUser, createUser } = useAuth()

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, email, password);

        // create user
        createUser(email, password)
            .then(result => {
                console.log(result);
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                    console.log(error);
                });

                const newUser = { user: result?.user, name, email: result?.user?.email }
                fetch('http://localhost:5000/users', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                .then((res)=>res.json())
                .then((data)=>console.log(data))


                const info = { ...result.user, displayName: name }
                setUser(info);
            })
            .catch(error => {
                console.error(error)
            })

    }

    return (
        <div>
            <div className="card">
                <h2 className="text-3xl mt-8 mb-2 text-center font-semibold">Register</h2>
                <form onSubmit={handleRegister} className=" md:w-3/4 lg:w-1/3 mx-auto card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" required name="name" placeholder="Name" className="input input-bordered" />
                    </div>
                    {/* <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" required name="photo" placeholder="Photo URL" className="input input-bordered" />
                    </div> */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" required name="email" placeholder="Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" required name="password" placeholder="Password" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="text-center mt-1">Already have an account? <Link className="text-blue-600 font-bold" to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;