import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="overflow-x-hidden bg-color-primary text-color-white tracking-wider">
      <Navbar />
      <Home/>
    </div>
  );
}

export default App;
