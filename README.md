# meet app

## Description
To build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

## What technology did I use and why?

I used **React** for my meet application.  The main reasons are
* type of application: I need a library helping me build the UI of my app. React is suited best for the view side of the mvc approach and its virtual DOM ensures faster rendering of views
* scope: The component-based nature of React allows me to increase the scope of my web application with little to no performance issues or concerns about entropy.
* good documentation: for a beginner like me, it is important that the tools I use are well documented, so that I can understand the different components I work with. Another factor in my decision was, that it is kept up to date. In case of a library developed and maintained by Facebook, that is not a problem.
* popularity: React is in high demand at the moment. This can be seen in job ad, the stars on GitHub (187k) as well as the contributions to stack overflow. This support in the developer community ensures that Il will eventually find solutions when troubleshooting.
* mobile version: with its associated ecosystem of tools, React is also a good springboard for my next project, where I want to use React Native for a mobile application. So getting familiar with React first is valuable.


I created the application using the **Create React App** boilerplate, enabling the pwa template to transfer the app into a PWA in the development process:
```bash
npx create-react-app meet --template cra-template-pwa --use-npm
```
I used **AWS Lambda** to create serverless functions, which allows a function to be deployed individually in the cloud. In this App it is used for communication to the Google Calendar API

For the API I used the **Google Calendar API** which is a protected API so to access it I needded to implement the **OAuth2 protocol**

