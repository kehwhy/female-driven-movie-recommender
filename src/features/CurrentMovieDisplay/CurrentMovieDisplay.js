import { Heading, Paragraph, Badge } from 'evergreen-ui'
import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { selectCurrentMovie, selectRatingInfo, selectExtraInfo, setRecommendations, selectRecommendations } from '../CurrentMovieDisplay/CurrentMovieSlice'
import { getRecommendations, isFilmFemaleDirected, getFemaleScoreBadge, getFemaleScore } from '../helper'
import { selectAllRecommendations, selectFemaleCastScores, selectFemaleCount, selectFemaleCrewScores, selectFemaleDirected } from '../recommendationsSlice'
import { selectFemaleCastAndCrewScores } from '../recommendationsSlice'
import './CurrentMovieDisplay.css'

const CurrentMovieDisplay = () => {
    // selecting data from the store
    const currentMovie = useSelector(selectCurrentMovie)
    const ratingInfo = useSelector(selectRatingInfo)
    const extraInfo = useSelector(selectExtraInfo)
    const female_directed_movies = useSelector(selectFemaleDirected)
    const femaleCastAndCrewScores = useSelector(selectFemaleCastAndCrewScores)
    const femaleCastScores = useSelector(selectFemaleCastScores)
    const femaleCrewScores = useSelector(selectFemaleCrewScores)
    const femaleCount = useSelector(selectFemaleCount)
 
    const current_recommendations = useSelector(selectRecommendations)

    // dispatch to the store
    const dispatch = useDispatch()


    return (
        <div className="currentMovieDisplay">
            <div class="grid_layout">
                <div className="movie_title">
                    <Heading size={900}>{currentMovie.Title}</Heading>
                </div>
                <img className="movie_poster" src={currentMovie.Poster} alt={'Movie Poster'}></img>
                <div className="cast-info">
                    <Heading size={600}>Cast Information:</Heading>
                    <ul></ul>
                    <Heading size={400}>Directors:</Heading>
                    <ul>
                        {extraInfo.directorList.map((a) => <li>{a.name}</li>)}
                    </ul>
                    <Heading size={400}>Writers:</Heading>
                    <ul>
                        {extraInfo.writerList.map((a) => <li>{a.name}</li>)}
                    </ul>
                    <Heading size={400}>Starring:</Heading>
                    <ul>
                        {extraInfo.starList.map((a) => <li>{a.name}</li>)}
                    </ul>
                </div>
                <div className="user_ratings">
                    <Heading size={700}>Female audience score: </Heading>
                    <Heading size={800}>{ratingInfo.demographicFemales.allAges.rating}</Heading>
                    <Heading size={500}>({ratingInfo.demographicFemales.allAges.votes} responses)</Heading>
                    <br></br>
                    <Heading size={700}>General audience score: </Heading>
                    <Heading size={800}>{ratingInfo.demographicAll.allAges.rating}</Heading>
                    <Heading size={500}>({ratingInfo.demographicAll.allAges.votes} responses)</Heading>
                    <br></br>
                    <Heading size={700}>Percentage of reviews made by women: </Heading>
                    <Heading size={800}>{Math.round(ratingInfo.demographicFemales.allAges.votes/ratingInfo.demographicAll.allAges.votes * 100 * 100) / 100 }%</Heading>
                </div>
                <div className="our_data">
                    <Heading size={600}>Percentage of Female Cast Members:</Heading>
                    <Heading size={700}>{getFemaleScore(currentMovie.Title, femaleCastScores)}</Heading>
                    <br></br>
                    <Heading size={600}>Percentage of Female Crew Members:</Heading>
                    <Heading size={700}>{getFemaleScore(currentMovie.Title, femaleCrewScores)}</Heading>
                    <br></br>
                    <Heading size={600}>Number of Women Involved in the Film:</Heading>
                    <Heading size={700}>{getFemaleScore(currentMovie.Title, femaleCount).slice(0,-1)}</Heading>
                </div>
                <div className="imdb-rec">
                    <Heading size={700}>Recommended</Heading>
                    {current_recommendations.map((a) => 
                        <div className="recommendation">
                            <img className="mini-image" src={a.image} alt={`${a.title} Movie Poster`}></img>
                            <div className='mini-title'>
                                <Paragraph size={500}>{a.title}</Paragraph>
                                {isFilmFemaleDirected(a.title, female_directed_movies) ? <Badge color={"purple"}>Female Directed</Badge> : <div></div>}
                                {getFemaleScoreBadge(a.title, femaleCastAndCrewScores)}
                            </div>
                        </div>)}
                </div>
            </div>
        </div>
    )
}

export default CurrentMovieDisplay 