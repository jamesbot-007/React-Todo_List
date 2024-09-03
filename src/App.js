import logo from './logo.svg';
import './App.css';
import Header from "./MyComponets/Header"
import {Footer} from "./MyComponets/Footer"
import Todos from "./MyComponets/Todos"

function App() {
  return (
    // Whenever you return something it shold be wrapped inside something 
    // if there is nothing to wrap then put empty tags like,
    // <>
      // Code
    // </>

    <>
    <Header title="Todo's List"/>
    {/* <Header title="Todo's List" tab1="Home" tab2="About"/> */}
    {/* <Header title="Todo's List" search={true} /> */}
    {/* <Header title="Todo's List" search={false} /> */}
    <Todos/>
    <Footer/>
    </>

  );
}

export default App;
