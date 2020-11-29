# Cooked
A student project that makes it easier to prepare and cook meals

## Overview

_**Project Title** Cooked is an application that is desgined to help everday "chefs" prepare and cook their meals. Cooked will allow users to create, read, update and delete recipes as well as view a list of suggested meals with their recipes. The app will provide users with an easy to read list of ingredients and a helpful feature that will store an array of ingredients from the selected meal and convert it to a shopping list for easy organization and meal prep._

_***Goals*** My main goal is to have a functioning application that allows users to view, update, create, and delete recipes as well as easily be able to convert ingredients lists into a shopping list._ <br>

_***Challenges*** I think I will face a number of challeneges. I am still struglling to fully conceptualize how all of the Rails components tie into one another so I think that will be an exciting challenge to tackle. Another challenge I expect to face will be the logic of the front-end. I want to stress an easy transition from viewing a recipe to actaully cooking it. I think my biggest challenge will be staying organized and efficient. The file structure gets big fast and it becomes difficult to stay on task with so many moving pieces. This is something that I really want to stay focused on throughout the entirety of this project. _


### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Front-end JavaScript libr. to build out UI components_ |
|   React Router   | _To handle routes in the app, using dynamic routing_ |
| React Router Dom | _Holds the router components for the app._ |
|     Rails        | _MVC framework that provides a foundation for the database._ |
|     Ruby         | Objected oriented programming language for back-end functionality|



## MVP

-Have a RESTful JSON API. 
<br>
-Build a Ruby on Rails server, exposing RESTful JSON endpoints.
<br>
-Build a database with at least 3 tables:
<br>
--Meals have many ingredients, ingredients belong to many meals (join table)
<br>
-Utilize Rails to define models for interacting with the database.
<br>
-Implement working generic controller actions for Full CRUD (index, show, create, update, delete) between your non-User tables
<br>
 -- Users can create, update, and delete their own meals/recipes as well as read others 
 <br>
 -Have a working, interactive React app, built using npx create-react-app that has at least 8 rendered components and utilizes funtional/class components effectively
 <br>
 -Demonstrate full CRUD on the front-end: The non-user table (meals and ingredients) will provide CRUD for the front-end.
 <br>
 -Have a fully functioning, deployed, full stack application 
 
<br>

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD

- Desktop Landing

https://www.figma.com/file/L0Ot2EDK5poEvJprAzjlv2/Cooked---Landing-Page?node-id=0%3A1

- Desktop Sign Up

https://www.figma.com/file/H3lbZQYE1YJ3xDlSKeV4BZ/Signup-Desktop?node-id=0%3A1

- Desktop Login

https://www.figma.com/file/EPabwahHNlCxmaPRGi3VUL/Desktop-Login?node-id=0%3A1

- Desktop HomePage

https://www.figma.com/file/wnstPvnFZpZBY6uPYuyr7c/Homepage-Desktop?node-id=0%3A1

- Recipe Create Desktop
https://www.figma.com/file/QVUY0wbNMGVSDhg9ort7nD/Untitled?node-id=0%3A1

- Recipe Edit
https://www.figma.com/file/PJe98gUmZ0nsqHYUYYBSCF/Recipe-Edit-Desktop?node-id=0%3A1

- My Recipes
https://www.figma.com/file/QZ76at592ugSi1LYPmlv1A/My-Recipes?node-id=0%3A1

- Ingredients List
https://www.figma.com/file/FVaWvIYcb0ZVPXQb6vvfgK/Ingredient-List-Desktop?node-id=0%3A1

- See More Details



#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. 

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ components/
      |__ Header.jsx
|__ containers/
      |__MainContainer.jsx
|__ layouts/
      |__Layout.jsx
|__ screens/
      |__RecipeCreate.jsx
      |__RecipeEdit.jsx
      |__Recipes.jsx
      |__Login.jsx
      |__Register.jsx
      |__MyRecipes.jsx
      |__IngredientList
      |__MoreDetails.jsx
|__ services/
      |__apiConfig.js
      |__auth.js
      |__recipes.js
      |__ingredients.js
|__App.js
|__App.css
|__index.js
|__index.css
|__reportWebVitals.js

```

#### Component Tree

> Use this section to include a link to your component tree.

[Component tree](url)

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.

<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.

