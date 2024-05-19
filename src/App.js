import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppContainer from "./layouts/AppContainer";
import LoginProvider from "./store/LoginProvider";
import Home from "./page/Home";
import Note from "./page/Note";
import Writing from "./page/Writing";
import MyPage from "./page/MyPage";

// Router를 통해 URL마다 페이지 제작
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/note",
    element: <Note />,
  },
  {
    path: "/writing",
    element: <Writing />,
  },
  {
    path: "/mypage",
    element: <MyPage />,
  },
]);

function App() {
  return (
    <LoginProvider>
      <AppContainer>
        <RouterProvider router={router} />
      </AppContainer>
    </LoginProvider>
  );
}

export default App;
