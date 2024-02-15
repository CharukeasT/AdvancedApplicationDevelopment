
import PropTypes from 'prop-types'
import "./EventCard.css"
import { useState } from 'react';
// import AddBooking from './AddBooking';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

const OrganizerEventCard = ({item}) => {
    const history = useHistory();
    const[eid,setEId] = useState('');
    const handleSubmit = () =>{
        localStorage.setItem("eid",item.eventid);
        setEId(localStorage.getItem("eid"));
        console.log(eid);
        history.push('../addbooking');
    }
  return (
    <>
      <div className='eventcard'>
            <span><span className='high'>Event ID :</span> {item.eventid}</span>
            <span><span className='high'>Event Type :</span> {item.type}</span>
            <span><span className='high'>Description :</span> {item.description}</span>
            <span><span className='high'>Total Package :</span> {item.totalPackage}</span>
            <span><span className='high'>Participants Count :</span> {item.participantsCount}</span>
            <span><span className='high'>Charges :</span> {item.charges}</span>
            <br></br>
            <div><button className='button4' onClick={handleSubmit}><div className='edit-delete'> Book</div></button></div>
        </div>
        </>
  )
}

OrganizerEventCard.propTypes = {
    item:PropTypes.shape({
        eventid:PropTypes.number.isRequired,
        type:PropTypes.string.isRequired,
        description:PropTypes.string.isRequired,
        totalPackage:PropTypes.string.isRequired,
        participantsCount:PropTypes.number.isRequired,
        charges:PropTypes.number.isRequired,
    }).isRequired,
};

export default OrganizerEventCard
