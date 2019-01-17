import React from "react";

import BookItem from "./BookItem";

export default ({ books }) => {
  return (
    <div>
      {books.map(item => (
        <BookItem
          key={item._id}
          id={item._id}
          imageUri={item.imageUri}
          title={item.title}
          author={item.author.name}
          price={item.price}
          publisher={item.publisher.name}
          publicationYear={item.publicationYear}
        />
      ))}
    </div>
  );
};
