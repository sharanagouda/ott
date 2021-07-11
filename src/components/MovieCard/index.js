import React from 'react';
import {Col } from 'react-simple-flex-grid';
import getImagePath from '../../utils/helper';

const MovieCard=({item})=> {
  return (
    <Col
    xs={{ span: 4 }} sm={{ span: 4 }} md={{ span: 3 }}
    lg={{ span: 2 }} xl={{ span: 1 }}
  >
    <div className='movieCard'>
    <img src={getImagePath(item['poster-image'])} width="100" height="150" />
      <span className="movieTitle">{item.name}</span>
    </div>
  </Col>
  
  );
}

export default MovieCard;
