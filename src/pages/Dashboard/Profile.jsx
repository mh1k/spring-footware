/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Profile = () => {

    const { user } = useAuth();
    const [userInfo, setUserInfo] = useState();

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setUserInfo(data));
    }, [user])
    console.log(userInfo);

    return (
        <div>
            <div className="mt-5 mx-5 ">
                <h1 className=" text-2xl font-semibold border-b-2 text-center pb-2">Profile</h1>
            </div>
            <div className="mt-5 mx-5 flex justify-between ">
                <div>
                    <h1>Name  : {userInfo?.name}</h1>
                    <h1>Email : {userInfo?.email}</h1>
                    {userInfo?.mobile && <h1>Age : {userInfo?.age}</h1>}
                    {userInfo?.mobile && <h1>Phone No : {userInfo?.mobile}</h1>}

                </div>
                <Link className="btn px-3 " to={`/dashboard/profile/edit-profile/${userInfo?._id}`}>Edit Profile</Link>
            </div>
        </div>
    );
};

export default Profile;