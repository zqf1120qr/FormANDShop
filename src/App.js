import './App.css';
import { useRoutes } from "react-router-dom";
import {routes} from "./router/routers";

function App() {
  const elements=useRoutes(routes)
  return (
    <div>
        {elements}
    </div>
  );
}

export default App;
