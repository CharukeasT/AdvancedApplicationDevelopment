import {useState} from 'react'
import AdminNavBar from "./AdminNavBar"
import "./AddEvent.css"
import axios from 'axios';
const AddEvent = () => {
  const [type,setType] = useState('');
  const [description,setDescription] = useState('');
  const [total_package,setTotalPackage] = useState('');
  const [participants_count,setParticipantsCount] = useState('');
  const [charges,setCharges] = useState('');
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
      type: type,
      description: description,
      totalPackage: total_package,
      participantsCount: participants_count,
      charges: charges,
    };
    try {
      const response = await customAxios.post(
        "http://localhost:8080/api/v1/admin/rights/postnewevent",
        data
      );

      console.log("Post Response:", response);

      if (response.status === 200) {
        alert("Successfully Added the Data");
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
    setType("");
    setDescription("")
    setTotalPackage("")
    setParticipantsCount("")
    setCharges("")
  }
  return (
    <>
        <AdminNavBar/>
        <form className="addeventcontainer" onSubmit={handleSubmit}>
            <div className="addeventbox">
                <h1 className="h1">Add Event</h1>
                <p className='topic'>Event Type:</p>
                <input required type='text' className="input" placeholder='Event type' value={type} onChange={(e) => setType(e.target.value)}></input>
                <p className='topic'>Description:</p>
                <textarea required type='textarea' placeholder='Description' rows={3} cols={20} value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                <p className='topic'>Total Package:</p>
                <input required type='text' className="input" placeholder='Total package' value={total_package} onChange={(e) => setTotalPackage(e.target.value)}></input>
                <p className='topic'>Participants Count:</p>
                <input required type='number' className="input" placeholder='Participants count' value={participants_count} onChange={(e) => setParticipantsCount(e.target.value)}></input>
                <p className='topic'>Charges:</p>
                <input required type='number' className="input" placeholder='Charges' value={charges} onChange={(e) => setCharges(e.target.value)}></input>
                <button className='button' type='submit'>Add Event</button>
                <br></br><br></br>
                <br></br><br></br>
            </div>
        </form>
    </>
  )
}

export default AddEvent