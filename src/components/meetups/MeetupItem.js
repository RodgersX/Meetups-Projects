// allows to establish connection btn component and context
import { useContext } from 'react'

import Card from "../ui/Card"
import cls from "./MeetupItem.module.css"
import FavoritesContext from '../../store/favorites-context'

function MeetupItem({ image, title, description, address, id }) {
  const favoritesCtx = useContext(FavoritesContext)
  const itemIsFavorite =  favoritesCtx.itemIsFavorite(id)
  
  const toggleFavoriteStatus = () => {
    if(itemIsFavorite) {
      favoritesCtx.removeFavorite(id)
    } else {
      favoritesCtx.addFavorite({
        id: id,
        title: title,
        description: description,
        image: image,
        address: address
      })
    }
  }

  return (
    <li className={cls.item}>
      <Card>
        <div className={cls.image}>
          <img src={image} alt={title} />
        </div>
        <div className={cls.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={cls.actions}>
          <button onClick={toggleFavoriteStatus}>
          {itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}</button>
        </div>
      </Card>
    </li>
  )
}

export default MeetupItem
