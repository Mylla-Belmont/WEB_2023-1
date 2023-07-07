import cores from "./MyColorContext";
import { useContext } from "react";
import FunctionD from "./FunctionD";

const FunctionC = () => {
    const {bkgC} = useContext(cores)

    return (
        <div>
            <h1 style={{backgroundColor:bkgC}}>
                Contexto C
            </h1>
            <FunctionD/>
        </div>    
    )
}

export default FunctionC