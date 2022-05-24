//This file contains all web elements locators of the Home page

export const ELEMENTS = {
    url: 'http://localhost:3000',
    pageTitle: '[data-testid="app-name"]',
    pageTitleText: 'Appointment Management',
    formTitle: 'Title',

    petNameField: '[data-testid="pet"]',
    ownerNameField: '[data-testid="owner"]',
    dateField: '[data-testid="date"]',
    timeField: '[data-testid="time"]',
    symptomsNameField: '[data-testid="symptoms"]',
    btnSubmit: '[data-testid="btn-submit"]',

    alert: '[data-testid="alert"]',

    petNameAppointment: '[data-testid="appointment"] > :nth-child(1) > span',
    ownerNameAppointment: '[data-testid="appointment"] > :nth-child(2) > span',
    dateAppointment: '[data-testid="appointment"] > :nth-child(3) > span',
    timeAppointment: '[data-testid="appointment"] > :nth-child(4) > span',
    symptomsAppointment: '[data-testid="appointment"] > :nth-child(5) > span',

}