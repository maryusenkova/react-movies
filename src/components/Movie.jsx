export function Movie (props) {
    const {
        Title: title, 
        Type: type, 
        Year: year,
        imdbID: id, 
        Poster: poster
    } = props;
    return  <div className="card movie">
                <div className="card-image waves-effect waves-block waves-light">
                    {
                        poster === 'N/A' ?
                        <img className="activator" src={`https://via.placeholder.com/300x400?text=${title}`}/> 
                        : 
                        <img className="activator" src={poster}/>
                    }   
                </div>
                <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{title}</span>
                <p>{type} <span className="right">{year}</span></p>
                </div>
            </div>
}