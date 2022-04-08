
## The Shoppies

This project was created and submitted to the Shopify UX Developer Intern & Web Developer Intern Challenge for Summer 2021. The project is deployed and hosted on Heroku. 

### [View Deployment](https://katies-shoppies.herokuapp.com/)

Briefly, the task was to create a web application to search the OMDB database for movies to nominate for Shopify's new fictional movie awards, The Shoppies! More detailed requirements for the challenge can be found [here](https://docs.google.com/document/d/1AZO0BZwn1Aogj4f3PDNe1mhq8pKsXZxtrG--EIbP_-w/edit?usp=sharing). 

I chose to use [React](https://reactjs.org) to develop the application with help from [Redux](https://redux.js.org/introduction/getting-started) and the [Redux Toolkit](https://redux.js.org/redux-toolkit/overview), as well as the [Evergreen-UI](https://evergreen.segment.com) library. React is my personal favourite web development framework; it is lightweight and flexible, making it the perfect choice for a one page application with frequent re-rendering like The Shoppies website.

I decided to use Redux since almost every component would as least need access to the list of nominnees and several components would need to be able to modify this list. It definitely would be possible to create this application without Redux, but having all of the data in a centralized store makes the application so much simpler and streamlined without the need for passing props and callbacks endlessly.

With Redux, there comes a lot of boilerplate code and set-up. Thankfully,  there is Redux Toolkit which provides a set of functions to handle a lot of common use cases and greatly simplifies set-up and implementation. I used the Redux toolkit in my application beacuse, even though I developed an application with Redux store that is manually configured during my internship with Ubisoft, Redux Toolkit was really simple to learn and it really simplified development.

Evergreen-UI is a beautiful component library with many fun features. Using a componenet library helps me keep a consistent, professional design. Although unfortunately it's not very easy to override styles in Evergreen which prevented me from using some components, for the most part it was very handy to have.

### Feature Overview
#### Search
Initially, I decided to go with a live search. I typically prefer live search since it is very friendly to people who are spelling-challenged and frankly I think it's quite satisfying to watch the results being filtered with every keystroke. However, I soon realized that the OMDB searches by exact work match only (ie. "gree" only returns movies containing exactly "gree" not those containting "green" or "greek"). This realization essentailly meant it was pretty pointless to have a live search since both my two reasons for prefering it were moot, not to mention the live search resulted in way more api calls. In the end, I decided to switch to a traditional search which is triggered by either hitting the return key on the keyboard or the button with the search icon. 
#### Success Banner
One of the requirements was to add a success banner to notify the user when they have nominated 5 films. I thought a banner might go unnoticed so instead, I took a little creative freedom and opted for [confetti](https://daniel-lundin.github.io/react-dom-confetti/) (huge thank you to daniel-lundin for creating such a simple and beautiful React component) and triggering the pop-up of the Film list which includes a tag to let you know how many movies (in this case 5/5) have been nominated. 
#### Save
After showing my application to my friends and family, the feedback I kept recieving was that it would be really great if the list didn't reset everytime the page refreshed. Losing progress due to a dropped connection, lack of activity, or any other reason is frustrating and even though it's just a simple movie nomination application, I decided to add a save feature to my application. I opted for a save to local storage triggered by button click on the nomination list popup. Local storage seemed like the right call, since a database seemed uncessarily complex for such a small set of data. Additionally, I went with the button click triggered save over an automatic save to give the user more control.
#### Mobile Compatible
In today's world, it makes sense to assume that at least some people may want to access this app from their smartphone or other mobile device. Throughout the design process, it was important to me to create an app that works just as well on any size screen. This heavily influenced my design decisions, even leading me to completely scrap the use of a side sheet in favour of the more flexible pop-up. 
