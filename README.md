# FSL-QA-Challenge
![cypress version](https://img.shields.io/badge/cypress-9.5.4-brigthgreen) 

FSL-QA-Challenge contains some funcional automated tests for application "Appointment Management" from FullStack Labs using the framework [Cypress.io](https://www.cypress.io/).

<br>
<br>

## Requirements
- Any operational system: Mac, Windows, Linux
- [Node 16.0.0+ (LTS)](https://nodejs.org/)
- [npm 8.0.0+](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [cypress 9.0.0+](https://docs.cypress.io/guides/getting-started/installing-cypress)
- [git](https://git-scm.com)
- [Docker](https://docs.docker.com/desktop/#download-and-install)

<br>
<br>

## Installation
In order to get the code and install dependencies, open a terminal, navigate to the folder of will and execute the following commands:

`NOTE: Installation step will not be needed when running tests through the docker image or through GitHub Actions`

```bash
git clone git@github.com:dripnasc/FSL-QA-Challenge.git
cd FSL-QA-Challenge
npm install
```

<br>
<br>

## Folders Structure
The folder structure was based on Cypress projects. Therefore, some folders and files are default. The following ones have specific files:
>**.github/workflow**: contains the workflow fsl.yml to run test cases on GitHub Actions. <br>
>**cypress/integration**: contains a spec file for each page and shared component with related test cases. <br>
>**cypress/support**: contains the page object folders where element locators are placed on elements.js files and methods on index.js files. <br>
>>**cypress/support/pages**: contains page object files of page /home.  <br>

<br>
<br>

## Execution
There are the following three ways to execute implemented test cases:

<br>

### 1. Through installed Cypress package
Once the project is cloned, Cypress can be open in the root of the project folder by running the following command. 

- Opening Cypress and running test cases on Electron browser
```bash
$ npm run cy:open
```
- Running Cypress using Electron browser in headless mode
```bash
$ npm run cy:run
```

<br>

### 2. Through GitHub Actions
The repository contains the workflow "Regression Tests using Cypress Docker Image"" that runs all tests using an Ubuntu image with a Cypress container.
The workflow is scheduled to run from Sunday to Friday at 23:05h but it also can be executed mannually.
For all worflow runs, it is possible to download screenshots of failing test cases and videos of all executed test cases under Artifacts section.

To execute it mannually:
1. Inside this GitHub repository go to tab "Actions";
2. Under "All workflows" click on "Regression Tests using Cypress Docker Image";
3. Click on dropdown button "Run workflow" and click on button "Run workflow";
4. Once the execution is finished, click on the workflow name;
5. To verify all execution details in the execution console, click on "Creating Ubuntu image..." and expand each step ;
6. To download screenshots and videos click on "cypress-screenshots" and "cypress-videos" under Artifacts.


<br>
<br>

## Useful Links
- [Cypress.io](https://www.cypress.io/)
- [Cypress documentation](https://docs.cypress.io/)
- [GitHub Actions](https://docs.github.com/es/actions)
- [Docker documentation](https://docs.docker.com)


