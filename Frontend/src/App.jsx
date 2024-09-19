import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import UpdateVaribale from './component/UpdateVaribale'
// import UseState from './component/UseState'
// import UseStateOne from './component/UseStateOne'
// import HIdeShowAndToggle from './component/HIdeShowAndToggle'
// import Props from './component/Props'
// import Props01 from './component/Props01'
// import ConditionRendering from './component/ConditionRendering'
// import CAardComponent from './component/CAardComponent'
import AddTender from './component/Curd/AddTender'
import DisplayTender from './component/Curd/DisplayTender'
import UpdateTender from './component/Curd/UpdateTender'
import ViewTender from './component/Curd/ViewTender'

function App() {

  const route = createBrowserRouter([ 
    {
      path: '/',
      element: <DisplayTender />
    },
    

    {
      path: '/add',
      element: <AddTender />
    },
    {
      path: '/edit/:id',
      element: <ViewTender/>
    },
    {
      path: '/view/:id',
      element: <UpdateTender />
    },


  ])



  





  // let data = 'Ravi'
  // const [count, setCount] = useState(0)
  // const[title,setTitle]= useState('ram')


  return (
    <>
      {/* <UpdateVaribale/> */}
      {/* <UseState/> */}
      {/* <UseStateOne /> */}
      {/* <HIdeShowAndToggle /> */}
      {/* < Props d={data} c={count} />
      <center>
        <button onClick={() => setCount(count + 1)}> update count </button>
      </center> */}

      {/* < Props01 title={title} /> */}
      {/* < ConditionRendering /> */}

      {/* <CAardComponent /> */}



      {/* 
      <Routes>
        <Route path="/" element={<ViewTender />} />
        <Route path="/AddTender" element={<AddTender />} />
        <Route path="/DisplayTender" element={<DisplayTender />} />
        <Route path="/UpdateTender" element={<UpdateTender />} />
      </Routes> */}


      {/* <div className='App'> */}
      <RouterProvider router={route}></RouterProvider>
      {/* </div> */}






    </>
  )
}

export default App
