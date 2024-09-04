// import logo from "./logo.svg";// comment it to resolve warning : It is not in use but still included.
import "./App.css";
import Header from "./MyComponets/Header";
import { Todos } from "./MyComponets/Todos";
import { Footer } from "./MyComponets/Footer";

function App() {
    const onDelete = (todo) => {
        console.log("I am onDelete", todo);
    }

    let todos = [
        {
            sno: 1,
            title: "Go to the Market",
            desc: "You need to go to the market to get this job done1. This is your first task",
        },
        {
            sno: 2,
            title: "Go to the Mall",
            desc: "You need to go to the market to get this job done2. This is your 2nd task",
        },
        {
            sno: 3,
            title: "Go to the Parking",
            desc: "You need to go to the market to get this job done3. This is your 3rd task",
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

            {/* <Header /> */}
            {/* <Header title="Todo's List"/> */}
            {/* <Header title={56}/> */}
            {/* <Header title="Todo's List" tab1="Home" tab2="About"/> */}
            {/* <Header title="Todo's List" search={true} /> */}
            {/* <Header title="Todo's List" search={false} /> */}
            {/* <Todos todo={todos}/> */}
            <Todos todo={todos} onDelete={onDelete}/>
            <Footer />
        </>
    );
}

export default App;
