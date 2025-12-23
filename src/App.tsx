import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import WhoWeAre from './pages/WhoWeAre';
import People from './pages/Members';
import PersonProfile from './pages/MemberDetail';
import Projects from './pages/Projects';
import Cluster from './pages/Cluster';
import Students from './pages/Students';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="who-we-are" element={<WhoWeAre />} />
          <Route path="people" element={<People />} />
          <Route path="people/:id" element={<PersonProfile />} />
          <Route path="projects" element={<Projects />} />
          <Route path="cluster" element={<Cluster />} />
          <Route path="students" element={<Students />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
