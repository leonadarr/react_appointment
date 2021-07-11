import React from "react"
export const Appointment = ({customer: {firstName}})=><div>{firstName}</div>
export const AppointmentsDayView = ({appointments})=>(
    <div id="appointmentsDayView">

        <ol>
            {appointments.map(app=>(
                <li key={app.startsAt}>{appointmentTimeOfDay(app.startsAt)}</li>
            ))}
        </ol>
        { appointments.length
            ?<Appointment {...appointments[0]}/>
            :<p>There are no appointments scheduled for today</p>
        }


    </div>
)

const appointmentTimeOfDay = startsAt => {
    const [h,m] = new Date(startsAt).toTimeString().split(':')
    return `${h}:${m}`
}
