import comics from "../data/comics.js";

function Main() {



    return (
        <main>
            <div className="boxed main-content text-center">
                <h2>Welcome to the DC Comics Universe</h2>
                <p>Explore your favorite superheroes and villains!</p>

                <div className="comics">

                    {comics.map((comic) => {

                        return (
                            <div className="comic-card">
                                <img src={comic.thumb} alt={comic.title} />
                                <h3>{comic.title}</h3>
                                <p>{comic.description}</p>
                                <p><strong>Price:</strong> {comic.price}</p>
                                <p><strong>Series:</strong> {comic.series}</p>
                                <p><strong>Sale Date:</strong> {comic.sale_date}</p>
                                <p><strong>Type:</strong> {comic.type}</p>
                                <p><strong>Artists:</strong> {comic.artists.join(", ")}</p>
                                <p><strong>Writers:</strong> {comic.writers.join(", ")}</p>
                            </div>
                        )
                    })}
                </div>







            </div>
        </main>
    );
}

export default Main;
