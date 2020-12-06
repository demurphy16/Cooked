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

##### Desktop


- Landing

https://www.figma.com/file/L0Ot2EDK5poEvJprAzjlv2/Cooked---Landing-Page?node-id=0%3A1

- Sign Up

https://www.figma.com/file/H3lbZQYE1YJ3xDlSKeV4BZ/Signup-Desktop?node-id=0%3A1

- Login

https://www.figma.com/file/EPabwahHNlCxmaPRGi3VUL/Desktop-Login?node-id=0%3A1

- HomePage

https://www.figma.com/file/wnstPvnFZpZBY6uPYuyr7c/Homepage-Desktop?node-id=0%3A1

- Recipe Create

https://www.figma.com/file/QVUY0wbNMGVSDhg9ort7nD/Untitled?node-id=0%3A1

- Recipe Edit

https://www.figma.com/file/PJe98gUmZ0nsqHYUYYBSCF/Recipe-Edit-Desktop?node-id=0%3A1

- My Recipes

https://www.figma.com/file/QZ76at592ugSi1LYPmlv1A/My-Recipes?node-id=0%3A1

- Ingredients List

https://www.figma.com/file/FVaWvIYcb0ZVPXQb6vvfgK/Ingredient-List-Desktop?node-id=0%3A1

- See More Details

https://www.figma.com/file/mvKCfG4mhov3VunO4ZFQbQ/See-More-Details-Desktop?node-id=0%3A1


##### Mobile

- Landing Page

https://www.figma.com/file/EDDHhmgAp3BDnh8i4ZDMVF/Untitled?node-id=0%3A1

- Sign Up

https://www.figma.com/file/NMLhUYObeNfZJuChXnkcx7/Sign-Up-Mobile?node-id=0%3A1

- Login

https://www.figma.com/file/cdL1OKCgB0Vn8us5Fo4vxz/Login-Mobile?node-id=0%3A1

- Homepage

https://www.figma.com/file/yrwwJMfb3u37AVEKXQvt5q/Mobile-Homepage?node-id=0%3A1

- Recipe Create

https://www.figma.com/file/1iNPi7qk9eTXtonGFHn9m9/Untitled?node-id=0%3A1

- Recipe Edit

https://www.figma.com/file/HaWd4EnCsKgXyeJaYZEqTI/Recipe-Edit-Mobile?node-id=0%3A1

- My Recipes

https://www.figma.com/file/PHUW5ukjlSvZuUVGO5Y2ZG/My-Recipes-Mobile?node-id=0%3A1

- Ingredienst List

https://www.figma.com/file/8J0qAvp1fKBgtxs90CjDXU/Ingredient-List-Mobile?node-id=0%3A1

- See More Details

https://www.figma.com/file/exuDZatLZhuJwjgNmZoVUN/See-More-Details-Mobile?node-id=0%3A1






#### Component Tree

https://app.diagrams.net/#G1pGXRmmefg2CcqLPcfMfu97hfSGCnUL77


#### Component Hierarchy


``` structure

src
|__ components/
      |__Header.jsx
      |__Header.css
      |__Ingredients.css
      |__Ingredients.jsx
      |__Recipes.css
      |__Recipes.jsx
|__ containers/
      |__MainContainer.jsx
|__ layouts/
      |__Layout.jsx
|__ screens/
      |__AddIngredients.css
      |__AddIngredients.jsx
      |__Home.css
      |__Home.jsx
      |__RecipeCreate.css
      |__RecipeCreate.jsx
      |__RecipeEdit.css
      |__RecipeEdit.jsx
      |__Login.css
      |__Login.jsx
      |__Register.jsx
      |__MyRecipes.jsx
      |__MoreDetails.css
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


#### Time Estimates



| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Boiler Plate Ruby/Rails    |    H     |     3 hrs      |     3     |    TBD   |
| Models/Controllers/Routes |    H     |     3 hrs      |     4     |     TBD     |
| Backend CRUD             |       H   |     4 hrs      |     4   |     TBD     |
| Seed Data             |      M    |     4 hrs      |     2    |     TBD     |
| Backend Testing            |    M      |     1 hrs      |     1     |     TBD     |
| Font End CRUD             |      M    |     6 hrs      |     10    |     TBD     |
| Login/Register             |      M    |     4 hrs      |     3     |     TBD     |
| Stlying Basics             |      M    |     2 hrs      |     2     |     TBD     |
| User Authentification             |     L     |     4 hrs      |     3     |     TBD     |
| Stlying Advanced            |     L     |     5 hrs      |     5     |     TBD     |
| Debug/Deploy             |      L    |     4 hrs      |     2     |     TBD     |
| Total            |      L    |     40 hrs      |     39 hrs     |     TBD     |




<br>

### Server (Back End)

#### ERD Model

https://app.diagrams.net/#G1SUc_fL4R2j4izOdeAGJvluWYvDj-Idm1


<br>

***

## Post-MVP

- Advanved styling features that include a star rating for certain meals
- Popularity feature that will track how many times a user had cooked a meal 
- Search function that will allow users to search for a specific type of meal (ex. Chicken dish, dish that takes less than an hour, etc)
***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.

