import {useState} from "react";

export const Inventory = () => {

    const [books, setBook] = useState(0);
    const [notebooks, setNotebooks] = useState(0);
    const [pens, setPens] = useState(0);

    //Books: clicking on + increases the count of that item only, same for - button
    const booksAdd = () => {
        setBook(books + 1);
    }
    const booksSub = () => {
        setBook(books - 1);
    }

    //Notebook: clicking on + increases the count of that item only, same for - button
    const notebooksAdd = () => {
        setNotebooks(notebooks + 1);
    }
    const notebooksSub = () => {
        setNotebooks(notebooks - 1);
    }

    //Pens: clicking on + increases the count of that item only, same for - button
    const pensAdd = () => {
        setPens(pens + 1);
    }
    const pensSub = () => {
        setPens(pens - 1);
    }


    return (

<div classname="main_div">

    <div class="div2">

    {/* //Books */}
    <h3>Books:</h3>
    <button onClick={booksAdd} className="books">+</button>
    <button onClick={booksSub} className="books">-</button>
    <h4>{books}</h4>

    {/* Notebooks */}
    <h3>Notebooks:</h3>
    <button onClick={notebooksAdd} className="books">+</button>
    <button onClick={notebooksSub} className="books">-</button>
    <h4>{notebooks}</h4>

    {/* Pens */}
    <h3>Pens:</h3>
    <button onClick={pensAdd} className="books">+</button>
    <button onClick={pensSub} className="books">-</button>
    <h4>{pens}</h4>

</div>

<div><h2>Total Quantity: {books+notebooks+pens}</h2></div>

        </div>
    )

}

export default Inventory;