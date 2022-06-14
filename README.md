# Demo angular application from scratch #

* I have just created an angular aplication with the help of public API

## Public API ##

* An open API, also called public API, is an application programming interface made publicly available to software developers. 

* Open APIs are published on the internet and shared freely, allowing the owner of a network-accessible service to give a universal access to consumers.

## Outcomes of this angular project developement ##

* To setup a poject using Angular cli.
* To create components.
* To make http calls.
* To implement http intereptions.
* To make services.
* To setup routes from application.
* To pass data with routers in between the components.
* To know about Angular directives like : ng4 and ngif

# SetUp the needs before start coding #

## Use angular cli to generate all the components (npm packges) ##

### What is Angular cli? ###

* The ngular cli is a command-line interfce tool tht you use to initialize , develop , scaffold , and maintain angular applictions directly from command shell. 

## Step by step process for project setup in terminal using angular cli ##

* Step : 1 -->  Create a folder for application and set styles with the below command:
       --> ng new name --style=styletype (Mostly use scss)
### Importance of using scss ###

* It contins fewer codes.
* It contains online informations.
* It provides nesting styles.
* It is compatiate with all versions of css.

```javascript
ng new ng-video-game-db --style=scss
```
* Step : 2 --> After the first step the command line will aask for strict use,
               Type "no".

* Step : 3 --> After step 2 , It will ask for angular routing?
               Type "Yes".

### Angular routing ###   

* It allows users to create a single-paage aapplicaation with multiple views abd allows navigation between them.

* Step : 4  --> Switch to newly created project directory like below:

```javascript 
cd ng-video-game-db
```
* Step : 5 -->  Add packages to our projects as below :

```javascript
ng add @angular/material
```
### Note on angular/material package ###
<p> Angular material paackage used toesign structured elements , css styles and responsive designs. </p>

* Step : 6 --> After the step 5 , It will list out the themes for angular material . I have chosen the second one. Like : deep blue / Amber

* Step : 7 --> It will agai ask for typography styles,
               Type "yes".

* Step : 8 --> It will again ask for animations ,
               Type "yes".

* Step: 9 --> Install the angular-gauge package to get ratings for the games.

```javascript
npm i angular-gauge
```  
## Importing packges in the app.module.TS file ##







# NgVideoGameDb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
