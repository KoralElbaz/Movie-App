import { Link } from "react-router-dom";
import no_image from "../images/no_image.jpg" 
import "../styles/MovieBox.css"
const MovieBox = ({movie}) =>
{
    const {name, image,premiered} = movie;
    return(
        <div className="box">
            {(image && image.medium)? <img src={image.medium} alt={name}/> : 
                <img className="pic" src={no_image} alt={name}/>}
            
            <h1>{name}</h1>
            {(premiered)? <h4>{premiered}</h4> : <h6>*no date*</h6>}
            <Link to={`/Info/${movie.id}`} className="btnInfo"> More Info</Link>
        </div>
    );
};

export default MovieBox;