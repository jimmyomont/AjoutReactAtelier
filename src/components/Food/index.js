
function Food() {
    return (
        <main>
            <section class="segment">
                <h1 class="segment__title">Nos Poké Bowls</h1>
                <p class="segment__desc">Découvrez ci-dessous une sélection de nos meilleurs poké bowls.</p>
                <div class="cards">
                    <article class="card">
                        <img class="card__img" src={"/assets/img/poke-1.jpg"} alt=""/>
                            <h2 class="card__title">Formule A</h2>
                            <p class="card__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quod!</p>
                    </article>
                    <article class="card">
                        <img class="card__img" src={"/assets/img/poke-2.jpg"} alt=""/>
                            <h2 class="card__title">Formule B</h2>
                            <p class="card__desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, dolores?</p>
                    </article>
                    <article class="card">
                        <img class="card__img" src={"/assets/img/poke-3.jpg"} alt=""/>
                            <h2 class="card__title">Formule C</h2>
                            <p class="card__desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, quod.</p>
                    </article>
                    <article class="card">
                        <img class="card__img" src={"/assets/img/poke-4.jpg"} alt=""/>
                            <h2 class="card__title">Formule D</h2>
                            <p class="card__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, quos.</p>
                    </article>
                    <article class="card">
                        <img class="card__img" src={"/assets/img/poke-5.jpg"} alt=""/>
                            <h2 class="card__title">Formule E</h2>
                            <p class="card__desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, voluptatem.</p>
                    </article>
                    <article class="card">
                        <img class="card__img" src={"/assets/img/poke-6.jpg"} alt=""/>
                            <h2 class="card__title">Formule F</h2>
                            <p class="card__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, nisi.</p>
                    </article>
                </div>
            </section>
            <section class="segment">
                <h2 class="segment__title">Nos restaurants</h2>
                <div class="tags">
                    <p class="tags__title">Retrouvez-nous d'ores et déjà à :</p>
                    <ul class="tags__list">
                        <li class="tags__item">Paris</li>
                        <li class="tags__item">Lyon</li>
                        <li class="tags__item">Marseille</li>
                    </ul>
                </div>
            </section>
            <section class="segment">
                <h2 class="segment__title">Prochainement</h2>
                <div class="tags">
                    <p class="tags__title">Retrouvez-nous bientôt aussi à :</p>
                    <ul class="tags__list">
                        <li class="tags__item">Lille</li>
                        <li class="tags__item">Starsbourg</li>
                        <li class="tags__item">Toulouse</li>
                        <li class="tags__item">Bordeaux</li>
                        <li class="tags__item">Bar-le-Duc</li>
                    </ul>
                </div>
            </section>
        </main>
    )
}

export default Food;
