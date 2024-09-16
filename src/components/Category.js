import { useState } from "react";
import ItemCards from "./ItemCards";

const Category = ({ data, showItems, setshowindex}) => {

  const HandleClick = () => {
    setshowindex();
  };

  return (
    <div>
      <div
        key={data.title}
        className="w-1/2 mx-auto bg-gray-100 px-4 py-2 shadow-lg my-4"
      >
        <div
          onClick={HandleClick}
          className="flex text-center justify-between cursor-pointer"
        >
          <span className="font-semibold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              color={"#000000"}
              fill={"none"}
            >
              <path
                d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
        {showItems && <ItemCards items={data.itemCards} />}
      </div>
    </div>
  );
};

export default Category;
