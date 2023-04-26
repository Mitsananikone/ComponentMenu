import React from 'react';
import './ProductService.css';


function ProductServiceCard(props) {
  const { icon, title, body, link } = props;

  return (
    
      <div className="card">
           <img src={icon} className="iconImg" alt={`Image of ${title}`} />
        <div className="card-header">
        
          <h3>{title}</h3>
        </div>
        <div className="card-body">
          <p>{body}</p>
        </div>
        <div className="card-footer">
          <a href={link}>Learn more</a>
        </div>
      </div>

  );
}

export default ProductServiceCard;
