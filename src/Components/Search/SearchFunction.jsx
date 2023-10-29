import React, { useRef, useState } from 'react'
import { books } from '../../Data/Book'
import BooksItem from './BooksItem'

const SearchFunction = () => {

    const [mybooks, mysetBooks] = useState(books)
    const [searchvalue, setsearchValue] = useState("");
    const ref=useRef();
    const onsubmitHandler = (e) => {
        e.preventDefault()
        let newadata = handleSearch(searchvalue);
        mysetBooks(newadata);
    }

    var handleSearch = (value) => {
        // Get the search terms from the input field
        var searchTerm = value;
        // Tokenize the search terms and remove empty spaces
        var tokens = searchTerm
            .toLowerCase()
            .split(' ')
            .filter(function (token) {
                return token.trim() !== '';
            });
        if (tokens.length) {
            //  Create a regular expression of all the search terms
            var searchTermRegex = new RegExp(tokens.join('|'), 'gim');
            
            var filteredList = books.filter(function (book) {
                // Create a string of all object values
                var bookString = '';
                
                for (var key in book) {
                    if (book.hasOwnProperty(key) && book[key] !== '') {
                        bookString += book[key].toString().toLowerCase().trim() + ' ';
                    }
                }
                // Return book objects where a match with the search regex if found

                return bookString.match(searchTermRegex);
            });
            return filteredList
        }
    };
    return (
        <>
            <div className='mb-10 mx-auto max-w-[600px]'>
                <form onSubmit={onsubmitHandler}>
                    <input ref={ref} type="text" className='border-2 border-black rounded-lg h-[38px] w-[300px] py-1 px-2' placeholder='Search...' onChange={((e) => setsearchValue(e.target.value))} />
                    <input onClick={(e)=>{mysetBooks(books);ref.current.value=""}} type="button" value="Reset" className='py-1 px-2 border-2 border-black rounded-lg mx-2  mt-2 hover:bg-[black] hover:text-white cursor-pointer shadow-lg' />
                    <input type="submit" value="Search" className='py-1 px-2  mt-2 border-2 border-black rounded-lg hover:bg-[black] hover:text-white cursor-pointer shadow-lg' />
                </form>

            </div>

            <div className='max-w-[1000px] mx-auto grid sm:grid-cols-2 gap-5'>


                { mybooks &&mybooks.length>0 ?mybooks.map(e => {
                    return <BooksItem key={e.author} data={e} />
                }

                ):
                <h3 className='text-lg font-bold text-center'>No Books Found</h3>
                }
            </div>
        </>
    )
}

export default SearchFunction