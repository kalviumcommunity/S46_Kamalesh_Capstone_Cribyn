import React from "react";
import Bed from "../assets/Bed.svg";
import Bath from "../assets/Bath.svg";
import Parking from "../assets/Parking.svg";

const SearchCard = ({ data }) => {
  return (
    <div className="  max-w-xs w-80  rounded-lg  object-cover overflow-hidden shadow-lg bg-white ">
      <div className="h-48 bg-gray-200">
        {data.pictures && data.pictures.length > 0 ? (
          <img className="w-full h-full object-cover" src={data.pictures[0]} />
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-400">No Image Available</p>
          </div>
        )}
      </div>
      <div className="px-6 py-4 h-48 flex flex-col justify-between ">
        <h2 className="font-bold text-xl mb-2">{data.brief}</h2>
        {/* change the type to address below */}
        <p className="text-gray-600 text-sm">{data.type.toUpperCase()}</p>{" "}
        <p className="text-orange-500 font-bold text-2xl mt-2">
          ₹{data.price} /Month
        </p>
      </div>
      <div className="px-6 py-4 flex justify-between items-center border-t border-gray-200  ">
        <div className="flex items-center mr-gray-200  ">
          <img src={Bed} className="w-5 h-5 mr-2 text-gray-500" />
          <span className="text-gray-700">{data.bedrooms}</span>
        </div>
        <div className="flex items-center  ">
          <img src={Bath} className="w-5 h-5 mr-2 text-gray-500" />
          <span className="text-gray-700">{data.bathrooms}</span>
        </div>
        <div className="flex items-center">
          <img src={Parking} className="w-5 h-5 mr-2 text-gray-500" />
          <span className="text-gray-700">{data.carParking}</span>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
