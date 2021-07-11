import React, {useState} from "react"

const appointmentTimeOfDay = startsAt => {
    const [h,m] = new Date(startsAt).toTimeString().split(':')
    return `${h}:${m}`
}

export const Appointment = ({customer,startsAt})=> {
    return (
        <>
            <h1>Today's appointment at {appointmentTimeOfDay(startsAt)}</h1>
            <table>
                <tbody>
                <tr><td><b>Customer</b></td><td>{customer.firstName} {customer.lastName}</td></tr>
                <tr><td><b>Phone Number</b></td><td>{customer.phoneNumber}</td></tr>
                <tr><td><b>Stylist</b></td><td>{customer.stylist}</td></tr>
                <tr><td><b>Service</b></td><td>{customer.service}</td></tr>
                <tr><td><b>Notes</b></td><td>{customer.notes}</td></tr>
                </tbody>
            </table>
        </>
    )
}
export const AppointmentsDayView = ({appointments})=> {

    const [selectedAppointment, setSelectedAppointment] = useState(0)


    return (
        <div id="appointmentsDayView">

            <ol>
                {appointments.map((app,index)=>(
                    <li key={app.startsAt}>
                        <button
                            type={"button"}
                            onClick={()=> setSelectedAppointment(index)}
                        >
                            {appointmentTimeOfDay(app.startsAt)}
                        </button>
                    </li>
                ))}
            </ol>
            { appointments.length
                ?<Appointment {...appointments[selectedAppointment]}/>
                :<p>There are no appointments scheduled for today</p>
            }


        </div>
    )
}

