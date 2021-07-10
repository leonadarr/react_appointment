import React from "react"
import ReactDOM from "react-dom"
import {Appointment} from "../src/Appointment"
let container
// let customer

const render = component => ReactDOM.render(component,container)
const getCustomerData = firstName => ({firstName: firstName})

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
