import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './css.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./error-page.tsx"
import Root,{loader as rootLoader} from "./routes/route.tsx"
import Index from "./routes/index";
import Contact from "./routes/contact"
import ThreePage, {loader as threeLoader} from "./routes/three.tsx"
import WebGLPage from "./routes/webglPage.tsx"
import OglPage from "./routes/ogl.tsx"
import UITest from "./routes/UITest.tsx"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,// <div>Hello world!</div>,
    errorElement: <ErrorPage />,
    // loader: rootLoader,
    // action: rootAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          // {
          //   path: "contacts/:contactId",
          //   element: <Contact />,
          //   // loader: contactLoader,
          //   // action: contactAction,
          // },
          // {
          //   path: "/contacts/:contactId/edit",
          //   element: <EditContact />,
          //   loader: contactLoader,
          //   action: editAction,
          // },
          // {
          //   path: "/contacts/:contactId/destroy",
          //   action: destroyAction,
          // },
          {
            path: "three/:type",
            element: <ThreePage />,
            loader: threeLoader,
            // action: contactAction,
          },
          // {
          //   path: "three/",
          //   element: <ThreePage />,
          //   // loader: contactLoader,
          //   // action: contactAction,
          // },
          {
            path: "webgl",
            element: <WebGLPage />,
            // loader: contactLoader,
            // action: contactAction,
          },
          {
            path: "webgpu",
            element: <WebGLPage />,
            // loader: contactLoader,
            // action: contactAction,
          },
          {
            path: "shader",
            element: <WebGLPage />,
            // loader: contactLoader,
            // action: contactAction,
          },
          {
            path: "ogl",
            element: <OglPage />,
            // loader: contactLoader,
            // action: contactAction,
          },
          {
            path: "test",
            element: <UITest />,
            // loader: contactLoader,
            // action: contactAction,
          },
        ],
      }
    ]
  },
  //   children: [
  //     { index: true, element: <Index /> },
  //     {
  //       path: "/contacts/:contactId",
  //       element: <Contact />,
  //       loader: contactLoader,
  //       action: contactAction,
  //     },
  //     {
  //       path: "/contacts/:contactId/edit",
  //       element: <EditContact />,
  //       loader: contactLoader,
  //       action: editAction,
  //     },
  //     {
  //       path: "/contacts/:contactId/destroy",
  //       action: destroyAction,
  //       errorElement: <div>Oops! There was an error.</div>,
  //     },
  //   ]
  // },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
