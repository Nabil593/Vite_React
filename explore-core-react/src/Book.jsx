export default function AllBooks({books}) {
    console.log(books)
    return (
        <div>
            <p>Title: {books.title}</p>
            <p>Author: {books.author}</p>
            <p>Year: {books.year}</p>
            <hr></hr>
        </div>
    )
}