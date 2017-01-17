# https://pluralsight-cc.herokuapp.com

## Pluralsight Code Challenge Simple Question App
* Redux
* React
* Rails5 in API mode

### Prerequisites
* Node.js and NPM - http://blog.teamtreehouse.com/install-node-js-npm-mac
* Rails5/bundler - http://railsapps.github.io/installrubyonrails-mac.html

### Install instructions
* Create a .env file in client and put the following in it. Replace
the PROD host with your own. 
```
REACT_APP_DEV_HOST='http://localhost:3000'
REACT_APP_PROD_HOST='https://pluralsight-cc.herokuapp.com'
```
* If you cannot get rails5/bundler setup.. just go ahead and set the DEV
host to heroku as well so you can preview the app.

* You only need to do the bundle/create/migrate/seed steps once.

##### Prod:
```
bundle install
rails db:create
rails db:migrate
rails db:seed (this will take a while)
cd client
npm install
npm run build
rails s
visit localhost:3000
```

###### Dev:
* It's important that you start rails first so create_react_app asks if you
want to start on port 3001 instead.  
```
Tab1:
bundle install
rails db:create
rails db:migrate
rails db:seed (this will take a while)
rails s
Tab2:
cd client
npm install
npm start
visit localhost:3001
```

###### Cant get rails going?:
Follow the instructions mentioned above about what to set your DEV host to 
in the .env file that you need to create. 
```
cd client
npm install
npm start
visit localhost:3000
```