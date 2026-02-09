import Welcome from "./components/Welcome";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import Counter from "./components/Counter";
import LikeButton from "./components/Like";
import { Routes, Route } from "react-router";
import TermsPage from "./pages/TermsPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductListPage from "./pages/ProductListPage";
import FormPage from "./pages/FormPage";
import RHFPage from "./pages/RHFPage";

type Teacher = {
  name: string;
  job: string;
  year: number;
  id: number;
};

const teachers: Teacher[] = [
  {
    job: "Dosen",
    name: "Pak Dhika",
    year: 1995,
    id: 1,
  },
  {
    job: "Developer",
    name: "Aduf",
    year: 2001,
    id: 2,
  },
  {
    job: "PZN",
    name: "Tech Lead",
    year: 1996,
    id: 3,
  },
];

// Component
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/product-list" element={<ProductListPage />} />

        {/* Dynamic Route */}
        <Route path="/product/:slug" element={<ProductDetailPage />} />

        <Route path="/form" element={<FormPage />} />
        <Route path="/rhf" element={<RHFPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
