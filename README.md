# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### `Explanation of implementation choices`

I implemented my solution using as few 3rd party libraries as possible. I used material UI icons for icons. I have broken down my application mainly into 2 functional components to implement the contact page. One is the main App component, and the other is my custom SelectInput component which i use to implement the search and filter dropdown. 

I decided to break down these components this way to seperate concerns and make the project more modular and neat. This is also the reason i created a CountriesService to handle API requests related to countries.

I used the countries API from restcountries.com to get the list of countries and their flags. I used axios to make my API calls beacause among other benefits, axios performs automatic JSON data transformation, has built-in CSRF protection and has a way to set a response timeout. 

### `Analysis on bundle size reduction`

To start with, this project is relatively small and little can be done to compress the bundle size further, but i have made some small considerations in my implementation to help reduce it. For example, I import the KeyboardArrowDownIcon from material-ui like this `import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"` instead of like `import { KeyboardArrowDownIcon } from "@mui/icons-material"`, and this helps to reduce my material-ui bundle size.
I also avoided using 3rd party libraries as much as possible, and instead implemented my own components.
Using of react hooks inside react functional components also helps to reduce the bundle size.