import React from 'react';
import useWebAnimations , {backInLeft} from "@wellyshen/use-web-animations";
import './App.css';


function App() {
  const { ref , playState} = useWebAnimations ({...backInLeft});
  /*
  const { ref, playState ,getAnimation} = useWebAnimations({
      keyframes :[
        { transform: "translate(0px)", background : "red"},
        { transform: "translate(500px)", backgroud : "yellow"},
        
      ],
      timing: {
        duration : 3000,
        iterations : 4,
        direction : "alternate",
        easing:"ease-in"
      },
      onUpdate: ({ playstate, animate, animation }) => {
          console.log("Play State", playState);
          console.log("Play State", animate);
          console.log("Play State", animation);
      }
  });
*/
  return (
    <div>
     <h1>PIAIC Bootcamp 2020 : WebAnimation</h1>
     <h2>Student : Muhammad Javaid Nawab</h2>
    <div ref = {ref} style = {{background:"red", width: "100px", height: "100px"}}>
      Assalam o Aleikum PIAIC Students: 
     

    </div>

    </div>
  );
}

export default App;
