import './AllBookings.css'
import AdminNavBar from './AdminNavBar'
const AllBookings = () => {
    const bookings = [
        {bookingId:1,organizerId:2,username:"demo1",submissionDate:"Jan 27,2023",eventDate:"Feb 10,2023",eventType:"demo1",headCount:100,amount:"$30000"},
        {bookingId:2,organizerId:3,username:"demo2",submissionDate:"Jan 28,2023",eventDate:"Feb 12,2023",eventType:"demo2",headCount:110,amount:"$34100"},
        {bookingId:3,organizerId:1,username:"demo3",submissionDate:"Jan 29,2023",eventDate:"Feb 14,2023",eventType:"demo3",headCount:120,amount:"$38400"},
        {bookingId:4,organizerId:2,username:"demo1",submissionDate:"Jan 30,2023",eventDate:"Feb 17,2023",eventType:"demo4",headCount:130,amount:"$42900"},
    ];
  return (
    <>
        <AdminNavBar/>
        <div className='bookingstable'>
            <table>
                <thead>
                    <tr>
                        <th>Booking ID</th>
                        <th>Organizer ID</th>
                        <th>Username</th>
                        <th>Submission Date</th>
                        <th>Event Date</th>
                        <th>Status</th>
                        <th>Event Type</th>
                        <th>Head Count</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((B,bookingId)=>(
                        <tr key={bookingId}>
                            <th>{B.bookingId}</th>
                            <th>{B.organizerId}</th>
                            <th>{B.username}</th>
                            <th>{B.submissionDate}</th>
                            <th>{B.eventDate}</th>
                            <th>
                                <select className='status'>
                                    <option value="0">Pending</option>
                                    <option value="1">Confirmed</option>
                                    <option value="2">Verified</option>
                                </select>
                            </th>
                            <th>{B.eventType}</th>
                            <th>{B.headCount}</th>
                            <th>{B.amount}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
  )
}

export default AllBookings