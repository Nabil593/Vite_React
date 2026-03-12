import Allbooks from "./Book";
export default function Library({books}) {
    // console.log(books)
    return (
        <div>
            <h1>My national Central Library</h1>
            <p>All Books Length: {books.length}</p>
            <hr></hr>
            <ul>
                {
                    books.map(book => <Allbooks key={book.id} books = {book}/>)
                }
            </ul>

        </div>
    )
}