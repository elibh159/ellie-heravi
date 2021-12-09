import { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './component/partials/Navbar';
import Footer from './component/partials/Footer';
import Loading from './component/partials/Loading';
import { Container, Sidebar } from './AppStyles';

const Home = lazy(() => import("./component/views/Home"));

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <Sidebar/>
          <Navbar />
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
          </Suspense>
        </Container>
      </Router>
    </div>
  );
}

export default App;
