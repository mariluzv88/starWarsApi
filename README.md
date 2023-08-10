# <div align="center">SPACEBALLS: Return of The PerScholas </div>

***
 <h3>Contributors:</h3>
   <li>Cedra Wilson</li>
   <li>Chris Panzeri</li>
   <li>Jonathan Dunst</li>
 <h3>Description</h3>
 The user will be able to view data about the first six Star Wars films, including Characters, Planets, and much much more! By shifting to a galaxy far, far away, user can learn information about vehicles and starships featured in the films as well as details about their favorite characters. This application allows anyone from a new fan watching for the first time to a die-hard Star Wars fan to have fun viewing all the trivia and details about the movies and characters of Star Wars.
 <h2> Dependencies</h2>
  <ul>
      <li>react-dom</li>
      <li>react-router-dom</li>
   
  <li>axios</li>
</ul>
 <h2>Wireframe / Components Hierarchy:</h2>

<ul>
 <h4>Hooks</h4>
      <li>useContext</li>
      <li>useState</li>
      <li>useEffect</li>
 <h4>Components</h4>
   <li>Main Page [ State|Marquee ]</li>
   <li>Characters Page [ Cards ]</li>
   <li>FIlms Page </li>
   <li>Species Page </li>
   <li>Vehicles Page </li>
   <li>StarShips Page </li>
</ul>

 <h2>API</h2>
 <ul>
      <li>We used The Star Wars API (SWAPI)</li>
      <li>Root URL: https://swapi.dev/api/</li>
   <h4>Documentation</h4>
   <li>Root URL: https://swapi.dev/api/](https://swapi.dev/documentation)</li>
</ul>

<h2>Styling</h2>
<ul>
      <li>Styled with CSS</li>
      <li>Used flexbox</li>
      <li>Implemented a  responsive design on 3 screen sizes (including desktop) using 2 media queries (tablet and mobile).</li>
</ul>
<h2>MVP</h2>
 Our initial goal for the application was to be able to use the Browser Router to link different pages using a navigation bar. By clicking on each link, the page would change, and depending on which link was clicked, the URL would change and call the API depending on the category that was clicked. When the page renders, the code would map over an array of information from the API and display a variety of information for each object in the array.
 <h2>Post_MVP</h2>
link in or connect an API library that has  images so that each card could have a picture in the mapped information or replace the current API with one that has images  implemented already.
