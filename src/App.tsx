import About from "./components/About";
import Footer from "./components/Footer";
import MobileNavbar from "./components/MobileNavbar";
import Navbar from "./components/Navbar";
// import Post from "./components/Post";
// import Work from "./components/Work";

function App() {
  return (
    <>
      <Navbar />
      <MobileNavbar />
      <About />
      {/* <Work /> */}
      {/* <Post /> */}
      <Footer />
    </>
  );
}

export default App;
