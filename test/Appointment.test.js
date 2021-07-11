import React from "react"
import ReactDOM from "react-dom"
import {
    Appointment,
    AppointmentsDayView
} from "../src/Appointment"
let container


const render = component => ReactDOM.render(component,container)

beforeEach(()=>{
    container = document.createElement('div');
})
describe('Appointment', ()=>{
    const getCustomerData = firstName => ({firstName: firstName})

    it('renders the customer first name', () => {
        const customerName = "Ashley"
        render(<Appointment customer={getCustomerData(customerName)} />)
        expect(container.textContent).toMatch(customerName)
    })

    it('renders another customer first name', () => {
        const customerName = "Jordan"
        render(<Appointment customer={getCustomerData(customerName)} />)
        expect(container.textContent).toMatch(customerName)
    })
})

describe("AppointmentsDayView", ()=> {

    const today = new Date()

    const appointments = [
        {startsAt: today.setHours(12, 0)},
        {startsAt: today.setHours(13,0)},
        {startsAt: today.setHours(14,0)}
    ]

    const appointmentTimeOfDay = startsAt => {
        const [h,m] = new Date(startsAt).toTimeString().split(':')
        return `${h}:${m}`
    }

    it("renders a div with right id", ()=>{
        render(<AppointmentsDayView appointments={[]} />)
        expect(container.querySelector('div#appointmentsDayView')).not.toBeNull()
    })

    it("renders multiple appointments in an ol element",() =>{
        render(<AppointmentsDayView appointments={appointments} />)
        expect(container.querySelector('ol').children).toHaveLength(appointments.length)
        appointments.forEach((appointment,index)=>{
            expect(container.querySelectorAll('li')[index].textContent).toEqual(appointmentTimeOfDay(appointment.startsAt))

        })
        // expect(container.querySelectorAll('li')[0].textContent).toEqual('12:00')
        // expect(container.querySelectorAll('li')[1].textContent).toEqual('13:00')
    })
})
