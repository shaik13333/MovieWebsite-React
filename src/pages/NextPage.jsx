import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import YouTube from 'react-youtube'
import "./NextPage.css"

const NextPage = () => {

    var speficMovie = useLocation()
    // console.log(speficMovie);

    let Mymovie = speficMovie.state.data

    let [trailer, setTrailer] = useState("");

    async function getTrailer(id) {
        fetch(`http://api.themoviedb.org/3/movie/${id}/videos?api_key=c202f0c11aa8b52272804f5b020a8667`)
            .then(res => res.json()).then(x => setTrailer(x.results[0].key))

    }

    return (
        <>
            <div className='single-movie-container'>
                <h1 className='single-movie-container h2'>Get It on Book My Show</h1>
                <img src={`https://image.tmdb.org/t/p/original/${Mymovie.backdrop_path}`} alt="" style={{ width: "450px", height: "300px" }} />
            </div>

            <h2 className='single-movie-container h2'>{Mymovie.title}</h2>
            <p className='single-movie-container p'>{Mymovie.overview}</p>
            <p className='single-movie-container p'>Rating: {Mymovie.vote_average}⭐</p>
            <button onClick={() => getTrailer(Mymovie.id)} className='trailer-btn' style={{ marginLeft: "830px" }}>Click here to Watch Trailer </button>
            <br /><br />

            <div  style={{width: "642px", height: "362px", margin: "auto" }}>
            <div style={{width:"780px"}}>
                {trailer && <YouTube videoId={trailer} />}
            </div>
            </div>

            <br />
            <div>
                {/* Footer */}
                <footer className="footer">
                    <p>© 2024 Movie Database | Developed by YourName</p>
                </footer>
            </div>
        </>


    )
}

export default NextPage;






/////http://api.themoviedb.org/3/movie/157336/videos?api_key=### 