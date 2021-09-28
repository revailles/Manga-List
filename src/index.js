import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import { manga } from './manga'
import Manga from './manga-components'

function MangaList() {
  return (
    <div className="mangalist">
      {manga.map((manga) => {
        return <Manga key={manga.id} {...manga}></Manga>;
      })}
    </div>
  );
}

ReactDom.render(<MangaList />, document.getElementById('root'))