import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Sidemail from "./components/sidemail";
import ContentPage from "./components/contentPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="side">
        <Sidebar />
        <Sidemail />
        <Route path="/:details" component={ContentPage} />
      </div>
    </BrowserRouter>
  );
};

export default App;
