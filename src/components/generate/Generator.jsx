import {useState} from "react"
import "./style.css"
const Generator = () => {

    const number = () =>{
        return Math.floor(Math.random() * 100 ) + 1
    }

    const [count, setCount] = useState(number())

    return(
        <>
            <div className="numberCount">
                {count}
            </div>

            <button onClick={() => setCount(number())} className="buttonGenerator">
                Generator Number
            </button>
        </>
    );
}
export default Generator