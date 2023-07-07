import {Children, cloneElement} from 'react'

const Hero = ({name, arena}) => {
    return (
        <div>
            <h1>Sou heroi e meu nome é {name}, estou no {arena} </h1>
            <img 
                src="https://t3.ftcdn.net/jpg/05/42/31/16/360_F_542311656_p3ADCsff1ySEmAzMybyTNhMlDsAnAS8S.jpg"
                alt="Baphomet"
                style={{width:"240px"}}
            />
        </div>
    )
}

const Enemy = ({name, arena}) => {
    return (
        <div>
            <h1> Sou inimigo e meu nome é {name}, estou no {arena} </h1>
            <img 
                src="https://64.media.tumblr.com/4450cc47ef0ff1ad9fb7ce0875482ead/tumblr_pjzsfsuUXa1xvhz4zo1_540.jpg"
                alt="Cardinal Copia"
                style={{width:"240px"}}
            />
        </div>
    )
}

const Arena = ({name}) => {
    return (
        <div>
            <h1> Arena: {name} </h1>
            <Hero name="Lord Satan" />
            <Enemy name="Holy Ghost" />
        </div>
    )
}

const ArenaFinal = ({name, children}) => {
    return (
        <div>
            <h1> Arena: {name} </h1>
            {
                Children.map(
                    children,
                    (child) => {
                        return cloneElement(child, {arena:name})
                    }
                )
            }
        </div>
    )
}

const World = (props) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

export {Hero, Enemy, Arena, ArenaFinal ,World}