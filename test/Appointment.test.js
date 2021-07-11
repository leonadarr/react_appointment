import React from "react"
import ReactDOM from "react-dom"
import {
    Appointment,
    AppointmentsDayView
} from "../src/Appointment"
let container
const getCustomerData = firstName => ({firstName: firstName})
const render = component => ReactDOM.render(component,container)

beforeEach(()=>{
    container = document.createElement('div');
})
describe('Appointment', ()=>{


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
        {
            startsAt: today.setHours(12, 0),
            customer: getCustomerData("Ashley")
        },
        {
            startsAt: today.setHours(13,0),
            customer: getCustomerData("Jordan")
        }
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

        //Assertions
        expect(container.querySelector('ol').children).toHaveLength(appointments.length)
        appointments.forEach((appointment,index)=>{
            expect(container.querySelectorAll('li')[index].textContent).toEqual(appointmentTimeOfDay(appointment.startsAt))
        })
        expect(container.textContent).not.toMatch("There are no appointments scheduled for today")
    })

    it("initially shows a message saying there are no appointments today", ()=>{
        render(<AppointmentsDayView appointments={[]}/>)
        expect(container.textContent).toMatch("There are no appointments scheduled for today")
    })

    it("selects the first appointment by default", ()=>{
        render(<AppointmentsDayView appointments={appointments}/>)
        expect(container.textContent).toMatch('Ashley')
    })
})
