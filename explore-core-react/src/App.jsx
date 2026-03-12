import './App.css'
import Toggle from "./Toggle";
import Todo from "./Todo";
import Actor from './Actor'
import Singers from "./Singers";
import Library from "./Libray";
function App() {

  const sctors = ['Ronaldo', "Messi", "M Bappy"];

  const singers = [
  {
    id: 1,
    name: "Arijit Singh",
    country: "India",
    genre: "Bollywood / Playback",
    famousSong: "Tum Hi Ho"
  },
  {
    id: 2,
    name: "Atif Aslam",
    country: "Pakistan",
    genre: "Pop / Playback",
    famousSong: "Jeene Laga Hoon"
  },
  {
    id: 3,
    name: "Ed Sheeran",
    country: "UK",
    genre: "Pop",
    famousSong: "Shape of You"
  },
  {
    id: 4,
    name: "Justin Bieber",
    country: "Canada",
    genre: "Pop / R&B",
    famousSong: "Sorry"
  }
];

const libraryBooks = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    year: 2018
  },
  {
    id: 2,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    year: 1997
  },
  {
    id: 3,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    year: 1937
  },
  {
    id: 4,
    title: "The Alchemist",
    author: "Paulo Coelho",
    year: 1988
  }
];

  return (
    <>
    {/* {
      libraryBooks.map(book => )
    } */}

    <Library books = {libraryBooks}/>


    {
      // singers.map(singer => <Singers key={singer.id} singers = {singer}/>)
    }

    {
      // sctors.map(actor => <Actor name = {actor}/>)
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
