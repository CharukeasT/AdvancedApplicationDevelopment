import AdminNavBar from "./AdminNavBar"
import "./AddEvent.css"
const AddEvent = () => {
  return (
    <>
        <AdminNavBar/>
        <div className="addeventcontainer">
            <div className="addeventbox">
                <h1 className="h1">Add Event</h1>
                <p className='topic'>Event Type:</p>
                <input required type='text' className="input" placeholder='Event type'></input>
                <p className='topic'>Description:</p>
                <textarea required type='textarea' placeholder='Description' rows={3} cols={20}></textarea>
                <p className='topic'>Total Package:</p>
                <input required type='text' className="input" placeholder='Total package'></input>
                <p className='topic'>Participants Count:</p>
                <input required type='number' className="input" placeholder='Participants count'></input>
                <p className='topic'>Charges:</p>
                <input required type='number' className="input" placeholder='Charges'></input>
                <button className='button' type='submit'>Add Event</button>
                <br></br><br></br>
                <br></br><br></br>
            </div>
        </div>
    </>
  )
}

export default AddEvent