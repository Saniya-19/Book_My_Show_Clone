import React from "react";
import { BiChevronDown,  BiSearch } from "react-icons/bi";

function NavSm() {
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">It All Starts Here!</h3>
          <span className="text-gray-400 text-xs flex items-center cursor-pointer hover:text-white">
            Bangalore <BiChevronDown />
          </span>
        </div>
        <div className="w-8 h-8">
          <button>Use App</button>
          <BiSearch className="w-full h-full" />
        </div>
      </div>
    </>
  );
}

function NavMd() {
  return (
    <>
    <div className="w-10 h-10">
     <img src="" alt="logo" className="w-full h-full" />
    </div>
    <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
      <BiSearch />
      <input
        type="search"
        className="w-full bg-transparent border-none focus:outline-none"
      />
    </div>
    </>
  );
}

function NavLg() {
  return (
    <>
       <div className="w-full flex items-center justify-between gap-6 px-4">
        <div className="flex items-center w-1/2 gap-3">
          <div className="w-10 h-10">
            <img src="" alt="logo" className="w-full h-full" />
          </div>
          <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
            <BiSearch />
            <input
              type="search"
              className="w-full bg-transparent border-none focus: outline-none"
              placeholder="Search for movies, events, plays, sports and activites"
            />
          </div>
        </div>
      </div>
    </>
  );
}

// Main Component
const Navbar = () => {
  return ( 
      < nav className="bg-darkBackground-700 px-4 py-3">
      {/* Small Screen Navbar */}
      {/* <div className="md:hidden" > */}
      <div className="sm:flex md:hidden lg:hidden">
        {/*  >= md its hidden, only visible on small screen size */}
      <NavSm />
      </div>
      
      {/* Medium screen size */}
      <div className="hidden md:flex lg:hidden" >
      <NavMd />
      </div>

      {/* Large screen Size */}
      <div className="hidden md:hidden lg:flex">
        <NavLg />
      </div>
      </nav>
  
      

  )

};

export default Navbar;