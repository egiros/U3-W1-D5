import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./Components/MyNavbar";
import MyFooter from "./Components/MyFooter";
import { Container } from "react-bootstrap";
import MovieGallery from "./Components/MovieGallery";
import TopBar from "./Components/TopBar";

function App() {
  return (
    <div className="App bg-dark">
      <MyNavbar></MyNavbar>
      <TopBar></TopBar>
      <MovieGallery category="Harry Potter" apiEndpoint="" />
      <MovieGallery category="Lord of the Rings" apiEndpoint="" />
      <MovieGallery category="Batman" apiEndpoint="" />
      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
