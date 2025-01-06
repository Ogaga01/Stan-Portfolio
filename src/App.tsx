import About from "./components/About";
import MobileNavbar from "./components/MobileNavbar";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import Work from "./components/Work";

function App() {
  return (
    <>
      <Navbar />
      <MobileNavbar />
      <About />
      <Work />
      <Post />
    </>
  );
}

export default App;
