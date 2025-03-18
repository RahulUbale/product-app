# ProductApp - Angular Assessment

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.3.

## Overview

This Angular application displays a list of products, allows users to view detailed information about each product, and includes basic navigation between pages. It demonstrates the use of component-based architecture, services, routing, and basic data handling in Angular.

## Objectives

The goal of this assessment is to evaluate your Angular skills, including:

* Component-based architecture
* Services for data management
* Routing for navigation
* Basic API integration (using mock data in this case)
* Use of Observables (RxJS) for asynchronous operations
* Following Angular best practices

## Project Setup (10 points)

1.  **Create a new Angular project:**
    ```bash
    ng new product-app
    cd product-app
    ```

2.  **Set up a clean folder structure:**
    The application structure generally follows the Angular CLI defaults, with key components organized within the `src/app` directory. You will find the following structure (or similar):
    ```
    src/
    ├── app/
    │   ├── components/
    │   │   ├── product-card/
    │   │   │   └── product-card.component.*
    │   │   ├── product-detail/
    │   │   │   └── product-detail.component.*
    │   │   └── product-list/
    │   │       └── product-list.component.*
    │   ├── services/
    │   │   └── product.service.*
    │   ├── app-routing.module.ts
    │   └── app.component.*
    ├── assets/
    ├── environments/
    └── ...
    ```

3.  **Initialize a Git repository and make an initial commit:**
    ```bash
    git init
    git add .
    git commit -m "Initial commit - Project setup"
    ```

## Component & Data Binding (30 points)

* **`ProductCardComponent`:** Located in `src/app/components/product-card/`.
    * Displays product details (name, price, description).
    * Accepts a `product` object via the `@Input()` decorator.
    * Includes a "View Details" button that emits a `viewDetails` event via the `@Output()` decorator when clicked.

* **Usage in `ProductListComponent`:** The `ProductCardComponent` is used within the `ProductListComponent` to display individual product information.

## Service & Data Handling (30 points)

* **`ProductService`:** Located in `src/app/services/`.
    * Provides product data. In this assessment, the data is either hardcoded or fetched from a mock JSON file (`src/assets/data.json`).
    * Includes a method (e.g., `getProducts()`) that fetches the product data.
    * Utilizes `Observable` from RxJS to handle the asynchronous nature of data fetching (even with mock data for consistency and demonstrating understanding).

* **`ProductListComponent`:** Located in `src/app/components/product-list/`.
    * Injects the `ProductService`.
    * Calls the `getProducts()` method from the service to retrieve the list of products.
    * Displays the products using the `ProductCardComponent` and iterates through the product list using `*ngFor`.

## Routing & Navigation (30 points)

* **`AppRoutingModule`:** Configured in `src/app/app-routing.module.ts`.
    * Defines the following routes:
        * `/products`: Maps to the `ProductListComponent`.
        * `/products/:id`: Maps to the `ProductDetailComponent`, where `:id` is a route parameter to identify a specific product.

* **`ProductListComponent`:**
    * When the "View Details" button in a `ProductCardComponent` is clicked, the emitted event is handled.
    * The `ProductListComponent` uses the `Router` service to navigate to the `/products/:id` route, passing the `id` of the selected product.

* **`ProductDetailComponent`:** Located in `src/app/components/product-detail/`.
    * Injects the `ActivatedRoute` to access the `id` parameter from the URL.
    * Uses the `ProductService` to fetch the details of the product with the given `id`.
    * Displays the detailed information of the selected product.

## Running the Application Locally

Follow these steps to run the Angular application on your local machine:

1.  **Ensure Node.js and npm (or yarn) are installed:**
    You can check if they are installed by running the following commands in your terminal:
    ```bash
    node -v
    npm -v
    # or
    yarn --version
    ```
    If not installed, you can download them from [https://nodejs.org/](https://nodejs.org/).

2.  **Install Angular CLI:**
    If you haven't already, install the Angular CLI globally:
    ```bash
    npm install -g @angular/cli
    # or
    yarn global add @angular/cli
    ```

3.  **Navigate to the project directory:**
    Open your terminal or command prompt and navigate to the root directory of the `product-app` project.

4.  **Install project dependencies:**
    Run the following command to install the necessary npm packages:
    ```bash
    npm install
    # or
    yarn install
    ```

5.  **Start the development server:**
    Use the Angular CLI to build and serve the application:
    ```bash
    ng serve -o
    # or
    yarn start
    ```
    The `-o` flag will automatically open the application in your default web browser.

6.  **Access the application:**
    Once the development server is running, you can access the application in your browser at `http://localhost:4200/`.

## Navigation

* Navigating to `http://localhost:4200/products` will display the list of products.
* Clicking the "View Details" button for a product will navigate you to `http://localhost:4200/products/1` (or the corresponding ID of the product), displaying the detailed information for that specific product.

## Submission

Please share the link to the source code repository (e.g., GitHub) with your assigned technical recruiter.

Thank you for reviewing this assessment!
