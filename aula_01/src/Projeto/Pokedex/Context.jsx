import React, { createContext, useState } from 'react'

const FavoritesContext = createContext()

function Context({ favorite }) {

    const [favorites, setFavorites] = useState([])

    return (
        <FavoritesContext.Provider value={{ favorites, setFavorites }}>
            <div>
                {favorite.id}
                {favorite.name}
                {favorite.types}
                {favorite.generations}
                {[favorite.imagePokemonURL]}
            </div>
        </FavoritesContext.Provider>
    )
}

export default Context