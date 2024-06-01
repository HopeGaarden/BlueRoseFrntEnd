import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppContainer from "./layouts/AppContainer";
import LoginProvider from "./store/LoginProvider";
import Home from "./page/Home";
import Note from "./page/Note";
import Writing from "./page/Writing";
import SettingPage from "./page/SettingPage";
import SignupPage from "./page/SignupPage";
import LoginPage from "./page/LoginPage";
import FindPasswordPage from "./page/FindPasswordPage";
import MyPage from "./page/MyPage";
import DetailWikiPage from "./page/DetailWikiPage";
import Footer from "./layouts/Footer";
import ChatPage from "./page/ChatPage";

// Router를 통해 URL마다 페이지 제작
const router = createBrowserRouter([
  { path: "/home", element: <Home /> },
  {
    path: "/note",
    element: <Note />,
  },
  {
    path: "/writing",
    element: <Writing />,
  },
  {
    path: "/setting",
    element: <SettingPage />,
  },
  {
    path: "/mypage",
    element: <MyPage />,
  },
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/findPassword",
    element: <FindPasswordPage />,
  },
  {
    path: "/detail/:diseaseName/:diseaseCode/:diseaseContent",
    element: <DetailWikiPage />,
  },
  {
    path: "/chat",
    element: <ChatPage />,
  },
]);

function App() {
  return (
    <LoginProvider>
      <AppContainer>
        <RouterProvider router={router}>
        </RouterProvider>
      </AppContainer>
    </LoginProvider>
  );
}

export default App;
