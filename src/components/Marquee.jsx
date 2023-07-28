import React from 'react'
function Marquee() {
  return (
    <div>
      <div className='superContainer'>
      <img src="https://wallpapers.com/images/featured/star-wars-plzcoaffexgf4h81.jpg" alt="" class="pic" />
      <p className='Maintext'> Welcome to the Star wars API</p>
      <div className='marquee'>
              <marquee direction="up" height="400" width="350" bgcolor="black" color="yellow">“It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.
        During the battle, Rebel spies managed to steal secret plans to the Empire's ultimate weapon, the DEATH STAR, and space station with enough power to destroy an entire planet.
        Pursued by the Empire's sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy”</marquee>
     </div>
      </div>
      <marquee behavior="scroll" direction="right">
    <img src="https://loodibee.com/wp-content/uploads/Star-Wars-transparent-logo.png" width="120" height="80" alt="Natural" />
  </marquee>
    </div>
  )
}
export default Marquee