import {useContext,useEffect,useState} from 'react'
import Cards from '../components/Cards';
import { AppContext } from '../context/App_context';

function Films() {
  let {getFilms} = useContext(AppContext)
  let {url} = useContext(AppContext)
  const [likes, setLikes] = useState({});
  useEffect(() => {
    getFilms();
  }, []);
  const handleLike = (filmId) => {
    setLikes((Likes) => ({
      ...Likes,
      [filmId]: (Likes[filmId] || 0) + 1,
    }));
  };
  
    
    // const loaded = () => {
  return (
    <div>
    <div className='superContainer2'>
      <img src="https://gifdb.com/images/high/star-wars-qui-gon-obi-wan-kenobi-t0w1pvh90vaivjac.gif" alt="" class="pic" />
    <p className='Maintext'> Star Wars Films</p>
    </div>
    <div className="filmsContainer">
        {url ? (
          url.map((card) => {
            const filmId = card.episode_id;
            const filmLikes = likes[filmId];
            return (
              <div className="films">
                <h1>{card.title}</h1>
                <div className="filmInfo">
                  <h3>Episode: {card.episode_id}</h3>
                  <h3>Director: {card.director}</h3>
                  <h3>Release Date {card.release_date}</h3>
                  <p>{card.opening_crawl}</p>
                </div>
                <div className="films" key={filmId}>
                {/* <h1>{card.title}</h1> */}
                {/* <div className="filmInfo">
                  <h3>Episode: {card.episode_id}</h3>
                  <h3>Director: {card.director}</h3>
                  <h3>Release Date {card.release_date}</h3>
                  <p>{card.opening_crawl}</p>
                </div> */}
                <span className='likeInfo'>Likes: {filmLikes}</span>
              </div>
                <button onClick={() => handleLike(filmId)}>Like</button>
              </div>
            );
          })
        ) : (
          <p>Loading</p>
        )}
        {/* <h1>{url.name}</h1>  */}
      </div>
    </div>
    );
  };
  {/* const loading = () => {
    return <h1>Loading...</h1>;
  };
  return url ? loaded() : loading();
} */}


export default Films