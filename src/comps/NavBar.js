import { useRef } from "react";
import "../styles/NavBar.css";

const NavBar = ({searchInput,getApi}) =>
{
    const inputRef = useRef();
    const onSearchClick = () =>
    {
        getApi(inputRef.current.value);
    };

    return(
        <nav>
            <h1>Movies</h1>
            {searchInput && <div>
                <input ref={inputRef} className="inputSearch" type="search" placeholder="movie to search..."/>
                <button onClick={onSearchClick} className="btnSearch" type="Button">Search</button>
            </div>}
            
        </nav>
    );
};

export default NavBar;