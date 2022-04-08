import { Badge, Paragraph } from 'evergreen-ui'


export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


export const isFilmFemaleDirected = (title, arr) => {
    
    const film = arr.filter(f => f.title === title)
    if (film.length > 0){
        return true
    }
    return false
    
}

export const getFemaleScoreBadge = (title, arr) => {
    
    const film = arr.filter(f => f.title === title)
    if (film.length === 0){
        return <Badge color={"neutral"}>Data Unavailable</Badge>
    }

    const score = film[0].ratio_female *100

    if (score >= 40) {
        return <Badge color={"green"}>{">"} 40% Female Involvement</Badge>
    }
    if (score >= 30) {
        return <Badge color={"yellow"}>{">"} 30% Female Involvement</Badge>
    }
    if (score >= 20) {
        return <Badge color={"yellow"}>{">"} 50% Female Involvement</Badge>
    }
    return <Badge color={"red"}>{"<"} 20% Female Involvement</Badge>
    
}

export const getFemaleScore = (title, arr) => {
    
    const film = arr.filter(f => f.title === title)
    if (film.length === 0){
        return "Data Unavailable"
    }

    const score = Math.round(film[0].ratio_female *100*100)/100

    return `${score}%`
    
}
