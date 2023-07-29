import { useContext, useEffect } from "react";
import Cards from "../components/Cards";
import { AppContext } from "../context/App_context";
function Species() {
  let { getSpecies } = useContext(AppContext);
  let { url } = useContext(AppContext);
  useEffect(() => {
    getSpecies();
  }, []);
  // const loaded = () => {
  return (
    <div>
      <div className="superContainer2">
        <img
          src="https://media.tenor.com/ztDmk1mOTagAAAAC/star-wars-wookiee.gif"
          alt=""
          class="pic"
        />
        <p className="Maintext"> Star Wars Species</p>
      </div>
      <div>
        <div className="filmsContainer">
          {url ? (
            url.map((card) => {
              return (
                <div className="films">
                  <h1>{card.name}</h1>
                  <div className="filmInfo">
                    <h3>Classification: {card.classification}</h3>
                    <h3>Average Life Span: {card.average_lifespan}</h3>
                    <h3>Language: {card.language}</h3>
                  </div>
                </div>
              );
            })
          ) : (
            <p>Loading</p>
          )}
          {/* <h1>{url.name}</h1>  */}
        </div>
      </div>
    </div>
  );
  {
    /* }
  const loading = () => {
      return <h1>Loading...</h1>;
    };
    */
  }
}
export default Species;