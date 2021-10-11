import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Todos from './components/todos'; //when importing "rafc"
// import todo from './components/todo';
import Footer from './components/footer'; //when importing "rafc"

function App() {

  return (
    <>
      <Header title="Jattland" />
      <Todos />
      <Footer />
    </>
  );
}

export default App;
