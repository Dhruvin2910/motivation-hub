import Navbar from "./Components/Navbar";
import "./App.css";
import seminar1 from "../src/asset/main3e.png";
// import seminar2 from "../src/asset/seminar1a.jpeg";
import logo from "../src/asset/logo5.png";

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

        <div className="
  relative flex justify-center items-center gap-20 p-4 h-auto bg-gray-200
  flex-col md:flex-row md:h-96
">

  {/* Logo block */}
  <div className="px-5 bg-gray-900 rounded-lg shadow-md">
    <img className="h-56 md:h-72 mx-auto" src={logo} alt="logo" />
  </div>

  {/* Text Section */}
  <div className="w-full md:w-1/2 mt-6 md:mt-0 px-2">

    <p
      className="
        my-5 text-3xl md:text-4xl font-bold font-bebas tracking-wider
        text-[#0A1A2F] border-b-2 border-[#D4AF37]
        text-center md:text-left
      "
    >
      About Coach Dev Kumar
    </p>

    <div className="bg-white rounded-md shadow-lg p-3 md:p-2 border-l-4 border-[#D4AF37]">

      <p className="mx-2 my-2 text-black text-sm md:text-md font-montserrat leading-relaxed">
        Coach Dev Kumar is a visionary Life & Business Coach dedicated
        to empowering individuals, leaders, and entrepreneurs to step
        into their highest potential.
      </p>

      <p className="mx-2 my-2 text-black text-sm md:text-md font-montserrat leading-relaxed">
        He doesn’t just guide— he illuminates the path.
      </p>

      <p className="mx-2 my-2 text-black text-sm md:text-md font-montserrat leading-relaxed">
        He doesn’t just give advice— he awakens human consciousness.
      </p>

      <p className="mx-2 my-2 text-black text-sm md:text-md font-montserrat leading-relaxed">
        His work is not designed to simply improve lives, but to re-engineer
        the entire architecture of one’s existence.
      </p>

    </div>

  </div>

</div>

      </div>
    </>
  );
}

export default App;
