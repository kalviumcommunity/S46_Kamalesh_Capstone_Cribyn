import { useEffect, useState } from "react";
import homeTop1 from "../assets/homeTop1.svg";
import homeTop3 from "../assets/homeTop3.svg";
import homeTop2 from "../assets/hometop2.svg";
import homeTop4 from "../assets/homeTop4.svg";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import SearchCard from "../components/SearchCard";
import axios from "axios";
import LoadingProperties from "../components/LoadingProperties";

const Home = () => {
  const navigate = useNavigate();
  const [lop, setLop] = useState([]);

  const fetchData = async () => {
    try {
      let temp = await axios.get("https://cribyn.onrender.com/api/posts/all");
      setLop(temp.data);
      // console.log(temp)
    } catch (err) {
      console.log(`Error: ${err} `);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="homePage">
      <div className=" homeTop1 bg-[#9FAEFF] p-8 border-b-black border-b-4	 justify-around items-center flex">
        <div className="w-1/2 text-xl p-8 ">
          <h1 className="text-3xl">Welcome to Cribyn</h1>
          <br />
          Your One-Stop Shop for Bachelor Living. Whether you`re a busy
          professional or a student seeking independence, Cribyn is here to help
          you find the perfect place to call home.
          <br />
          <br /> Explore a wide variety of bachelor-friendly apartments, manage
          your search preferences, and connect with potential landlords – all in
          one convenient platform.
        </div>
        <img src={homeTop1} className="w-1/3" alt="House" />
      </div>
      <div
        className="homeTop2 p-8 border-b-black border-b-4 flex justify-evenly items-center flex-col text-xl bg-center bg-repeat  "
        style={{ backgroundImage: `url(${homeTop2})` }}
      >
        <div className="HIW1 text-center flex-col justify-center items-center p-10 gap-4 flex">
          <h3>How It Works?</h3>
          <div className="flex flex-col justify-center items-center p-10 gap-4 ">
            <h4>Sign Up (Free)</h4>
            Create a free account to access advanced features.
          </div>
          <div className="flex flex-col justify-center items-center p-10 gap-4 ">
            <h4>Search & Filter</h4>
            Find your ideal apartment with our powerful search and filter
            options.
          </div>
        </div>
        <div className="HIW2 flex justify-around p-10 gap-24  ">
          <div className="flex flex-col justify-around p-4 gap-4 items-center ">
            <h4>Find Your Perfect Place</h4>
            Land your dream bachelor pad with Cribyn!
          </div>
          <div className="flex flex-col justify-around p-4 gap-8 items-center ">
            <h4>Connect with Landlords</h4>
            Contact landlords directly through Cribyn for inquiries.
          </div>
        </div>
      </div>
      <div className="homeTop3 bg-[#DEFFDB] border-b-black border-b-4	justify-around items-center p-8 h-[80vh] flex">
        <img src={homeTop3} alt="" className="w-[50vh]" />
        <div className="homeSearchDiv text-2xl gap-8 flex-col w-[40%] tracking-widest flex-col p-8 justify-around flex leading-relaxed ">
          <p>
            Cribyn offers a wide range of bachelor apartments with various
            amenities and locations. Search by price, features, and more to find
            your ideal match. Sign up for free and start your hassle-free rental
            journey!
          </p>
          <button
            className="bg-[#c44747]  text-white w-[30%] h-12"
            onClick={() => navigate("/search")}
          >
            Search
          </button>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${homeTop4})` }}
        className="homeTop4 items-center h-[80vh] text-2xl p-8 justify-evenly flex flex-col  "
      >
        <h3 className=" text-3xl font-bold underline underline-offset-8">
          Why Choose Cribyn
        </h3>
        <div className="WCC grid grid-cols-2 ">
          {/* <div className="wcc1 flex"> */}
          <div className="flex flex flex-col items-center text-center text-lg leading-8 gap-8 p-5">
            <h4 className="text-2xl font-semibold">Wide Selection</h4>
            <p>Explore a vast collection of single-occupancy apartments.</p>
          </div>
          <div className="flex flex flex-col items-center text-center text-lg leading-8 gap-8 p-5">
            <h4 className="text-2xl font-semibold">Advanced Search</h4>
            <p>Filter by location, amenities, and more (coming soon).</p>
          </div>
          {/* </div> */}
          {/* <div className="wcc2 flex"> */}
          <div className="flex flex flex-col items-center text-center text-lg leading-8 gap-8 p-5">
            <h4 className="text-2xl font-semibold"> Direct Communication</h4>
            <p>
              Connect with landlords directly through Cribyn. Eliminate the
              middleman and streamline your communication. (Coming Soon)
            </p>
          </div>
          <div className="flex flex flex-col items-center text-center text-lg leading-8 gap-8 p-5">
            <h4 className="text-2xl font-semibold">Transparent Pricing</h4>
            <p>
              No hidden fees, no surprises. Cribyn offers transparent rental
              listings.
            </p>
          </div>
          {/* </div> */}
        </div>
      </div>
      <div className="homeTop5 bg-[#1A1F4F] p-2 items-center justify-around w-full">
        <div className="lopNav px-4 py-8 flex justify-between items-center underline underline-offset-2 text-2xl font-semibold text-white	 ">
          <p>List of Properties</p>
          <Link to="/search">
            <FaArrowRight size="30px" />
          </Link>
        </div>
        <div className="  space-x-4 w-full 	overflow-x-auto scrollbar-hide  flex  items-center p-8">
          <div className="flex  flex-row  space-x-16  ">
            {lop.length > 1
              ? lop.map((ele) => {
                  return <SearchCard key={ele._id} data={ele}></SearchCard>;
                })
              : Array.from({ length: 10 }, (__, i) => {
                  return <LoadingProperties key={i} />;
                })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
