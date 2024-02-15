import {useState} from 'react'
import "./AddBooking.css"
import axios from 'axios';
import OrganizerNavBar from './OrganizerNavBar';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
const AddBooking = () => {
  const history = useHistory();

  // const[eventid,setEventId] = useState()
  // const[userid,setUserId] = useState()
    const [description,setDescription] = useState('');
  const [submission_date,setSubmissionDate] = useState('');
  const [event_date,setEventDate] = useState('');
  const [head_count,setHeadCount] = useState('');
  const [status,setStatus] = useState('Pending');
  // setEventId(localStorage.getItem("eid"));
  // setUserId(localStorage.getItem("uid"));
  const handleSubmit = async (event) => {
    event.preventDefault();
    const customAxios = axios.create({
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      responseType: "json",
      withCredentials: true,
    });
    const data = {
      eventid: localStorage.getItem("eid"),
      userid: localStorage.getItem("uid"),
      description: description,
      submissionDate: submission_date,
      eventDate: event_date,
      headCount: head_count,
      status: status,
    };
    console.log(data);
    try {
      const response = await customAxios.post(
        "http://localhost:8080/api/user/rights/postnewbooking",
        data
      );

      console.log("Post Response:", response);

      if (response.status === 200) {
        alert("Successfully Added the Data");
        history.push('../organizerallevents')
      } else {
        console.error("Unexpected response:", response);
        alert("Error occurred while posting data");
      }
    } catch (error) {
      console.error("Error occurred while posting data:", error);
      if (error.response) {
        console.log("Error response data:", error.response.data);
        console.log("Error response status:", error.response.status);
      }
      alert("Error occurred while posting data");
    }
    // setType("");
    // setDescription("")
    // setTotalPackage("")
    // setParticipantsCount("")
    // setCharges("")
  }
  return (
    <>
      <OrganizerNavBar/>
        <form className="addeventcontainer" onSubmit={handleSubmit}>
            <div className="addeventbox">
                <h1 className="h1">Add Booking</h1>
                <p className='topic'>Description:</p>
                <textarea required type='textarea' placeholder='Description' rows={3} cols={20} value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                <p className='topic'>Submission Date:</p>
                <input required type='date' className="input" placeholder='' value={submission_date} onChange={(e) => setSubmissionDate(e.target.value)}></input>
                <p className='topic'>Event Date:</p>
                <input required type='date' className="input" placeholder='Total package' value={event_date} onChange={(e) => setEventDate(e.target.value)}></input>
                <p className='topic'>Head Count:</p>
                <input required type='number' className="input" placeholder='Head count' value={head_count} onChange={(e) => setHeadCount(e.target.value)}></input>
                <button className='button' type='submit'>Add Booking</button>
                <br></br><br></br>
                <br></br><br></br>
            </div>
        </form>
    </>
  )
}

export default AddBooking