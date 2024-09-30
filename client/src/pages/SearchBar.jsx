import React, { useState } from "react";
import SearchCard from "../components/SearchCard";

const SearchBar = () => {
  const [data, setData] = useState([
    {
      _id: {
        $oid: "66337137a6b66bc75e40363f",
      },
      description:
        "Cozy apartment perfect for bachelors with a vibrant nightlife",
      brief: "Modern apartment in the heart of the city",
      postOwner: "66337100a6b66bc75e403639",
      type: "apartment",
      bathrooms: 1,
      bedrooms: 1,
      listedBy: "Owner",
      furnishing: "semi-furnished",
      carpetArea: 500,
      superBuiltupArea: 700,
      maintenance: 1200,
      bachelorsAllowed: true,
      totalFloors: 6,
      floorNo: 5,
      carParking: 1,
      projectName: "Urban Oasis",
      pictures: [
        "https://cdn.pixabay.com/photo/2014/07/31/21/41/apartment-406901_640.jpg",
        "urban_oasis_2.jpg",
      ],
      price: 15000,
      genderPref: "no preference",
      depositAmount: 30000,
      createdAt: {
        $date: "2024-05-03T08:00:00.000Z",
      },
      updatedAt: {
        $date: "2024-05-03T08:00:00.000Z",
      },
    },
    {
      _id: {
        $oid: "66337137a6b66bc75e40363f",
      },
      description:
        "Cozy apartment perfect for bachelors with a vibrant nightlife",
      brief: "Modern apartment in the heart of the city",
      postOwner: "66337100a6b66bc75e403639",
      type: "apartment",
      bathrooms: 1,
      bedrooms: 1,
      listedBy: "Owner",
      furnishing: "semi-furnished",
      carpetArea: 500,
      superBuiltupArea: 700,
      maintenance: 1200,
      bachelorsAllowed: true,
      totalFloors: 6,
      floorNo: 5,
      carParking: 1,
      projectName: "Urban Oasis",
      pictures: [
        "https://cdn.pixabay.com/photo/2014/07/31/21/41/apartment-406901_640.jpg",
        "urban_oasis_2.jpg",
      ],
      price: 15000,
      genderPref: "no preference",
      depositAmount: 30000,
      createdAt: {
        $date: "2024-05-03T08:00:00.000Z",
      },
      updatedAt: {
        $date: "2024-05-03T08:00:00.000Z",
      },
    },
    {
      _id: {
        $oid: "66337137a6b66bc75e40363f",
      },
      description:
        "Cozy apartment perfect for bachelors with a vibrant nightlife",
      brief: "Modern apartment in the heart of the city",
      postOwner: "66337100a6b66bc75e403639",
      type: "apartment",
      bathrooms: 1,
      bedrooms: 1,
      listedBy: "Owner",
      furnishing: "semi-furnished",
      carpetArea: 500,
      superBuiltupArea: 700,
      maintenance: 1200,
      bachelorsAllowed: true,
      totalFloors: 6,
      floorNo: 5,
      carParking: 1,
      projectName: "Urban Oasis",
      pictures: [
        "https://cdn.pixabay.com/photo/2014/07/31/21/41/apartment-406901_640.jpg",
        "urban_oasis_2.jpg",
      ],
      price: 15000,
      genderPref: "no preference",
      depositAmount: 30000,
      createdAt: {
        $date: "2024-05-03T08:00:00.000Z",
      },
      updatedAt: {
        $date: "2024-05-03T08:00:00.000Z",
      },
    },
    {
      _id: {
        $oid: "66337137a6b66bc75e40363f",
      },
      description:
        "Cozy apartment perfect for bachelors with a vibrant nightlife",
      brief: "Modern apartment in the heart of the city",
      postOwner: "66337100a6b66bc75e403639",
      type: "apartment",
      bathrooms: 1,
      bedrooms: 1,
      listedBy: "Owner",
      furnishing: "semi-furnished",
      carpetArea: 500,
      superBuiltupArea: 700,
      maintenance: 1200,
      bachelorsAllowed: true,
      totalFloors: 6,
      floorNo: 5,
      carParking: 1,
      projectName: "Urban Oasis",
      pictures: [
        "https://cdn.pixabay.com/photo/2014/07/31/21/41/apartment-406901_640.jpg",
        "urban_oasis_2.jpg",
      ],
      price: 15000,
      genderPref: "no preference",
      depositAmount: 30000,
      createdAt: {
        $date: "2024-05-03T08:00:00.000Z",
      },
      updatedAt: {
        $date: "2024-05-03T08:00:00.000Z",
      },
    },
    {
      _id: {
        $oid: "66337137a6b66bc75e40363f",
      },
      description:
        "Cozy apartment perfect for bachelors with a vibrant nightlife",
      brief: "Modern apartment in the heart of the city",
      postOwner: "66337100a6b66bc75e403639",
      type: "apartment",
      bathrooms: 1,
      bedrooms: 1,
      listedBy: "Owner",
      furnishing: "semi-furnished",
      carpetArea: 500,
      superBuiltupArea: 700,
      maintenance: 1200,
      bachelorsAllowed: true,
      totalFloors: 6,
      floorNo: 5,
      carParking: 1,
      projectName: "Urban Oasis",
      pictures: [
        "https://cdn.pixabay.com/photo/2014/07/31/21/41/apartment-406901_640.jpg",
        "urban_oasis_2.jpg",
      ],
      price: 15000,
      genderPref: "no preference",
      depositAmount: 30000,
      createdAt: {
        $date: "2024-05-03T08:00:00.000Z",
      },
      updatedAt: {
        $date: "2024-05-03T08:00:00.000Z",
      },
    },
    {
      _id: {
        $oid: "66337137a6b66bc75e40363f",
      },
      description:
        "Cozy apartment perfect for bachelors with a vibrant nightlife",
      brief: "Modern apartment in the heart of the city",
      postOwner: "66337100a6b66bc75e403639",
      type: "apartment",
      bathrooms: 1,
      bedrooms: 1,
      listedBy: "Owner",
      furnishing: "semi-furnished",
      carpetArea: 500,
      superBuiltupArea: 700,
      maintenance: 1200,
      bachelorsAllowed: true,
      totalFloors: 6,
      floorNo: 5,
      carParking: 1,
      projectName: "Urban Oasis",
      pictures: [
        "https://cdn.pixabay.com/photo/2014/07/31/21/41/apartment-406901_640.jpg",
        "urban_oasis_2.jpg",
      ],
      price: 15000,
      genderPref: "no preference",
      depositAmount: 30000,
      createdAt: {
        $date: "2024-05-03T08:00:00.000Z",
      },
      updatedAt: {
        $date: "2024-05-03T08:00:00.000Z",
      },
    },
    {
      _id: {
        $oid: "66337137a6b66bc75e40363f",
      },
      description:
        "Cozy apartment perfect for bachelors with a vibrant nightlife",
      brief: "Modern apartment in the heart of the city",
      postOwner: "66337100a6b66bc75e403639",
      type: "apartment",
      bathrooms: 1,
      bedrooms: 1,
      listedBy: "Owner",
      furnishing: "semi-furnished",
      carpetArea: 500,
      superBuiltupArea: 700,
      maintenance: 1200,
      bachelorsAllowed: true,
      totalFloors: 6,
      floorNo: 5,
      carParking: 1,
      projectName: "Urban Oasis",
      pictures: [
        "https://cdn.pixabay.com/photo/2014/07/31/21/41/apartment-406901_640.jpg",
        "urban_oasis_2.jpg",
      ],
      price: 15000,
      genderPref: "no preference",
      depositAmount: 30000,
      createdAt: {
        $date: "2024-05-03T08:00:00.000Z",
      },
      updatedAt: {
        $date: "2024-05-03T08:00:00.000Z",
      },
    },
    {
      _id: {
        $oid: "66337137a6b66bc75e40363f",
      },
      description:
        "Cozy apartment perfect for bachelors with a vibrant nightlife",
      brief: "Modern apartment in the heart of the city",
      postOwner: "66337100a6b66bc75e403639",
      type: "apartment",
      bathrooms: 1,
      bedrooms: 1,
      listedBy: "Owner",
      furnishing: "semi-furnished",
      carpetArea: 500,
      superBuiltupArea: 700,
      maintenance: 1200,
      bachelorsAllowed: true,
      totalFloors: 6,
      floorNo: 5,
      carParking: 1,
      projectName: "Urban Oasis",
      pictures: [
        "https://cdn.pixabay.com/photo/2014/07/31/21/41/apartment-406901_640.jpg",
        "urban_oasis_2.jpg",
      ],
      price: 15000,
      genderPref: "no preference",
      depositAmount: 30000,
      createdAt: {
        $date: "2024-05-03T08:00:00.000Z",
      },
      updatedAt: {
        $date: "2024-05-03T08:00:00.000Z",
      },
    },
  ]);

  console.log(data);

  return (
    <div>
      <div className="searchArea h-24 w-[100%] border-y-2 border-black justify-center bg-[#ffe29f] flex">
        <div className="searchBar it w-[90%] justify-evenly items-center flex">
          <input
            type="search"
            name="location"
            id=""
            className=" w-1/3 p-4 border-black border-2 h-1/2"
          />
          <button className=" w-32 h-1/2">Filters</button>
          <button className="searchBtn bg-[#c44747] text-white tracking-widest w-32  h-1/2 ">
            Search
          </button>
        </div>
      </div>
      <div className="ResultsBlk grid grid-cols-4 gap-8 py-8 px-8 ">
        {data.map((ele) => {
          return <SearchCard key={ele.id} data={ele} />;
        })}
      </div>
    </div>
  );
};

export default SearchBar;
