import React, { useState } from 'react';
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import ContentList from '../../API data/CONTENTLISTINGPAGE-PAGE1.json';
import '../../styles/styles.css';
import MovieCard from '../../components/MovieCard';

const AllMovies = () => {

  const { page } = ContentList
  const { content } = page['content-items']

  console.log("API json", content);

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
    <div className='movieContainer'>
      <Row gutter={40}>
        {content.map(item =>
          <MovieCard item={item} />
        )}
      </Row>
    </div>
  );
}

export default AllMovies;
