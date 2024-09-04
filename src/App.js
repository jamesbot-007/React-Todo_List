import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComponets/Header";
import { Todos } from "./MyComponets/Todos";
import { Footer } from "./MyComponets/Footer";

function App() {
    let todos = [
        {
            sno: 1,
            title: "Go to the market",
            desc: "You need to go to the market to get this job done1",
        },
        {
            sno: 2,
            title: "Go to the mall",
            desc: "You need to go to the market to get this job done2",
        },
        {
            sno: 3,
            title: "Go to the parking",
            desc: "You need to go to the market to get this job done3",
        },
    ];

    return (
        // Whenever you return something it shold be wrapped inside something
        // if there is nothing to wrap then put empty tags like,
        // <>
        // Code
        // </>

        <>
            {/* Comment in JSX */}

            <Header />
            {/* <Header title="Todo's List"/> */}
            {/* <Header title={56}/> */}
            {/* <Header title="Todo's List" tab1="Home" tab2="About"/> */}
            {/* <Header title="Todo's List" search={true} /> */}
            {/* <Header title="Todo's List" search={false} /> */}
            <Todos todo={todos} />
            <Footer />
        </>
    );
}

export default App;
