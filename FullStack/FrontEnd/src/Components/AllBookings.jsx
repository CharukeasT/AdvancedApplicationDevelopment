import './AllBookings.css'
import AdminNavBar from './AdminNavBar'
import { useEffect, useState } from 'react';
import axios from 'axios';
const AllBookings = () => {

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
          "http://localhost:8080/api/v1/admin/rights/getallbooking"
        );

        console.log("Full Response:", response);
        console.log("Request Headers:", response.config.headers);
        console.log("Response Headers:", response.headers);

        if (response.data) {
          console.log("Data received:", response.data);

          let booking = Array.isArray(response.data)
            ? response.data
            : [response.data];

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

    // const bookings = [
    //     {bookingId:1,organizerId:2,username:"demo1",submissionDate:"Jan 27,2023",eventDate:"Feb 10,2023",eventType:"demo1",headCount:100,amount:"$30000"},
    //     {bookingId:2,organizerId:3,username:"demo2",submissionDate:"Jan 28,2023",eventDate:"Feb 12,2023",eventType:"demo2",headCount:110,amount:"$34100"},
    //     {bookingId:3,organizerId:1,username:"demo3",submissionDate:"Jan 29,2023",eventDate:"Feb 14,2023",eventType:"demo3",headCount:120,amount:"$38400"},
    //     {bookingId:4,organizerId:2,username:"demo1",submissionDate:"Jan 30,2023",eventDate:"Feb 17,2023",eventType:"demo4",headCount:130,amount:"$42900"},
    // ];
  return (
    <>
        <AdminNavBar/>
        <div className='bookingstable'>
            <table>
                <thead>
                    <tr>
                        <th>Booking ID</th>
                        <th>Event ID</th>
                        <th>User ID</th>
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
                            <th>{B.userid}</th>
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
    </>
  )
}

export default AllBookings