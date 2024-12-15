import React, { useState } from "react";
import { movies } from "../Javascript/data";


const Movies = () => {
    const [movieList, setMovieList] = useState(movies);


    // const filterByCategory = (cat) => {
    //     setMovieList(movies.filter((data) => data.category == cat))
    // }
    function filterByCategory(cat) {
        setMovieList(movies.filter(function (data) {
            return (data.category == cat)
        }))
    }

    return (
        <>
            <div className="landing-page" style={{ textAlign: "center", margin: "20px 0" }}>
                <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "white" }}>
                    🎥 Welcome to MovieMania 🎥
                </h1>
                <p style={{ fontSize: "1.2rem", color: "#555" }}>
                    Explore your favorite genres, discover upcoming movies, and enjoy a curated collection of cinematic gems!
                </p>
            </div>

            <div className="my-3" style={{ width: "1100px", margin: "auto" }}>
                <div className="mx-auto text-center">
                    <button
                        onClick={() => setMovieList(movies)}
                        type="button"
                        className="dd btn btn-outline-danger mx-3 animate__animated"
                    >
                        All
                    </button>
                    <button
                        onClick={() => filterByCategory("Action")}
                        type="button"
                        className="dd btn btn-outline-primary mx-3 animate__animated"
                    >
                        Action
                    </button>
                    <button
                        onClick={() => filterByCategory("Thriller")}
                        type="button"
                        className="dd btn btn-outline-light mx-3 animate__animated"
                    >
                        Thriller
                    </button>
                    <button
                        onClick={() => filterByCategory("Animation")}
                        type="button"
                        className="dd btn btn-outline-info mx-3 animate__animated"
                    >
                        Animation
                    </button>
                    <button
                        onClick={() => filterByCategory("Horror")}
                        type="button"
                        className="dd btn btn-outline-warning mx-3 animate__animated"
                    >
                        Horror
                    </button>
                    <button
                        onClick={() => filterByCategory("Drama")}
                        type="button"
                        className="dd btn btn-outline-info mx-3 animate__animated"
                    >
                        Drama
                    </button>
                    <button
                        onClick={() => filterByCategory("Sci-Fi")}
                        type="button"
                        className="dd btn btn-outline-light mx-3 animate__animated"
                    >
                        Sci - Fi
                    </button>
                    <button
                        onClick={() => filterByCategory("Romantic")}
                        type="button"
                        className="dd btn btn-outline-danger mx-3 animate__animated"
                    >
                        Romantic
                    </button>
                    <button
                        onClick={(a) => filterByCategory("Upcoming")}
                        type="button"
                        className="dd btn btn-outline-light mx-3 animate__animated"
                    >
                        Up-coming
                    </button>
                </div>
            </div>

            <div

                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap",
                    // gap: "2rem",
                    textAlign: "center",
                    width: "1200px",
                    // backgroundColor:'yellow',
                    margin: "auto",
                    marginTop: "1.5rem",
                }}
            >
                {movieList.length > 0 ? (
                    movieList.map((data) => (
                        <div key={data.id} style={{ maxWidth: "280px", textAlign: "center" }}>
                            <div style={{ padding: "10px" }} className="hover_effect">
                                <img
                                    src={data.poster_path}
                                    alt=""
                                    style={{
                                        width: "200px",
                                        height: "280px",
                                        borderRadius: "10px",
                                        border: "1px solid yellow",
                                    }}
                                />
                            </div>
                            <h5>{data.title}</h5>
                            <p>{data.release_date}</p>
                        </div>
                    ))
                ) : (
                    <h3>No results found</h3> // Display message when no movies are found
                )}
            </div>
        </>
    );
};
export default Movies