import cores from "./MyColorContext";
import { useContext } from "react";

const FunctionD = () => {
    const {bkgD} = useContext(cores)

    return (
        <div>
            <h1 style={{backgroundColor:bkgD}}>
                Contexto D
            </h1>
        </div>     
    )
}

export default FunctionD