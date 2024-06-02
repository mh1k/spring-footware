import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">See Menu</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="min-h-full bg-base-200 ">
                    <h1 className="text-center p-4 text-lg font-semibold mb-5 border-b-2">FOOTWARE</h1>
                    <ul className="menu p-4 w-80 bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li className="text-base"><Link to={"/dashboard"}>Dashboard</Link></li>
                        <li className="text-base"><Link to={"/dashboard/profile"}>Profile</Link></li>
                        <li className="text-base"><Link to={"/dashboard/products"}>All Products</Link></li>
                        <li className="text-base"><Link to={"/dashboard/add-product"}>Add Product</Link></li>
                        <li className="text-base"><Link to={"/"}>Back to Home</Link></li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default DashboardLayout;