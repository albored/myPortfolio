import "./index.css";
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

  return <>{isLoading ? <Content loading={isLoading} /> : <LoadingPage />}</>;
}
export default App;
