import './styles/App.css';
import AnnouncementBar from './components/AnnouncementBar';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='App'>
      <AnnouncementBar />
      <div className='app-padding'>
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default App;
