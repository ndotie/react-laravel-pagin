import { ReactLaravelPagin } from "./lib";
import { useState, useEffect } from "react";
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [trips, setTrips] = useState([]);

  useEffect(() => {}, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ReactLaravelPagin
        baseLink="http://localhost:8000/api/testroute"
        setIsLoading={setIsLoading}
        dataPicker={(data) => data.trips}
        setDataList={setTrips}
        customDots={() => <h3 className="d-inline-block">...</h3>}
        customPrev={(props) => <span {...props}>prev</span>}
        customNext={(props) => <span {...props}>next</span>}
        linkStyle={(active, prev, next) =>
          `btn ${active ? "btn-success" : "btn-default"} mx-1`
        }
      />
    </div>
  );
}

export default App;

/**
 * https://github.com/developit/microbundle#usage
 * https://www.fabiofranchino.com/blog/create-react-reusable-components-library-with-microbundle/
 * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 */
