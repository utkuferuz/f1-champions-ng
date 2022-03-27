# F1ChampionsNg

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.1. </br>

Main goal of the project is to provide a single-page application that shows Formula 1 winners list starting from 2005 to today
with detailed race list for selected year.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

#Back-end
[Ergast Developer API](http://ergast.com/mrd/) is used to retrieve Formula 1 data in various formats like XML, JSON and JSONP. `JSON` format is used in the project for data exchange.

## UI Library
[Angular Material UI](https://material.angular.io/) component library is used for user interface creation and styling with custom enhancements.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io). </br>

On Service side, http client mocking and response mapping functionalities are covered
on `StandingService` and `RaceService` services which are responsible for retrieving data from [Ergast Developer API](http://ergast.com/mrd/) </br>

On Component side, main rendering functions are covered for `StandingTableComponent` and `StandingListComponent`


## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
