import { FC } from 'react';
import './App.css';
import { FaChartLine, FaPaperPlane, FaRobot, FaUniversity, FaUsers } from 'react-icons/fa';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import heroImg from "./assets/hero-img.png";

const App: FC = () => {
  return (
      <>
        <Navbar />

        <section className="hero">
          <div className='hero-text'>
            <h1>Find Scholarships That Match You</h1>
            <p>Scholar simplifies your search for financial aid by providing a comprehensive and accurate catalog of scholarships, personalized scholarship matches, and powerful AI tools to streamline your application process. Join a community of achievers and unlock opportunities tailored just for you.</p>
            <button className="btn">Get Started</button>
          </div>
          <img src={heroImg} alt="students image"/>
        </section>

        <section className='features'>
          <h2>Features</h2>
          <div className='features-container'>
            <div className="card feature">
              <FaMagnifyingGlass size={40} className='feature-icon'/>
              <h3>Personalized Matches</h3>
              <p>Scholar uses AI to match you with the best scholarships.</p>
            </div>
            <div className="card feature">
              <FaUniversity size={40} className='feature-icon'/>
              <h3>Comprehensive Database</h3>
              <p>Browse through hundreds of scholarships with accurate information</p>
            </div>
            <div className="card feature">
              <FaRobot size={40} className='feature-icon'/>
              <h3>Application Assistant</h3>
              <p>Our specialized AI assistant will guide you through your application process</p>
            </div>
            <div className="card feature">
              <FaPaperPlane size={40} className='feature-icon'/>
              <h3>Streamlined Application Process</h3>
              <p>Manage everything in one place for a hassle-free experience.</p>
            </div>
            <div className="card feature">
              <FaChartLine size={40} className='feature-icon'/>
              <h3>Scholarship Insights</h3>
              <p>Gain valuable insights with curated tips and trends on winning scholarships.</p>
            </div>
            <div className="card feature">
              <FaUsers size={40} className='feature-icon'/>
              <h3>Connect with the Community</h3>
              <p>Join a vibrant community of scholarship seekers.</p>
            </div>
          </div>
        </section>

        <Footer />
      </>
  );
}

export default App;
