// import logo from './logo.svg';
import Navbar from './components/Navbar';
import './App.css';
import TextForm from './components/TextForm';

// let name = "Abhishek Singh";
function App() {
  return (
    <>
      <Navbar title="My App" About="About Us" Home="Home down" />
      <div className="container">
        <TextForm heading="Enter the text to analyze" />
      </div>
    </>
  );
}

export default App;
