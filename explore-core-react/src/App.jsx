import './App.css'
import Toggle from "./Toggle";
import Todo from "./Todo";
import Actor from './Actor'
import Singers from "./Singers";
function App() {

  const sctors = ['Ronaldo', "Messi", "M Bappy"];

  const singers = [
  {
    name: "Arijit Singh",
    country: "India",
    genre: "Bollywood / Playback",
    famousSong: "Tum Hi Ho"
  },
  {
    name: "Atif Aslam",
    country: "Pakistan",
    genre: "Pop / Playback",
    famousSong: "Jeene Laga Hoon"
  },
  {
    name: "Ed Sheeran",
    country: "UK",
    genre: "Pop",
    famousSong: "Shape of You"
  },
  {
    name: "Justin Bieber",
    country: "Canada",
    genre: "Pop / R&B",
    famousSong: "Sorry"
  }
];

  return (
    <>

    {
      singers.map(singer => <Singers singers = {singer}/>)
    }

    {
      sctors.map(actor => <Actor name = {actor}/>)
    }

   <h1>Hello React!</h1>
   <Toggle light = 'White' dark = 'Black' istoggle = {true} />
   <Device me = 'Mobile'/>
   <Device me = 'Laptop'/>
   {/* <Device name = 'Nabil' age = '20' /> */}
   {/* <Device age = '20' /> */}

   <Todo name = "Shariea" age = {20} isTodo = {false}/>
    </>
  )
};

function Device({name, age}) {
  // const {name, age} = {name: 'Nabil', age: 20};
  const styleist = {
    color : 'red'
  }
  return(
    <p style={{backgroundColor : 'blue'}}>My Device is {name} & my age {age}</p>
  )
}

export default App;
