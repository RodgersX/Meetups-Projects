import { createContext, useState } from "react"

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {}
})

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([])

  const addFavorite = favoriteMeetup => {
    setUserFavorites(prevUserFavorites => {
      return prevUserFavorites.concat(favoriteMeetup)
    })
  }

  const removeFavorite = meetupId => {
    setUserFavorites(prevUserFavorites => {
      return prevUserFavorites.filter(meetup => meetup.id !== meetupId)
    })
  }

  const itemIsFavorite = meetupId => {
    return userFavorites.some(meetup => meetup.id === meetupId)
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
    itemIsFavorite: itemIsFavorite
  }

  return <FavoritesContext.Provider value={context}>
    {props.children}
  </FavoritesContext.Provider>
}

export default FavoritesContext