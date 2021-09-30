
import './App.css';
import Header from './components/Header/Header';
import Publication from './components/Publication/Publication';

function App() {
  return (
    <div className="App">
      {/* header secrtion  */}
     <Header></Header>
     {/* main section  */}
     <Publication></Publication>
    </div>
  );
}

export default App;
