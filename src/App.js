import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import Results from "./components/Results";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainContainer />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/results",
        element: <Results />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
