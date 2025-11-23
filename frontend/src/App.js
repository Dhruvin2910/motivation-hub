import Navbar from "./Components/Navbar";
import { useState, useRef } from "react";
import "./App.css";
import seminar1 from "../src/asset/main3e.png";
import img1 from "../src/asset/img1.png";
import img2 from "../src/asset/img2.png";
import img3 from "../src/asset/img3.jpg";
import personal1 from "../src/asset/personal2.jpeg";
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const section1 = useRef(null);
  const introduction = useRef(null);
  const images = useRef(null);
  const social_media = useRef(null);
  const faqRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      "question": "Is Memeify free to use?",
      "answer": "Yes, all core features are free. Premium may come later!"
    },
    {   
      "question": "Do I need to sign up?",
      "answer": "You can browse templates without logging in, but you need an account to save or download memes."
    },
    {
      "question": "Can I download my memes?",
      "answer": "Absolutely! You can download your memes in high quality once you're done editing."
    },
    {
      "question": "Is my data secure?",
      "answer": "Yes, we use Firebase and industry-standard security practices."
    }
];

  return (
    <>
      <div>
        <Navbar />

        <div ref={section1} className="relative w-full">
          {/* Background image */}
          <img
            src={seminar1}
            alt="seminar1"
            className="w-full h-auto object-cover"
          />
        </div>

        <div
          ref={introduction}
          className="relative flex justify-center items-center gap-x-20 p-4 h-auto bg-gray-200 flex-col md:flex-row md:h-96"
        >
          {/* Logo block */}
          <div>
            <img
              className="rounded-lg shadow-md h-96 md:h-72 mx-auto"
              src={personal1}
              alt="logo"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 mt-6 md:mt-0 px-2">
            <p className="my-5 text-3xl md:text-4xl font-bold font-bebas tracking-wider text-[#0A1A2F] border-b-2 border-[#D4AF37] text-center md:text-left">
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
                His work is not designed to simply improve lives, but to
                re-engineer the entire architecture of one’s existence.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full py-12 bg-gradient-to-b from-gray-900 via-gray-800 to-black">
          <h2 className="text-center text-4xl font-bebas tracking-wider text-white mb-10">
            Image Gallery
          </h2>

          <div
            ref={images}
            className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4"
          >
            {/* Image 1 */}
            <div className="rounded-lg overflow-hidden shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer bg-gray-800">
              <div className="h-56 bg-gray-700 flex items-center justify-center text-white text-xl font-montserrat">
                <img src={img1} alt="img1" />
              </div>
            </div>

            {/* Image 2 */}
            <div className="rounded-lg overflow-hidden shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer bg-gray-800">
              <div className="h-56 bg-gray-700 flex items-center justify-center text-white text-xl font-montserrat">
                <img src={img2} alt="img2" />
              </div>
            </div>

            {/* Image 3 */}
            <div className="rounded-lg overflow-hidden shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer bg-gray-800">
              <div className="h-56 bg-gray-700 flex items-center justify-center text-white text-xl font-montserrat">
                <img src={img3} alt="img3" />
              </div>
            </div>

            {/* Image 4 */}
            <div className="rounded-lg overflow-hidden shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer bg-gray-800">
              <div className="h-56 bg-gray-700 flex items-center justify-center text-white text-xl font-montserrat">
                img4
              </div>
            </div>

            {/* Image 5 */}
            <div className="rounded-lg overflow-hidden shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer bg-gray-800">
              <div className="h-56 bg-gray-700 flex items-center justify-center text-white text-xl font-montserrat">
                img5
              </div>
            </div>

            {/* Image 6 */}
            <div className="rounded-lg overflow-hidden shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer bg-gray-800">
              <div className="h-56 bg-gray-700 flex items-center justify-center text-white text-xl font-montserrat">
                img6
              </div>
            </div>
          </div>
        </div>

        <div ref={social_media}
  className="relative bg-cover bg-center bg-no-repeat py-24"
>

  <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>

  <div className="relative z-10 flex flex-col items-center text-center px-4">

    <h1 className="text-5xl font-bold text-black tracking-wide">
      CONNECT WITH DEV
    </h1>

    <p className="mt-4 text-xl font-medium text-gray-700">
      MASTER YOUR MIND. CHANGE YOUR LIFE
    </p>

    <div className="flex items-center gap-6 mt-10">
      
      <a href="#" className="w-24 h-24 bg-[#3b5998] flex items-center justify-center rounded-xl hover:scale-110 transition">
        <i className="fab fa-facebook-f text-white text-5xl"></i>
      </a>

      <a href="#" className="w-24 h-24 bg-[#1DA1F2] flex items-center justify-center rounded-xl hover:scale-110 transition">
        <i className="fab fa-twitter text-white text-5xl"></i>
      </a>

      <a href="#" className="w-24 h-24 bg-[#0077B5] flex items-center justify-center rounded-xl hover:scale-110 transition">
        <i className="fab fa-linkedin-in text-white text-5xl"></i>
      </a>

      <a href="#" className="w-24 h-24 bg-[#262626] flex items-center justify-center rounded-xl hover:scale-110 transition">
        <i className="fab fa-instagram text-white text-5xl"></i>
      </a>

      <a href="#" className="w-24 h-24 bg-[#FF0000] flex items-center justify-center rounded-xl hover:scale-110 transition">
        <i className="fab fa-youtube text-white text-5xl"></i>
      </a>
    </div>
  </div>
</div>

         {/* FAQ */}
      <section ref={faqRef} className="py-16 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl text-cyan-400 font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="max-w-xl mx-auto mt-10">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-slate-700 bg-slate-800 rounded-lg mb-2 overflow-hidden">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center px-5 py-4 text-left text-gray-200 hover:bg-slate-700"
                >
                  <span className="font-bold text-md">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: 'auto' },
                        collapsed: { opacity: 0, height: 0 }
                      }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      className="px-5 overflow-hidden text-gray-300 bg-slate-900"
                    >
                      <div className="py-4">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className="bg-indigo-900 text-white py-6 text-center text-sm">
        <div>
          &copy; {new Date().getFullYear()} Coach Dev Kumar • Built with ❤️ by Dhruvin Patel • 
          <a href="https://github.com/Dhruvin2910/motivation-hub" target="_blank" rel="noreferrer" className="underline ml-1 hover:text-yellow-300">
            GitHub
          </a>
        </div>
      </footer>
      </div>
    </>
  );
}

export default App;
