import React from "react";
const moment = require("moment-timezone");

const Card = ({
  old_hash_id,
  author_name,
  position_expire_time,
  content,
  source_name,
  image_url,
  source_url,
}) => {
  const isoString = position_expire_time;
  const timeZone = "Asia/Kolkata";
  const dateTime = moment.tz(isoString, timeZone);
  const formattedDateTime = dateTime.format("h:mm A [on] dddd [on] MMMM YYYY");

  return (
    <div className="flex border-2 border-gray-100 w-full md:w-[60%] my-4 shadow-xl bg-white rounded-md h-auto md:h-[300px] flex-wrap">
      <div className="p-1 w-full md:w-[35%] md:h-full sm:h-full">
        <img
          src={image_url}
          alt=""
          className="w-full rounded-md object-cover sm:h-[200px] lg:h-full sm:h-[300px] "
        />
      </div>
      <div className="pl-4 py-3 w-full md:w-[65%]">
        <h1
          className="text-start font-extralight"
          style={{ fontSize: "24px", color: "#696969", lineHeight: "27px" }}
        >
          {old_hash_id}
        </h1>
        <h2 className="text-start py-3 text-[11px] text-gray-600">
          Short{" "}
          <span>
            by {author_name} / {formattedDateTime}
          </span>
        </h2>
        <p
          className="text-start font-light"
          style={{ color: "#44444d", fontSize: "16px" }}
        >
          {content}
        </p>
        <h6 className="text-start mt-7 cursor-pointer">
          Read More{" "}
          <span>
            <a href={source_url} target="_blank" className="font-bold" rel="noreferrer">{source_name}</a>
          </span>
        </h6>
        {/* {console.log(author_name)} */}
      </div>
    </div>
  );
};

export default Card;
