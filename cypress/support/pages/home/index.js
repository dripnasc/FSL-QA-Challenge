//This file contains all methods that can be executed in the Home page
const el = require('./elements').ELEMENTS

class Home {

    goToHome(){
        cy.visit('/')
    }

    checkPageTitle(){
        expect(el.pageTitle).exist
        cy.get(el.pageTitle).invoke('text').then((textcat) => {
            assert.equal(textcat, el.pageTitleText)
        })
    }

    fillPetName(petName){
        cy.get(el.petNameField).type(petName)
    }

    fillOwnerName(ownerName){
        cy.get(el.ownerNameField).type(ownerName)
    }

    fillDate(dateapp){
        cy.get(el.dateField).type(dateapp)
    }

    fillTime(timeapp){
        cy.get(el.timeField).type(timeapp)
    }

    fillSymptoms(symptoms){
        cy.get(el.symptomsNameField).type(symptoms)
    }

    clickSubmit(){
        cy.get(el.btnSubmit).click()
    }

    submitAppointment(petName, ownerName, dateapp, timeapp, symptoms){
        this.fillPetName(petName)
        this.fillOwnerName(ownerName)
        this.fillDate(dateapp)
        this.fillTime(timeapp)
        this.fillSymptoms(symptoms)
        this.clickSubmit()
    }

    checkSubmitMessage(message){
        expect(el.alert).exist
        cy.get(el.alert).invoke('text').then((textcat) => {
            assert.equal(textcat, message)
        })
    }

    assertPetNameAppointment(petName){
        expect(el.petNameAppointment).exist
        cy.get(el.petNameAppointment).invoke('text').then((textcat) => {
            assert.equal(textcat, petName)
        })
    }

    assertOwnerNameAppointment(ownerName){
        expect(el.ownerNameAppointment).exist
        cy.get(el.ownerNameAppointment).invoke('text').then((textcat) => {
            assert.equal(textcat, ownerName)
        })
    }
    
    assertDateAppointment(date){
        expect(el.dateAppointment).exist
        cy.get(el.dateAppointment).invoke('text').then((textcat) => {
            assert.equal(textcat, date)
        })
    }
    
    assertTimeAppointment(time){
        expect(el.timeAppointment).exist
        cy.get(el.timeAppointment).invoke('text').then((textcat) => {
            assert.equal(textcat, time)
        })
    }

    assertSymptomsAppointment(symptoms){
        expect(el.symptomsAppointment).exist
        cy.get(el.symptomsAppointment).invoke('text').then((textcat) => {
            assert.equal(textcat, symptoms)
        })
    }

    assertAppointment(petName, ownerName, dateapp, timeapp, symptoms){
        this.assertPetNameAppointment(petName)
        this.assertOwnerNameAppointment(ownerName)
        this.assertDateAppointment(dateapp)
        this.assertTimeAppointment(timeapp)
        this.assertSymptomsAppointment(symptoms)
    }
}

export default new Home()