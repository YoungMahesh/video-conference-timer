# Video conference timer

## Getting Started

Before starting the app, make sure your environment is configured with Node version `18.16.0`. Alternatively, if you have Docker and VSCode installed on your local machine, you can utilize the devcontainer.

### Starting the Server

Follow these steps to start the server:

1. Navigate to the `server` directory using the command `cd server`.
2. Install the necessary packages by running `npm install`.
3. Start the server by running `npm run start`.

### Starting the Client

Follow these steps to start the client:

1. Navigate to the `web` directory using the command `cd web`.
2. Install the necessary packages by running `npm install`.
3. Start the client by running `npm run start`.

## Application Usage

After successfully starting the server and client:

1. Visit `http://localhost:3000/` in your browser.
2. Open the `Host Page` and `Participant Page` in different tabs by clicking on their respective links.
3. On the `Host Page`, initiate the timer by clicking on any timer located at the bottom of the page. The timer will decrement by 1 every second.
4. Once initiated, the timer will synchronize and run across all opened tabs.
5. Note that the timer cannot be started from the `Participant Page`.
6. When the timer reaches zero, a short music clip will play in the currently active tab.

## Technologies, Libraries, and Languages Used

This application was developed using the following:

1. ReactJS: A JavaScript library for building user interfaces.
2. NodeJs + ExpressJS: A server-side JavaScript runtime environment and web application framework.
3. TypeScript: A statically typed superset of JavaScript that adds optional types.
4. MaterialUI: A popular React UI framework.
5. SocketIO: A JavaScript library for real-time web applications. It enables real-time, bidirectional, and event-based communication between the browser and the server.
