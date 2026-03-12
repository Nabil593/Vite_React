export default function Singers({singers}) {
    console.log(singers)
    return (
        <div>
            <h3>Name: {singers.name}</h3>
            <p>Country: {singers.country}</p>
            <p>Genre: {singers.genre}</p>
            <p>Famous Song: {singers.famousSong}</p>
            <hr></hr>
        </div>
    )
}