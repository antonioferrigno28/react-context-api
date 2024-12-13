import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultLayout from "./layouts/DefaultLayout";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PostsPage from "./pages/PostsPage";
import ShowPostPage from "./pages/ShowPostPage";
import NotFoundPage from "./pages/NotFoundPage";
import { PostContextProvider } from "./context/PostContext";

function App() {
  return (
    <PostContextProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/about" Component={AboutPage} />
            <Route path="/posts" Component={PostsPage} />
            <Route path="/posts/:id" Component={ShowPostPage} />
            <Route path="*" Component={NotFoundPage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PostContextProvider>
  );
}

export default App;
