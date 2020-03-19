# Cheers

Cheers is an app for the user to collect great beers they have come across. It allows them to store a picture, name, brewery with a link to their site  and a description. Here is a link to the [live site](https://cheers-frontend.herokuapp.com/).

---

## Contributors
Evan James, John Hitz and Richard Wright

---

## User stories

1. The user should be able to add beers
1. The user should be able to edit the beers
1. The user should see a list of the beers added
1. The user should be able to click on the beer and see more information.

---

## Technology Used
- Node.js
- Mongoose
- Express
- React
- Cors
- Mongodb
- Flexbox
- Bootstrap

---

## Approach Taken

We began by meeting as a group and using Trello to help plan the app decided what we wanted to build, user stories and broke up the tasks between us.

First we built the back end, utilising MVC file structure to organise our work. We created the server and controller and created all CRUD routes (Create, Read, Update, Destroy). We built our model for the beers the user would be able to add and connected this to mongoDB using mongoose and tested the routes with curl requests.
Once everything was working correctly we deployed the backend to heroku.

We then used create-react-app to make our frontend in a different repo so our app would be decoupled, allowing for greater maintainability and scalability. We deployed the front-end to heroku and made sure we had the two connected before building the frontend.

Again following MVC file structure we fleshed out our app. We began by building our app component, then creating our beer component. We used a map function to display all the beers on to the page.

We created two forms, a new form for the user to add data to the app. This would appear on the page with the use of a button to toggle the form. Upon submit the new beer would be displayed on the page straight away.

The edit form was created in a similar way however it is pre-populated with the data the user is intending to edit.

We added a delete button so the user could remove beers they no longer wanted.

At this point with all the functionality working we started working on the presentation of the app. We created a header that is responsive to different screen sizes. We styled the beer components as cards using bootstrap, and added the ability to show and collapse the cards to keep the view clean for the user.

We added a regular expression pattern check on the url input to ensure the user gives the correct details and their link to the site should work. We made it so that when a link to an external site was clicked it would open in a new tab so the user was not taken away from the app.

---

## Features we would like to add

1. Authorisation and user model.
1. Comments and likes.
1. Favourite beer list.
1. filter functionality.

---
