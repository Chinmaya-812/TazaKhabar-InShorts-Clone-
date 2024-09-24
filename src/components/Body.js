import React, { useEffect, useState } from "react";
import Card from "./Card";
import { INSHORTS_API } from "../utils/constant";

const Body = () => {
  const [data, SetData] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(10); // Initial number of items to show

  const handleLoadMore = () => {
    if (itemsToShow < data.length) {
      setItemsToShow((prevItemsToShow) =>
        Math.min(prevItemsToShow + 5, data.length)
      ); // Ensure we don't exceed data length
    }
  };

  const renderedItems = data.slice(0, itemsToShow);

  async function FetchData() {
    try {
      const response = await fetch(
        INSHORTS_API
      );
      // console.log("API call ");

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      const json = await response.json();
      SetData(json.data.news_list);
    } catch (error) {
      console.error("Error fetching video data:", error);
    }
  }

  useEffect(() => {
    FetchData();
  }, []);
  return (
    <div className="flex items-center justify-center flex-col mt-16">
      {renderedItems &&
        renderedItems.map((i) => {
          console.log(i)
          return(<Card {...i.news_obj} key={i.hash_id} />)
        })}

      {renderedItems.length>0 && <button
        onClick={handleLoadMore}
        disabled={data.length === itemsToShow}
        className={`p-2  bg-red-300 p-3 rounded-lg ${
          data.length !== itemsToShow ? "cursor-pointer" : "cursor-not-allowed"
        }`}
      >
        Load More
      </button>}
    </div>
  );
};

export default Body;
