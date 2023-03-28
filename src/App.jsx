import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from "react";
import LoadingPage from "./components/LoadingPage";
import Content from "./layout/Content";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 3000);
  }, []);

  return <Router>{isLoading ? <Content loading={isLoading} /> : <LoadingPage />}</Router>;
}

export default App;
