import PropTypes from 'prop-types'
import './AdminDashboard.css'
const DashboardEventCard = ({item}) => {
  return (
    <div className='dasheventcard'>
            <span><span className='high1'>Event ID :</span> {item.id}</span>
            <span><span className='high1'>Event Type :</span> {item.type}</span>
            <span><span className='high1'>Description :</span> {item.description}</span>
            <span><span className='high1'>Total Package :</span> {item.totalPackage}</span>
            <span><span className='high1'>Participants Count :</span> {item.participantsCount}</span>
            <span><span className='high1'>Charges :</span> {item.charges}</span>
    </div>
  )
}

DashboardEventCard.propTypes = {
    item:PropTypes.shape({
        id:PropTypes.number.isRequired,
        type:PropTypes.string.isRequired,
        description:PropTypes.string.isRequired,
        totalPackage:PropTypes.string.isRequired,
        participantsCount:PropTypes.number.isRequired,
        charges:PropTypes.number.isRequired,
    }).isRequired,
};
export default DashboardEventCard