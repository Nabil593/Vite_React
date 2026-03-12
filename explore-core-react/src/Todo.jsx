export default function Todo({name, age, isTodo}) {
    let a;

    isTodo === true ? a = <li>My name is {name}</li> : a = <li>My name is {age}</li>;
    
    return a;

}