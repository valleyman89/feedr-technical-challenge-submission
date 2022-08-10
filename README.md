# Feedr Technical Challenge Submission

## Notes - frontend

- I opted to use a context based approach opposed to prop drilling.
- I did not use any other packages - I thought about using [axios](https://www.npmjs.com/package/axios) to make the call to the back-end but decided against it for simplicity. Although I'm not happy about making another call to the backend in `ItemSearch.jsx`.
- The dietary count in `MenuSummary.jsx` is probably more complicated that it needs to be, and if it's functionality needed to be changed I'd be tempted to re-factor it completely.
- I had anticipated to create a single test for each component to ensure they would render but ran into problems getting them work pass, I think due to using context. I didn't want to spend much longer trying to solve it (c. 2 hours to finish, c. one hour on tests).

## Notes - backend

- I used a route parameter rather than a query parameter to handle the search.
- There's a try/catch block to check the request but it'll only `console.log` the error, ideally this would be thrown back to the client side in a nicer manner.

## Install dependencies

yarn (or npm install)

## Start development server

yarn dev (or npm run dev)

## Config

If port 3000 is already allocated, change the `port` variable in `src/client/config/api.js` to match the correct port.
