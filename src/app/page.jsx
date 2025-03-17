import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Menu />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
