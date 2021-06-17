# Gymshark Frontend Engineering Challenge

## Introduction

The main goal of this exercise is to produce a web application demonstrating understanding in some of the core elements in frontend engineering. We are specifically interested in your ability to write clean, well structured and testable JavaScript, and your ability to create a pleasant an error free user experience.

## Brief

Utilising the current setup built with NextJs/React, TypeScript and Jest build a listing page to display product cards on and a singular product view page that can be accessed via the listing page / or a direct url.

**Product Listing Page Requirments:**

-   Using the provided API fetch the products.
-   Display the two products as per Figma designs:
-   Style product cards appropriately including before & after price.
-   Page Should be responsive

**Product Display Page:**

-   Using the provided api fetch the relevant product based on id.
-   Display the product imagery as per Figma designs.
-   Page Should be responsive

## Design

The designs for both Product Listing and Product Display pages are in figma and be previewed here: [Figma Designs](https://www.figma.com/file/OAcM6rAUWqzZDJh7jrNJbl/%5BPlayground%5D-Dev---Code-Challenge-V2?node-id=0%3A1) Try and replicate the design as best as possible the images are placeholder and we would like you to utilize the relevant media object within the api response to display within the grid.

## Deliverable

Your application must be web based and must run in a browser via a URL you provide as
part of the submission to us.

Please also send us your code via a publicly accessible git repository, GitHub or similar is
fine, and deploy your application to an online environment so that we can access it and test
your application.

We look forward to receiving your application!

## If you have time?

-   Experiment with product tags and product fits to improve the product card
-   Implement tests for any components or services that you have built
-   Improve accessibility of the user journey by enabling keyboard navigation
-   Improve the overall aesthetic of the user journey with smooth transitions or micro-interactions

# Getting Started Guide

## Install

    yarn

## Run the app

    yarn dev

## Run the tests

    yarn test

## Rest API

This application comes with two api endpoints which can be viewed within `/src/pages/api/products`

## Get Products

#### Request

`GET /api/products/`

    curl -i -H 'Accept: application/json' http://127.0.0.1:3000/api/products

#### Response

    HTTP/1.1 200 OK
    Date: Thu, 17 Jun 2021 14:27:03 GMT
    Status: 200 OK
    Connection: keep-alive
    Content-Type: application/json; charset=utf-8
    Content-Length: 36

    [{ product }, { product }]

## Get Product by ID

#### Request

`GET /api/products/[id]`

    curl -i -H 'Accept: application/json' http://127.0.0.1:3000/api/products/1

### Response

    HTTP/1.1 200 OK
    Date: Thu, 17 Jun 2021 14:32:23 GMT
    Status: 200 OK
    Connection: keep-alive
    Content-Type: application/json; charset=utf-8
    Content-Length: 36

    { product }
