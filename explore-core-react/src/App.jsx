import './App.css'
import Toggle from "./Toggle";
import Todo from "./Todo";
function App() {

  return (
    <>
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
