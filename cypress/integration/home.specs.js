//This file contains all tests cases executed on Home Page
import Home from "../support/pages/home";

describe('Home Page', () => {

    it('should load home page properly', () => {
      Home.checkPageTitle()
    })

    it('should submit an appointment successfully', ()  => {
        Home.submitAppointment('Loonie', 'Adriana Nascimento', '2022-06-22', '08:00:00', 'Loonie is very lazy recently.')
        Home.assertAppointment('Loonie', 'Adriana Nascimento', '2022-06-22', '08:00:00', 'Loonie is very lazy recently.')
    })

    it('should fail submit if missing pet name', ()  => {
        Home.submitAppointment(' ', 'Adriana Nascimento', '2022-06-22', '08:00:00', 'Loonie is very lazy recently.')
        Home.checkSubmitMessage('All fields are required')
    })

    it('should fail submit if missing owner name', ()  => {
        Home.submitAppointment('Loonie', ' ', '2022-06-22', '08:00:00', 'Loonie is very lazy recently.')
        Home.checkSubmitMessage('All fields are required')
    })

    it('should fail submit if missing date', ()  => {
        Home.fillPetName('Loonie')
        Home.fillOwnerName('Adriana')
        Home.fillTime('08:00:00')
        Home.fillSymptoms('Test missing date')
        Home.clickSubmit()
        Home.checkSubmitMessage('All fields are required')
    })

    it('should fail submit if missing time', ()  => {
        Home.fillPetName('Loonie')
        Home.fillOwnerName('Adriana')
        Home.fillDate('2022-08-08')
        Home.fillSymptoms('Test missing time')
        Home.clickSubmit()
        Home.checkSubmitMessage('All fields are required')
    })

    it('should fail submit if missing symptoms', ()  => {
        Home.submitAppointment('Loonie', ' ', '2022-06-22', '08:00:00', 'Loonie is very lazy recently.')
        Home.checkSubmitMessage('All fields are required')
    })

})
