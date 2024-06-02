import { NavLink } from "react-router-dom";


const Navber = () => {

    const links = <>
        <li className="text-[#9cfe7e] hover:text-[#EE5A24] btn btn-ghost hover:text-"><NavLink to={"/Statistics"} >Statistics</NavLink> </li>
        <li className="hover:text-[#EE5A24] btn btn-ghost  text-white font-Manrope"><NavLink to={"/Applied Jobs"}>Applied Jobs</NavLink></li>
        <li className="hover:text-[#EE5A24] text-white btn btn-ghost font-Manrope"><NavLink to={"/Blogs"}>Blogs</NavLink></li>
    </>


    return (
        <div>
            <div className="navbar bg-[#7e8ffe] z-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-1 z-[1] p-2 shadow bg-base-100 rounded-box  w-52">
                            {links}
                        </ul>
                    </div>
                    <NavLink className="btn btn-ghost text-black text-4xl font-Lobster" to={"/"}>Career-Hub</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" menu-horizontal gap-5 px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                <button className="btn btn-primary hover:bg-[#6c1cdb] bg-[#8854d0] ">Star Applying</button>
                </div>
            </div>
        </div>
    );
};

export default Navber;



{/* btn-outline font-Manrope text-[20px] font-extrabold bg-[#7E90FE] text-white hover:text-[#EE5A24] rounded-[8px] p-[19px , 28px] */}