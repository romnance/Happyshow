# Intro to Happy Shows

Happy Shows is a simple web app that integrates with [TVMaze](https://www.tvmaze.com/api) public API. 

Can be used for searching your favourite tv shows, reading the info about show and checking the schedule for upcoming episodes.

[Check hosted app online](https://happyshow.vercel.app/)

# To run on localhost 

Open your terminal and then type

$ git clone {the url to the GitHub repo}

This clones the repo

cd into the new folder and type

$ npm install

This installs the required dependencies

To run the React project.
$ npm start

You are done! Now you can start editing and checking the React project in the new folder that's created.


# Tools and technologies

For fast and safe development, I used [Create React App](https://github.com/facebook/create-react-app) as a base for this project. [CRA](https://github.com/facebook/create-react-app) is the best way to start building a new simple application in React. It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. 

Create React App doesn’t handle backend logic or databases; it just creates a frontend build pipeline, so you can use it with any backend you want. Under the hood, it uses Babel and webpack, but you don’t need to know anything about them.

When you’re ready to deploy to production, running npm run build will create an optimized build of your app in the build folder. You can learn more about Create React App from its [README](https://github.com/facebook/create-react-app#create-react-app--) and the [User Guide](https://create-react-app.dev/).

In order not to spend a lot of time on styles, I used bootstrap. Some components have been customized with inline CSS.

The file structure is divided into folders with pages, components, helpers (js files)

├── README.md  
├── node_modules  
├── package.json  
├── .gitignore  
├── build  
├── public  
│   ├── favicon.ico  
│   ├── index.html  
│   └── manifest.json  
└── src  
    ├── App.js  
    ├── index.css  
    └── index.js  


We can see all the "dependencies" and "devDependencies" required by our React app in node_modules. 
These are as specified or seen in package.json file.

Static files are located in the public directory. Files in this directory will retain the same name when deployed to production. Thus, they can be cached at the client-side and improve the overall download times.

All of the dynamic components will be located in the src. To ensure that, at the client side, only the most recent version is downloaded and not the cached copy, Webpack will generally have the updated files a unique file name in the final build.

You can see files like App.js which is main JS component. index.js is the entry point for App. 

The application should be covered by tests in the future (did not complete due to lack of time)


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
