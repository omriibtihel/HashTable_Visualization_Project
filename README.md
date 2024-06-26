# Hashtable

# Overview

This project provides a comprehensive visualization of a hash table using Angular for the frontend and Spring Boot for the backend. The project aims to help users understand how a hash table works by allowing them to interact with it through a graphical interface. Users can add, remove, and search for words in the hash table, and see the changes reflected in real-time on the canvas.

# Features

Interactive Hash Table Visualization: Add, remove, and search for words in the hash table.
Real-Time Updates: See the hash table update in real-time as you interact with it.
Smooth Animations: Watch the hash table's cells being animated as they are added or removed.
Color-Coded Rows: Each row of the hash table is color-coded for better visual distinction.


# Technologies Used

Frontend
Angular: For building the dynamic and interactive user interface.
Canvas API: For rendering the hash table visualization.

Backend
Spring Boot: For creating a robust and scalable RESTful API.
Hibernate: For ORM (Object-Relational Mapping).
H2 Database: For easy setup and use of an in-memory database during development.
How It Works

# Frontend (Angular)

Component Structure: The main component, AppComponent, handles the user interactions and canvas drawing.
Canvas Drawing: The drawRect function is responsible for rendering the hash table on an HTML canvas. It uses requestAnimationFrame for smooth animations.
Service Integration: HashTableService communicates with the backend API to perform CRUD operations on the hash table.

# Backend (Spring Boot)

RESTful API: Provides endpoints for adding, removing, and searching words, as well as retrieving the entire hash table.
Hash Table Implementation: Uses a custom hash table implementation, with entities for rows (HashtableRowEntity) and cells (HashtableCellEntity).
Persistence: Data is persisted using JPA repositories (HashtableRowRepository and HashtableCellRepository).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.3.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
