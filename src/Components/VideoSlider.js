import React from 'react';
import {useState} from 'react';
import Carousel from "react-elastic-carousel";
import {YoutubePlayer} from 'reactjs-media';

export default function VideoSlider() {

  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  const links = [
    'https://www.youtube.com/watch?v=_ng_bVJMm88',
    'https://www.youtube.com/watch?v=5Zmx5D7dOYA&feature=emb_title',
    'https://www.youtube.com/watch?v=nKzXUTvn2es',
    'https://www.youtube.com/watch?v=Wk97ev-M2Nw',
    'https://www.youtube.com/watch?v=FZta8t2L1pk',
    'https://www.youtube.com/watch?v=BOmSrKRWJS0',
  ]


  const breakPoints  = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 }
  ];


  return (
    <div className="bg-FQAItem  h-84 p-4">
        <div className="w-full carousel-wrapper">
          <Carousel breakPoints={breakPoints} isRTL ={false} >
            {links.map((item,index) => (
                <YoutubePlayer  src="https://www.youtube.com/watch?v=5Zmx5D7dOYA&feature=emb_title"  className="flex justify-between items-center w-72  m-8"  height={350} key = {index}/>
            ))}
          </Carousel>
        </div>
    </div>
  )

}

