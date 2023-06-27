import './style.scss';
import { Outlet, Link } from "react-router-dom";

function Main() {
    return (
        <>
            <main>
                <section class="intro">
                    <div class="intro__content">
                        <h1 class="intro__title">De<span class="intro__emphasis"> bons </span>Poké Bowls</h1>
                        <p class="intro__desc">Chez Poké Bon nous vous préparons des Poké Bowls délicieux.</p>
                        <article class="tags">
                            <p class="tags__title">Retrouvez-nous à</p>
                            <ul class="tags__list">
                                <li class="tags__item">Paris</li>
                                <li class="tags__item">Lyon</li>
                                <li class="tags__item">Marseille</li>
                            </ul>
                        </article>
                        <Link to="/Food" class="btn" href="">Découvrir les Poké Bowls</Link>
                    </div>
                </section>
            </main>
            <Outlet />
        </>
    );
}

export default Main;
