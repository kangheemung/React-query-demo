
import './App.css';
import {Routes,Route,Link} from "react-router-dom";
import HomePage from "./HomePage";
import ReactQueryPage from "./ReactQueryPage";

function App() {
  return (
    <div className="App">
      <nav  style={{ backgroundColor: "beige", padding: "20px"}}>
        <Link className="no-underline"to= "/" style={{marginRight:"10px"}}>
        homepage
        </Link>
        <Link className="no-underline"to= "/react-query" >
        react-query
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={ <HomePage />}/>
        <Route path="/react-query" element={ <ReactQueryPage />}/>
      </Routes>

    </div>
  );
}

export default App;
