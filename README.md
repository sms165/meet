# meet app

## Description
To build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

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
