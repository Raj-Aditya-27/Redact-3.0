import "./App.css";
import Home from "./components/Home";
import Document from "./components/Document";
import Loading from "./components/Loading";
import { CSSTransition } from "react-transition-group";
import { useState,useEffect } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <>
        <CSSTransition
          in={isLoading}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <Loading />
        </CSSTransition>
        <CSSTransition
          in={!isLoading}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <Home />
        </CSSTransition>
      </>
    </>
  );
}

export default App;
