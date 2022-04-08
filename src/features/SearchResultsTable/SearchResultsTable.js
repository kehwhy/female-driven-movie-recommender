import React from 'react'
import { AddIcon, Badge, Button, SelectedPropType, Table } from 'evergreen-ui'
import { useDispatch, useSelector } from 'react-redux'
import { selectSearchResults } from "./searchResultsSlice";
import { openDialog, selectCurrentMovie, setCurrentMovie, addRatingInfoToCurrentMovie, addExtraInfoToCurrentMovie, addRecommendations, clearRecommendations } from '../CurrentMovieDisplay/CurrentMovieSlice';
import "./SearchResultsTable.css"
import { selectAllRecommendations, selectFemaleDirected } from '../recommendationsSlice';
import { isFilmFemaleDirected } from '../helper';

const SearchResultTable = () => {
    // dispatch to store
    const dispatch = useDispatch()

    // selecting from store
    const results = useSelector(selectSearchResults)
    const all_recommendations = useSelector(selectAllRecommendations)
    const female_directed_movies = useSelector(selectFemaleDirected)
      
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    /**
     * Add a movie to the list of Films
     * @param {Object} movie 
     */
    const selectAMovie = (movie) => {
        dispatch(setCurrentMovie(movie))
        getMovieInfo(movie)
        sleep(1000).then(() => { dispatch(openDialog()) });
        
    }

    const getMovieRecommendations = (title, all_recommendations) => {
        
        dispatch(clearRecommendations())

        const film = all_recommendations.filter(f => f.title === title)

        if (film.length === 0){
            return []
        }

        const recommendations = film[0].movieIds_recommended.slice(1,-1).replace(/\s+/g, ' ').trim().split(" ")

        const l = Math.min(recommendations.length, 5)
    
        var new_recommendations = []

        for (var i=0; i < l; i++){
            const found_film = all_recommendations.filter(f => parseInt(recommendations[i]) === f.movieId)[0]

            fetch(`https://www.omdbapi.com/?apikey=793ba15b&type=movie&s=${found_film.title}`)
            .then(res => res.json())
            .then((data) => {
                
                var total_film = Object.assign({}, found_film, {image: data.Search[0].Poster})
                dispatch(addRecommendations(total_film))
            })
        }
    }

    const getMovieInfo = (movie) => {

        fetch(`https://imdb-api.com/en/API/UserRatings/k_1m0l7cx2/${movie.imdbID}`)
        .then(res => res.json())
        .then((data) => {
    
            dispatch(addRatingInfoToCurrentMovie(data))
        
        })

        fetch(`https://imdb-api.com/en/API/Title/k_1m0l7cx2/${movie.imdbID}/FullActor,Ratings,`)
        .then(res => res.json())
        .then((data) => {
    
            dispatch(addExtraInfoToCurrentMovie(data))
        
        })


        getMovieRecommendations(movie.Title, all_recommendations)
        
    }

    return (
        results && results.length
        ? <div className="SearchResultTable">
            <Table className="SearchResultTable_table">
                <Table.Head height={45} className="search_result_table_header">
                    <Table.TextHeaderCell textProps={{size: 400}} flex="30%">
                    Movie Title
                    </Table.TextHeaderCell>
                    <Table.TextHeaderCell textProps={{size: 400, textAlign:'center'}} flex="25%">
                    Year of Release
                    </Table.TextHeaderCell>
                    <Table.TextHeaderCell flex="25%">
                    </Table.TextHeaderCell>
                    <Table.TextHeaderCell flex="20%"/>
                </Table.Head>
                <Table.Body textProps={{size: 400}}>
                    {results.map(movie => (
                    <Table.Row height={45} className="search_result_table_row" key={movie.imdbID}>
                        <Table.TextCell textProps={{size: 400}} flex="30%">{movie.Title}</Table.TextCell>
                        <Table.TextCell textProps={{size: 400, textAlign:'center'}} flex="25%">{movie.Year}</Table.TextCell>
                        <Table.Cell flex="20%">{isFilmFemaleDirected(movie.Title, female_directed_movies) ? <Badge color={"purple"}>Female Directed</Badge> : <div></div>}</Table.Cell>
                        <Table.Cell flex="25%">
                            <Button 
                            className="add_button" 
                            onClick={(e) => selectAMovie(movie)} 
                            iconBefore={AddIcon} 
                            height={24} 
                            appearance='minimal' 
                            >Show Details</Button>
                        </Table.Cell>
                    </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
        : <div></div>
    )
}

export default SearchResultTable