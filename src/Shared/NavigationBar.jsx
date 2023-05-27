import { Link } from "react-router-dom";
import logo from '../assets/logo/desktop-wallpaper-medical-cross-symbol-png-hospital-logo.jpg'


const NavigationBar = () => {


    const navList = <>

        <li className="text-[#F3F3F3] text-lg	font-semibold"><Link to='/'>Home</Link></li>
        <li className="text-[#F3F3F3] text-lg	font-semibold"><Link to='/about'>About</Link></li>
        <li className="text-[#F3F3F3] text-lg	font-semibold"><Link to='/appointment'>Appointment</Link></li>
        <li className="text-[#F3F3F3] text-lg	font-semibold"><Link to='/login'>login</Link></li>
       

    </>

    return (
        <div  className=" fixed w-full" >
          
        
         <div className="navbar bg-base-100  bg-opacity-10  md:px-[7%]">
        
                <div className="navbar-start  ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                       {navList}

                        </ul>
                    </div>
                  <div className=" flex  items-center justify-between space-x-3">
                  <img className="w-[60px] h-[60px] rounded-full mt-2 hidden md:block"   src={logo} alt="" />
                    <p className="text-4xl font-bold text-[#FFFFFF]"><span className="text-[#F7A582] 	">  Doc</span> House</p>
                  </div>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1">

                       {navList}

                    </ul>
                </div>
               
              
            </div>
         
        </div>
    );
};

export default NavigationBar;