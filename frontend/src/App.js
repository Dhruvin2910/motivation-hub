import Navbar from "./Components/Navbar";
import "./App.css";
import seminar1 from "../src/asset/main3e.png";
import seminar2 from "../src/asset/seminar1a.jpeg";
// import logo from "../src/asset/logo.jpg"

function App() {
  return (
    <>
      <div>
        <Navbar />

        <div className="relative w-full">
          {/* Background image */}
          <img
            src={seminar1}
            alt="seminar1"
            className="w-full h-auto object-cover"
          /> 
        </div>
        <div className="relative flex justify-center items-center px-4 py-8 bg-gray-900">
          <img
            src={seminar2}
            alt="seminar2"
            className="max-w-full h-auto opacity-20 rounded-lg shadow-md"
          />
        </div>
      </div>
    </>
  );
}

export default App;
