
import PropTypes from 'prop-types'
import "./EventCard.css"
import axios from 'axios'
import { useState } from 'react'
const AdminEventCard = ({item}) => {
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
              `http://localhost:8080/api/v1/admin/rights/deleteone/${item.eventid}`
            );
      
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
      <div className='eventcard'>
            <span><span className='high'>Event Type :</span> {item.type}</span>
            <span><span className='high'>Description :</span> {item.description}</span>
            <span><span className='high'>Total Package :</span> {item.totalPackage}</span>
            <span><span className='high'>Participants Count :</span> {item.participantsCount}</span>
            <span><span className='high'>Charges :</span> {item.charges}</span>
            <br></br>
            <div>
                {/* <button className='button4'><div className='edit-delete'> Edit</div></button> */}
            <button className='button4' onClick={handleDelete}><div className='edit-delete'> Delete</div></button></div>
        </div>
  )
}

AdminEventCard.propTypes = {
    item:PropTypes.shape({
        eventid:PropTypes.number.isRequired,
        type:PropTypes.string.isRequired,
        description:PropTypes.string.isRequired,
        totalPackage:PropTypes.number.isRequired,
        participantsCount:PropTypes.number.isRequired,
        charges:PropTypes.number.isRequired,
    }).isRequired,
};

export default AdminEventCard
