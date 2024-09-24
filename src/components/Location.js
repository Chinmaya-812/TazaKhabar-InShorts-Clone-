import React, { useEffect, useState } from "react";

const Location = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [City, SetCity] = useState("");
  const [Country, SetCountry] = useState("");
  const[state,SetState]=useState("")
  const [time, SetTime] = useState("");

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error("Error getting geolocation:", error.message);
          // Handle errors here
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      // Handle geolocation not supported case
    }
  };

  const fetchCityAndCountry = async (latitude, longitude) => {
    const apiKey = "84c326a693f04ecc89a0cd2760299c7f";
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const { _normalized_city, country,state } = data.results[0].components;
      const { created_http } = data.timestamp;
        console.log("City:", _normalized_city);
      SetCity(_normalized_city);
      console.log("Country:", country);
      SetCountry(country);
        console.log(data)
      console.log("time stamp", created_http);
      SetTime(created_http)
      SetState(state)
      // Update state or do something with city and country
    } catch (error) {
      console.error("Error fetching city and country:", error);
      // Handle errors here
    }
  };

  // Call this function after obtaining latitude and longitude
  //   fetchCityAndCountry(latitude, longitude);

  useEffect(() => {
    // LocationComponent()
    getLocation();
    fetchCityAndCountry(latitude, longitude);
  }, [latitude, longitude]);

  return (
    <div className="">
      <div className="flex items-center">
        <div className="flex lg:space-x-4 lg:text-lg md:text-[2px] sm:text-[2px] text-[11px]">
          <div className="flex items-center">
            <svg
              className="h-4 w-4 text-red-500 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-medium mr-2">{City}</span>
          </div>
          <div className="flex items-center">
            <svg
              className="h-4 w-4 text-red-500 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
            <span className="mr-2">{time}</span>
          </div>
          <div className="flex items-center">
            <svg
              className="h-4 w-4 text-red-500 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            <span>Last Update 11:30 am</span>
          </div>
          <div className="flex items-center">
            <svg
              className="h-4 w-4 text-red-500 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
            </svg>
            <span>29°C {state}, {Country}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
