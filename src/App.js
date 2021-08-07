
import "./index.css";
import GetJobs from "./GetJobs";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="app">
      <a
        
        href="https://url.to-your.repo"
        data-ribbon="Fork me on GitHub"
        title="Fork me on GitHub"
      >
        Fork me on GitHub
      </a>

      <div className="Heading1">
        <h1> Jobs finder✍ </h1>
      </div>
      <GetJobs />
      <Footer />
      
    </div>
  );
}

export default App;
