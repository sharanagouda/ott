import React, { useState } from 'react';

const SearchMovies = () => {
    const [searching, setSearching] = useState(false);
    const [message, setMessage] = useState(null);
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const searchMovies = async (e) => {
        e.preventDefault();
        setSearching(true);
        const url = `http://www.omdbapi.com/?&apikey=e1a73560&s=${query}&type="movie"`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            setMessage(null);
            setMovies(data.Search);
            setSearching(false);
        } catch (err) {
            setMessage('An unexpected error occured.')
            setSearching(false);
        }
    }
    return (
        <div className="container mx-auto pt-6">
            <div class="flex justify-center max-w-screen-sm mx-auto overflow-hidden px-10">
                <form class="w-full h-10 pl-3 pr-2 bg-white border rounded-full flex justify-between items-center relative" onSubmit={searchMovies}>
                    <input type="text" name="query" placeholder="Search movies by name..."
                        class="appearance-none w-full outline-none focus:outline-none active:outline-none" value={query} onChange={(e) => setQuery(e.target.value)} />
                        
                    <button type="submit" class="ml-1 outline-none focus:outline-none active:outline-none">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6">
                            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </button>
                </form>
            </div>
            <div class="shadow flex">
    <input class="w-full rounded p-2" type="text" placeholder="Search..."/>
    <button class="bg-white w-auto flex justify-end items-center text-blue-500 p-2 hover:text-blue-400">
        <i class="material-icons">search</i>
    </button>
</div>

            <div class="container mx-auto">{searching && !message ? (<span> loading... </span>) : message ? (<div className="message"> {message} </div>) : (movies.map(item => (
                  <div class="inline-block px-2 w-19 h-30">
                  <div class="bg-white rounded-lg overflow-hidden shadow-xl my-8 py-4" key={item.imdbID}>
                      <img src={item.Poster} alt="movieimage" class="w-full h-64" />
                      <div class="p-4">
                          <p class="font-medium text-lg"><span class="font-normal text-base leadin-relaxed">{item.Title}</span></p>
              </div>
                  </div>
              </div>
)))}
            </div>
        </div>
    )
}

export default SearchMovies