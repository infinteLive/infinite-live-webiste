
import router from './router';
import { RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './stores';
import { useEffect } from 'react';
function App() {
  
  return (
 
    <Provider store={store}>

    <RouterProvider router={router}/>
  </Provider>
   

  )
}

export default App