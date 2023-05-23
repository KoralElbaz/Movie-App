import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/MovieInfo.css"
import no_image from "../images/no_image.jpg"
import { Link } from "react-router-dom";


const MovieInfo = ({setSearchInput, movies}) =>
{
    useEffect(()=>
    {
        setSearchInput(false);
        return () => {setSearchInput(true);};
    },[setSearchInput]);

    
    let {id} = useParams();
    let movie = movies.find((movie)=> movie.show.id === Number(id));
    if(!movie){
        return <div className="info">
            <h1>The movie is not found !</h1>     
            <Link to='/' className="btnInfo"> Back </Link>
            </div>
        
        
    }

    const { name, premiered, summary, image } = movie.show;

    return(
        <div className="info">
            <div className="info-img">
                {(image && image.medium)? <img src={image.medium} alt={name}/> : 
                <img className="pic" src={no_image} alt={name}/>}
            </div>            
            <h1>{name}</h1>
            
                {(premiered)? <h4>{premiered}</h4> : <h6>*no date*</h6>}
                <div className="summery-info">
                <div dangerouslySetInnerHTML={{__html:summary}}></div>
            </div>
            
            <Link to='/' className="btnInfo"> Back </Link>
        </div>
    );
};

export default MovieInfo;