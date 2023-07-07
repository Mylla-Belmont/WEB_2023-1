import colors from "./MyColorContext"

const FunctionB = () => {
    return (
        <colors.Consumer>
            {
                (cores) => {
                    return (
                        <div>
                            <h1 style={{backgroundColor:cores.bkgB}}>
                                Contexto B
                            </h1>
                        </div>
                    )
                }
            }
        </colors.Consumer>
    )
}

export default FunctionB