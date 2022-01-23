import './App.css';
import AnnouncementBar from './components/AnnouncementBar';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='App'>
      <AnnouncementBar />
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
