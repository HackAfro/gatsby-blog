# Gatsby-Blog

Realtime comments on gatsby blogs using Pusher

## Prerequisites

- [Gatsby](https://gatsbyjs.org/)
- [Express](https://expressjs.com/)
- [Pusher](https://pusher.com)
- A [Pusher account](https://pusher.com/signup) and [Pusher app credentials](http://dashboard.pusher.com/)

## Getting started

- Clone the project and install dependencies:
- Create a file named `.env`. Update the `.env` file with the content below:

```
PUSHER_APP_ID=app-id
PUSHER_APP_KEY=app-key
PUSHER_APP_SECRET=app-secret
```

> **Note**: ensure to replace the placeholder values with your pusher `appId`, `key` and `secret`.

- Clone the repo
- Enter the project folder
- Run npm install
- Start server by running `node server`
- Run `yarn develop` or `npm run develop` to start the gatsby server


## Built With

- [Gatsby](https://gatsbyjs.org/)
- [Pusher](https://pusher.com)
- [Express](https://expressjs.com/)