import './App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppContainer from "./layouts/AppContainer";
import LoginProvider from './store/LoginProvider';
import Home from './page/Home';
import MyNote from './page/MyNote';
import Writing from './page/Writing';

// Router를 통해 URL마다 페이지 제작
const router = createBrowserRouter([

  { path : '/' , 
    element : <Home/>, 
  },
  {
    path : '/mynote',
    element : <MyNote/>
  },
  {
    path : '/writing',
    element : <Writing/>
  }


]);


function App() {
  return (
    <LoginProvider>
      <AppContainer>
        <RouterProvider router={router}/>
      </AppContainer>
    </LoginProvider>
  );
}

export default App;
