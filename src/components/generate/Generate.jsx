import {useState} from "react"
import "./style.css"
const Generate = () => {

    const number = () =>{
        return Math.floor(Math.random() * 100 ) + 1
    }

    const [count, setCount] = useState(number())

    return(
        <>
            <div className="numberCount">
                {count}
            </div>

            <button onClick={() => setCount(number())} className="buttonGenerate">
                Generate Number
            </button>
        </>
    );
}
export default Generate