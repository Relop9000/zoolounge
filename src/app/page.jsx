import Menu from "@/components/Menu";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden ">
      <Header />
      <Menu />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
