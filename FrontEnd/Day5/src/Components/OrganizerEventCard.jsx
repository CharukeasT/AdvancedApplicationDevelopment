
import PropTypes from 'prop-types'
import "./EventCard.css"
const OrganizerEventCard = ({item}) => {
  return (
      <div className='eventcard'>
            <span><span className='high'>Event ID :</span> {item.id}</span>
            <span><span className='high'>Event Type :</span> {item.type}</span>
            <span><span className='high'>Description :</span> {item.description}</span>
            <span><span className='high'>Total Package :</span> {item.totalPackage}</span>
            <span><span className='high'>Participants Count :</span> {item.participantsCount}</span>
            <span><span className='high'>Charges :</span> {item.charges}</span>
            <br></br>
            <div><button className='button4'><div className='edit-delete'> Book</div></button></div>
        </div>
  )
}

OrganizerEventCard.propTypes = {
    item:PropTypes.shape({
        id:PropTypes.number.isRequired,
        type:PropTypes.string.isRequired,
        description:PropTypes.string.isRequired,
        totalPackage:PropTypes.string.isRequired,
        participantsCount:PropTypes.number.isRequired,
        charges:PropTypes.number.isRequired,
    }).isRequired,
};

export default OrganizerEventCard
