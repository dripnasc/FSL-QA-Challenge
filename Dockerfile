FROM cypress/included:3.4.0

WORKDIR /app

COPY ./cypress ./cypress
COPY ./cypress.json ./cypress.json

RUN  npx cypress run