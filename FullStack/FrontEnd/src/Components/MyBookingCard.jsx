import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';

const MyBookingCard = ({item}) => {
    const[id,setId] = useState("");
    const customAxios = axios.create({
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        responseType: "json",
        withCredentials: true,
      });
    const handleDelete = async (event) =>{
        setId(item.eventid)
        event.preventDefault();
          try {
            const response = await customAxios.delete(
              `http://localhost:8080/api/v1/admin/rights/deleteonebooking/${item.bookingid}`
            );
            // console.log()
            console.log("Post Response:", response);
      
            if (response.status === 200) {
                window.location.href="/adminallevents";
              alert("Successfully Deleted the Event");
            } else {
              console.error("Unexpected response:", response);
              alert("Error occurred while deleting data");
            }
          } catch (error) {
            console.error("Error occurred while deleting data:", error);
            if (error.response) {
              console.log("Error response data:", error.response.data);
              console.log("Error response status:", error.response.status);
            }
            alert("Error occurred while deleting data");
          }
    }
  return (
  <>
    <div className='eventcard'>
            <span><span className='high'>Event ID :</span> {item.eventid}</span>
            <span><span className='high'>Description :</span> {item.description}</span>
            <span><span className='high'>Submission Date :</span> {item.submissionDate}</span>
            <span><span className='high'>Event Date :</span> {item.eventDate}</span>
            <span><span className='high'>Head Count :</span> {item.headCount}</span>
            <span><span className='high'>Status :</span> {item.status}</span>
            <br></br>
            <div><button className='button4' onClick={handleDelete}><div className='edit-delete'> Book</div></button></div>
        </div>
  </>
  )
}

MyBookingCard.propTypes = {
    item:PropTypes.shape({
        eventid:PropTypes.number.isRequired,
        bookingid:PropTypes.number.isRequired,
        description:PropTypes.string.isRequired,
        // submissionDate:PropTypes.Date.isRequired,
        // eventDate:PropTypes.date.isRequired,
        headCount:PropTypes.number.isRequired,
        status:PropTypes.string.isRequired,
    }).isRequired,
};

export default MyBookingCard