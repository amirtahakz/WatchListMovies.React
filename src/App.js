import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MovieDetailsPage from "./Pages/MovieDetailsPage";
import CastDetails from "./Pages/CastDetailsPage";
import MoviesPage from "./Pages/MoviesPage";
import CastsPage from "./Pages/CastsPage";
import LoginPage from "./Pages/LoginPage";
import './Assets/Css/Style.css';
import DefaultLayout from "./Layouts/DefaultLayout";
import SignInPage from "./Pages/SignInPage";
import SeriesPage from "./Pages/SeriesPage";
import SerialDetailsPage from "./Pages/SerialDetailsPage";
import SearchResultPage from "./Pages/SearchResultPage";
import MoviesOfCastPage from "./Pages/MoviesOfCastPage";
import CastImagesPage from "./Pages/CastImagesPage";
import ImagePage from "./Pages/ImagePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/MovieDetails/:id" element={<MovieDetailsPage />} />
            <Route path="/SerialDetails/:id" element={<SerialDetailsPage />} />
            <Route path="/CastDetails/:id" element={<CastDetails />} />
            <Route path="/movies/:page" element={<MoviesPage />} />
            <Route path="/casts/:page" element={<CastsPage />} />
            <Route path="/series/:page" element={<SeriesPage />} />
            <Route path="/Search/:query" element={<SearchResultPage />} />
            <Route path="/moviesOfCast/:id" element={<MoviesOfCastPage />} />
            <Route path="/castImages/:id" element={<CastImagesPage />} /> 
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signIn" element={<SignInPage />} />
          <Route path="/image/:image" element={<ImagePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
