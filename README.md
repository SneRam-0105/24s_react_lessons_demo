# React Demo project

In this project we practice all stuff learned in lessons.

# Installing react router

```
npm install react-router-dom
```

- https://reactrouter.com/en/main

## Basic method to write approutes

```
import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import About from "../pages/About";
import List from "../pages/List";
import ErrorPage from "../pages/error";


export const router = createBrowserRouter([
    { path: '/', element: <Root />, errorElement: <ErrorPage /> },
    { path: '/list', element: <List /> },
    { path: '/about', element: <About /> },
]);

```
