# Deploy server on Heroku

1.  Dynamic Port Binging

const PORT = process.env.PORT || 5000;

2.  Spefify Node and npm version in package.json

"engines": {

"node": "your version",

"npm": "your version"

}

3.  specify start script in package.json

"scripts": {

"start": "node index.js"

}

4.  create .gitignore file
