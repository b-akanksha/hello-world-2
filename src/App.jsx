import { useDispatch } from "react-redux";
import Layout from "./components/layout/Layout";
import { useEffect } from "react";
import { setTheme } from "./redux/themeSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const theme = isDarkMode ? "dark" : "light";
    dispatch(setTheme(theme));
  }, []);

  return <Layout />;
}

export default App;
