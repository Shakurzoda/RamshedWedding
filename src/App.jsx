import './App.css'
import Header from './component/Header/Header.jsx'
import Footer from './component/Footer/Footer.jsx'
import Section from './component/Sections/Section.jsx'
import MusicPlayer from './component/useAudio/useAudio.jsx'


function App() {

  return (
    <div className="App">
      <Header />
      <Section />
      <Footer />
      <MusicPlayer />
    </div>
  );
}

export default App
