import "./OrganizerAllEvents.css"
import OrganizerNavBar from "./OrganizerNavBar"
import OrganizerEventCard from "./OrganizerEventCard"
import { useState,useEffect } from "react";
import axios from "axios";
const OrganizerAllEvents = () => {
    const [data, setData] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!token) {
          console.log("No token provided");
          return;
        }

        const customAxios = axios.create({
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          responseType: "json",
          withCredentials: true,
        });

        const response = await customAxios.get(
          "http://localhost:8080/api/user/rights/getallevent"
        );

        console.log("Full Response:", response);
        console.log("Request Headers:", response.config.headers);
        console.log("Response Headers:", response.headers);

        if (response.data) {
          console.log("Data received:", response.data);

          let eventData = Array.isArray(response.data)
            ? response.data
            : [response.data];

          console.log("Data fetched successfully:", eventData);
          setData(eventData);
        } else {
          console.error("Unexpected response format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);

        if (error.response && error.response.status === 401) {
          console.log("Authentication error. Redirecting to login...");
        } else {
          console.log("Full error response:", error.response);
          if (error.response && error.response.data) {
            console.log("Server error details:", error.response.data);
          }
        }
      }
    };

    fetchData();
  }, [token]); // Issue was previously 
  return (
    <>
        <OrganizerNavBar/>
        <div className="adminalleventscontainer">
            {data.map((item,id)=>(
                <OrganizerEventCard key={id} item={item}/>
            ))}
        </div>
    </>
  )
}

export default OrganizerAllEvents