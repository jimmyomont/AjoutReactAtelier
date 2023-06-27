
import { Outlet , Link } from 'react-router-dom';
import './style.scss';

function Header() {
    return (
        <>
            <header class="menu">
                <nav class="menu__container">
                    <Link to="/" class="menu__logo">
                        Poké Bon
                    </Link>
                    <ul class="menu__list">
                        <li><Link to="/" class="menu__item menu__item--current" >Accueil</Link></li>
                        <li><Link to="/Food" class="menu__item" >Nos Poké Bowls</Link></li>
                        <li><a class="menu__item" href="">Réservation</a></li>
                    </ul>
                </nav>
            </header>
            <Outlet />
        </>

    );
}

export default Header;
