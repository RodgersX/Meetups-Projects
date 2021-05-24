import { Link } from "react-router-dom";
import { useContext } from "react";

import cls from "./MainNav.module.css";
import FavoritesContext from "../../store/favorites-context";

function MainNav() {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={cls.header}>
      <div className={cls.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">
              My Favorites
              <span className={cls.badge}>{favoritesCtx.totalFavorites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;
