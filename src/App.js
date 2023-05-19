import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CountriesPage from "./pages/CountriesPage";
import CountryInfoPage from "./pages/CountryInfoPage";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<CountriesPage />} />
          <Route path="/country/:name" element={<CountryInfoPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
