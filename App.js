import "./App.css";
import Footer from "./components/footer";
import NavBar from "./components/navBar";
import Quantity from "./components/quantityPicker";

function App() {
  return (
    <div className="App">
      <h1>Welcome to Party Hackers</h1>
      <NavBar></NavBar>

      <Quantity></Quantity>

      <Footer></Footer>
    </div>
  );
}

export default App;
