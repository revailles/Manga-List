import React from 'react'

const Manga = (props) => {
    const { image, title, author, genre } = props;
    return (
        <div className="manga">
            <img src={image} alt="" />
            <h1>{title}</h1>
            <h4 style={{ color: 'red', fontSize: '0.85rem', margin: '0.25rem' }}>{author}</h4>
            <h5>{genre}</h5>
        </div>
    );
};

export default Manga
