import { useState } from 'react';
import './App.css';
import Main from './Components/Main';
import {myData} from './Data/myData'

const mainBlock = myData.map(({name, city, position, id}) =>{
  return <Main key={id} id={id} name={name} city={city} position={position}/>
});

// const NewBlock = () => {
//   return(
//     <>
//       {myData.map(({ name, city, position, id }) => {
//         return <Main key={id} id={id} name={name} city={city} position={position} />
//       })}
//     </>
//   )
// }

function App() {

  const [myVar, setMyVar] = useState("Upul");

  const clickHandle = () =>{
    setMyVar("Pavan");
    console.log(myVar)
  }

  return ( 
    <section>
      <div>
        Hello React
        <h1>{myVar}</h1>
        <div>
          {mainBlock}
        </div>
        <button onClick={clickHandle}>Click Me</button>
      </div>
    </section>
  );
}

export default App;
