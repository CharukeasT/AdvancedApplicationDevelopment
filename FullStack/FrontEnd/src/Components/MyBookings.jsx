import React, { useEffect, useState } from 'react'
import axios from 'axios';
import OrganizerNavBar from './OrganizerNavBar';
import MyBookingCard from './MyBookingCard';
const MyBookings = () => {
    const [bookings, setBookings] = useState([]);
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
          `http://localhost:8080/api/user/rights/getallbooking/${localStorage.getItem("uid")}`
        );

        console.log("Full Response:", response);
        console.log("Request Headers:", response.config.headers);
        console.log("Response Headers:", response.headers);

        if (response.data) {
          console.log("Data received:", response.data);

          let booking = Array.isArray(response.data)
            ? response.data
            : [response.data];
            // localStorage.setItem("bid",)
          console.log("Data fetched successfully:", booking);
          setBookings(booking);
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
  }, [token]);

  return (
    <>
    <OrganizerNavBar/>
    <div className='bookingstable'>
            <table>
                <thead>
                    <tr>
                        <th>Booking ID</th>
                        <th>Event ID</th>
                        <th>Submission Date</th>
                        <th>Event Date</th>
                        <th>Head Count</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((B,bookingid)=>(
                        <tr key={bookingid}>
                            <th>{B.bookingid}</th>
                            <th>{B.eventid}</th>
                            <th>{B.submissionDate}</th>
                            <th>{B.eventDate}</th>
                            {/* <th>
                                <select className='status'>
                                    <option value="0">Pending</option>
                                    <option value="1">Confirmed</option>
                                    <option value="2">Verified</option>
                                </select>
                            </th> */}
                            {/* <th>{B.eventType}</th> */}
                            <th>{B.headCount}</th>
                            <th>{B.status}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    {/*<div className="adminalleventscontainer">
        {bookings.map((item, id) => (
          <MyBookingCard key={id} item={item} />
        ))}
      </div>*/}
    </>
  )
}

export default MyBookings