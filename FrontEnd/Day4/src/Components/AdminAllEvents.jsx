import AdminEventCard from "./AdminEventCard"
import AdminNavBar from "./AdminNavBar"
import "./AdminAllEvents.css"
const AdminAllEvents = () => {
    const events = [
        {id:1,type:"demo1",description:"Demo1",totalPackage:"$500",participantsCount:100,charges:300},
        {id:2,type:"demo2",description:"Demo2",totalPackage:"$600",participantsCount:110,charges:310},
        {id:3,type:"demo3",description:"Demo3",totalPackage:"$700",participantsCount:120,charges:320},
        {id:4,type:"demo4",description:"Demo4",totalPackage:"$800",participantsCount:130,charges:330},
        {id:5,type:"demo5",description:"Demo5",totalPackage:"$900",participantsCount:140,charges:340},
        {id:6,type:"demo6",description:"Demo6",totalPackage:"$1000",participantsCount:150,charges:350},
        {id:7,type:"demo7",description:"Demo7",totalPackage:"$1100",participantsCount:160,charges:360},
        {id:8,type:"demo8",description:"Demo8",totalPackage:"$1200",participantsCount:170,charges:370},
    ]
  return (
    <>
        <AdminNavBar/>
        <div className="adminalleventscontainer">
            {events.map((item,id)=>(
                <AdminEventCard key={id} item={item}/>
            ))}
        </div>
    </>
  )
}

export default AdminAllEvents