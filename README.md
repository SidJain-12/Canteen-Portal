# MERN Stack
## Installations

### Node

* For Linux:
```
curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash -
sudo apt-get install -y nodejs
```

* For Mac:
```
brew install node
```

### MongoDB

Install the community edition [here](https://docs.mongodb.com/manual/installation/#mongodb-community-edition-installation-tutorials).


### React

```
npm install -g create-react-app
```

* To create a new React app:
```
create-react-app name_of_app
```

* To run the app, cd into the directory and do:
```
npm start
```

## Extra features

* Email to the buyers on acceptance/rejection of their order.

* Graphs to visualise batch-wise, age-wise distribution of completed orders.


## Installations

### Email JS

* For Linux in your frontend:
```
npm i emailjs-com
```

###  Chart MUI

*For Linux in your frontend:
```
npm i @devexpress/dx-react-chart-material-ui
```

### Running the code

* Run Mongo daemon:
```
sudo mongod
```
Mongo will be running on port 27017.


* Run Express Backend:
```
cd backend/
npm install
npm start
```

* Run React Frontend:
```
cd frontend
npm install/
npm start
```

Navigate to [http://localhost:3000/](http://localhost:3000/) in your browser.


## Running the dockerfiles on local

```
docker-compose up --build
```
