import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { Layout } from './layout'
import { Form } from './components/Form'

const router = createBrowserRouter([{
  path: "/",
  Component: Layout,
  children: [
    {
      path: "/",
      children: [
        {
          path: "form-no-control",
          Component: Form
        },
        {
          path: "form-rhf"
        }
      ]
    },
    
  ]
}])

function App() {

  return (<RouterProvider router={router}/>)
}

export default App
