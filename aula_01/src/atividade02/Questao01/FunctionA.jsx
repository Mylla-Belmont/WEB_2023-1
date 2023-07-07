import colors from "./MyColorContext"
import FunctionB from "./FunctionB"
import FunctionC from "./FunctionC"

const FunctionA = () => {

    const cores = {bkgA:"green", bkgB:"white", bkgC:"yellow", bkgD:"blue"}

    return (
        <colors.Provider value={cores}>
            <h1 style={{backgroundColor:cores.bkgA}}>
                Contexto A
            </h1>
            <FunctionB/>
            <FunctionC/>
        </colors.Provider>
    )
}

export default FunctionA