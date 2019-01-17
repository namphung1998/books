import React from 'react';

export default ({ children }) => {
  return (
    <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px' }}>
      {children}
    </div>
  )
}
