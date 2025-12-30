import comics from "../data/comics.js";

function Main() {



    return (
        <main>

            <div className="jumbotron-container text-center">
                <img className="jumbotron" src="/img/jumbotron.jpg" alt="" />
                <button className="main-button">Current Series</button>
            </div>

            <div className="boxed main-content text-center">
                <div className="comics">

                    {comics.map((comic) => {

                        return (
                            <div className="comic-card">
                                <img src={comic.thumb} alt={comic.title} />
                                <h3>{comic.title}</h3>
                            </div>
                        )
                    })}
                </div>







            </div>
        </main>
    );
}

export default Main;
