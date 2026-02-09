import { Link } from "react-router";

const HomePage = () => {
  return (
    <div>
      <h1>Ini Home Page!</h1>
      <p>Setujui syarat di bawah ini!</p>
      <Link to="/terms">Ke halaman terms</Link>
      {/* HANYA GANTI DI BROWSER, GAK REQ SERVER LAGI */}
    </div>
  );
};

export default HomePage;
