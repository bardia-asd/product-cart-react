import data from './data.json'
import Shop from "./components/Shop";
import "./index.css";

function App() {
    return (
        <>
            <Shop items = {data} />
        </>
    );
}

export default App;