For the unit testing I used **Jest** I used this as it is included by default in the create-react-app. I also installed **Enzyme** as this allows for shallow rendering (allows the rendering of components "one level deep".

To complete the User Acceptance test to test BDD Behavior Driven Development I used **Jest-Cucumber** a test runner. 

Lastly I performed end-to-end testing to ensure that the app works in its entirety. It allows the stimulation of the whole app cylce from opening to closing. For this I used **Puppeteer** as it also works well with Jest.



## Key features

* Filter events by city.
* Show/hide event details.
* Specify number of events.
* Use the app when offline.
* Add an app shortcut to the home screen.
* View a chart showing the number of upcoming events by city.

## User stories and test scenarios

#### User stories format:
   As a **[role]**,
   I should be able to **[action]** 
   So that **[benefit]**
   
#### BDD Principle: written in Gherkin's "Given-When-Then"
  * **Given** represents the context of the scenario. In what type of situation would this scenario arise?
  * **When** represents the user interaction or behavior. What does the user need to do for this scenario to come into play? Ideally, you should narrow this down to one action per scenario.
  * **Then** represents the expected outcomes of the scenario. What should happen when the user performs this specific action in this specific content?

### FEATURE 1: FILTER EVENTS BY CITY

**User story**

 As a **user**
 I should be able to **“filter events by city”**
 So that **I can see the list of events that take place in that city**

#### Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.

**BDD Principle**
* **Given** user hasn’t searched for any city
* **When** the user opens the app
* **Then** the user should see a list of all upcoming events

#### Scenario 2: User should see a list of suggestions when they search for a city.

**BDD Principle**
* **Given** the main page is open
* **When** user starts typing in the city textbox
* **Then** the user should see a list of cities (suggestions) that match what they’ve typed

#### Scenario 3: User can select a city from the suggested list.

**BDD Principle**
* **Given** the user was typing “Berlin” in the city textbox and the list of suggested cities is showing
* **When** the user selects a city (e.g., “Berlin, Germany”) from the list
* **Then** their city should be changed to that city (i.e., “Berlin, Germany”) And the user should receive a list of upcoming events in that city

### FEATURE 2: SHOW/HIDE AN EVENT’S DETAILS

**User story**

 As a **user**
 I should be able to **“collapse and expand an event by clicking ”**
 So that **I can see hide or see the details of an event**

#### Scenario 1: An event element is collapsed by default. 

**BDD Principle**
* **Given** user is on the main page
* **When** nothing is selected
* **Then** then the event details will be 'collapsed' or hidden

#### Scenario 2: User can expand an event to see its details. 

**BDD Principle**
* **Given** user wants to see more details of a specific event
* **When** user clicks on the event to 'expand'
* **Then** the details for that event will be shown

#### Scenario 3: User can collapse an event to hide its details.

**BDD Principle**
* **Given** an event has been 'expanded' and the details are shown and the user wants to 'collapse' or hide the details
* **When** the user wants to hide the details, the user needs to click on that event
* **Then** the events details will be hidden



### FEATURE 3: SPECIFY NUMBER OF EVENTS

**User story**

As a **user**
I should be able to **“specify the number of events displayed”**
So that **I can see the number of events I want to see**

#### Scenario 1: When user hasn’t specified a number, 32 is the default number.

**BDD Principle**
* **Given** the user is shown a list of events
* **When** the user has not specified a number of events to be shown
* **Then** the default of 32 events will be displayed

#### Scenario 2: User can change the number of events they want to see.

**BDD Principle**
* **Given** the user is shown a list of events
* **When** the user specifies a number as to how many events they want to see
* **Then** the user specified number will be the amount of events that will be displayed to the user

### FEATURE 4: USE THE APP WHEN OFFLINE

**User story**

As a **user**
I should be able to **“use the app offline”**
So that **I can have access to the cached data and can still see my events**

#### Scenario 1: Show cached data when there’s no internet connection. 

**BDD Principle**
* **Given** the user has no internet connection
* **When** they access the app
* **Then** they can still access and view data from the cache

#### Scenario 2: Show error when user changes the settings (city, time range).

**BDD Principle**
* **Given** the user locates to another location
* **When** the user changes their settings
* **Then** an error message will be shown to the user

### FEATURE 5: DATA VISUALIZATION

#### Scenario 1: Show a chart with the number of upcoming events in each city.

**User story**

As a **user**
I should be able to **“see charts with the number of upcoming events in each city”**
So that **I can have a better overview of the events in each city**

**BDD Principle**
* **Given** user is on the app 
* **When** the user wants to have a better overview of the number of events in each city
* **Then** the app will display charts with the information

## What challenges did I face, what did I learn?
* I learned to program using TDD Test Driven Development, in which I first wrote tests then the code to fulfill these tests.
* The challenges I encountered was implementing a switch for light and dark mode on top of the app. Since to login it redirects to the google login I had to save the users preference in localStorage so that the preferred mode is still in place when the page loads again.

## How to install and run the project ...

### ... as a developer, who wants to work with the project
1. Clone or download repository ...
```bash
git clone https://github.com/sms165/meet.git
```

2. Connect to your github pages 
Follow the instructions provided by github: https://pages.github.com 

3. Edit homepage address in package.json to fit to your github account

4. To run app on localhost:
```bash
npm run start
```

5. To push changes to github pages
```bash
npm run deploy
```

### ... to access the already hostet the live app:
https://sms165.github.io/meet/

## Technical Requirements (according to project brief)
* React application
* Built using TDD technique
* Use the Google Calendar API and OAuth2 authentication flow.
* Use use serverless functions (AWS lambda is preferred) for the authorization server instead of using a traditional server
* Work offline or in slow network conditions with the help of a service worker.
* Use React axios and async/await.
* Implement an alert system using an OOP approach to show information to the user.
* Make use of data visualization using the recharts library.
* Be monitored using an online monitoring tool.


## Development Process for the meet-app

### Create test scenarios for each user story
__See above__

### Create serverless functions to adhere to Google OAuth2 authentication flow
#### Create a Oauth Consumer
1. Create new project in Google's API console
2. Enable Google Calendar API
3. Create credentials
4. Add scopes
5. Add origin and URI to app's domain
6. Add test users
7. Download credentials (client_secret_.json file)

#### Verify app's domain
Download the HTML verification file from Google developer console and add to /public folder in app

#### Create a serverless service
1. Install serverless toolkit: 
```bash
npm install -g serverless
```
2. Set up server directory:
```bash
# Create a new serverless service/project using aws-nodejs
serverless create --template aws-nodejs --path auth-server
# Jump into the newly created directory
cd auth-server
# Then create a package.json
npm init
# You can simply press the Enter key through all the options here.
```
3. Add config.json to .gitignore file

#### Configure AWS credentials
1. Go to AWS console
2. Navigate to 'My security credentials'
3. Create new access key & download file
4. Configure credentials for serverless:
```bash
serverless config credentials --provider aws --key ACCESS_KEY_ID --secret SECRET_ACCESS_KEY
```

#### Add secrets to config.json file
1. Within server directory, create config.json file
2. Add credentials stored in client_secret_.json file to config.file
3. Add Calendar ID of calendar that will be used in application to config.file

#### Set up serverless file

#### Install Google APIs package 
```bash
npm install googleapis 
```

#### Set up handler.js file with serverless functions

#### Deploy serverless
```bash
serverless deploy
```

#### Obtain serverless API endpoints
```bash
serverless info
```

### Unit testing
* Using test scenarios, write frontend unit tests using mock data, to test key features.

### Integration testing
* Write integration tests to test the interaction between the app’s React components.
* Write integration tests to test the data received from the mock API.

### User Acceptance & End-to-end tesing

### Transform applications into PWA Progressive Web Application
* In src/index.js file, register service worker by changing from serviceWorkerRegistration.unregister() to serviceWorkerRegistration.register()
* Add app infos to manifest.json

### Add data visualization using Recharts
