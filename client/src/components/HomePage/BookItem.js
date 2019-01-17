import React from 'react';

export default ({ price, imageUri, title, author, publicationYear }) => {
  const titleList = title.split(' ');
  
  return (
    <div style={{ backgroundColor: '#e3f2fd'}} className='tc grow br3 pa3 pb0 ma2 dib bw2 shadow-5'>
      <h3>{publicationYear}</h3>
      <img style={{ maxWidth: 350, maxHeight: 400 }} src={imageUri}/>
      <div className='tl'>
        <h2>{titleList.length > 4 ? titleList.slice(0, 4).join(' ') + '...' : title}</h2>
        <h3>{author}</h3>
        <p>${price.toFixed(2)}</p>
      </div>
    </div>
  );
}
