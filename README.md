<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">tempelating-to-do-list</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> Daily Organiser To Do List
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [TODO](../TODO.md)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

I am creating this project to be my daily organiser as my to do list

## 🏁 Getting Started <a name = "getting_started"></a>

First start by creating server using  
[Express] - Server Framework and using [NodeJs] - Server Environment for our environment
then create a views directory with a file list.ejs in order to start using [EJs] - templating framework  
. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them.

```
npm init

npm i express nodemon ejs body-parser
```

### Running The Server

After writing "start": "nodemon app.js" in our package.json
we can run

```
npm run start
```

in our terminal the after the server is created a message will appear on the console that our server has started

## 🎈 Usage <a name="usage"></a>

1. Create our server by installing [Prerequisites]

- 1.0 set up our express npm package and store it in app variable
- 1.1 import all our npm packages as constants
- 1.2 create a listening port with the listen method
- 1.21 it takes two params 1st the listening port 2nd our callback function which allows us to when our server is running

2.  form our ejs environment thru our get method

- 2.0 first set our ejs engine with the set method which takes to parameters strings view engine and ejs
- 2.1 set up our get method which takes two parameters our home route and call back fn which uses two arguments res(respond) , request (req)
- 2.2 inside our get method we are going to set up our current time and date using our new Date()
- 2.21 we can extract our day with toLocaleDateString method which takes two parameters language and options which should have been preformed
- 2.22 our options obj which is used to extract day, month and weekday for more info check documentation
- 2.3 the respond(res) to our sever with the data using render method which takes two parameters
- and they are
- 2.31 "list" string which represents where our ejs file location which should be in the /VIEWS/\*.ejs
- 2.32 second use it to render to our list ejs with our key value pair
- key - the value that will be used in ejs to represent data in our ejs file
- value - is a variable that stores data from our servers

3.  In this step we are going to form a data collection which will be displayed as a list

- 3.0 first we should use our body parser to retrive data from our form
- 3.1 set up our post method which takes two parameters our home route and call back fn which uses two arguments res(respond) , request (req)
- 3.30 form an empty array
- 3.31 then receive(req) the data from our body html and store them in our variables
- 3.32 we are going to send(push()) the data in our gobal collections array
- 3.33 then redirect it to our home route
- note Because we can access it becoz of block scoping we have to redirect the data to our list but first pre render it in a data collection ie an array then sending our data to that array in our goble variable
- 3.34 then store var and use it as a key to reflect into our value
- 3.35 use the newly formed data to loop it thru our list

## 🚀 Deployment <a name = "deployment"></a>

Add additional notes about how to deploy this on a live system.

## ⛏️ Built Using <a name = "built_using"></a>

- [MongoDB](https://www.mongodb.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>

- [@DevArtist254](https://github.com/kylelobo) - Idea & Initial work

See also the list of [contributors](https://github.com/kylelobo/The-Documentation-Compendium/contributors) who participated in this project.

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- Hat tip to anyone whose code was used
- Inspiration
- References
