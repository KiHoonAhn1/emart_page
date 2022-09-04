import React from 'react';
import styles from './product.module.css';

const Product = ({ product }) => {
  const getSalePrice = (prices) => {
    let result = ' ';
    prices.forEach(price => {
      if (result !== ' ') result += '/';
      result += price.toLocaleString('ko-KR');
    });
    result += '원';
    return result;
  };

  const getPrice = (prices) => {
    let result = '';
    prices.forEach(price => {
      if (result) result += '/';
      result += price.toLocaleString('ko-KR');
    });
    return result;
  };

  return (
    <li className={styles.product}>
      <img className={styles.img} src={product.img_url} alt="product" />
      <div className={styles.description}>
        {product.prices && (
          <div className={styles.price_box}>
            <span className={styles.price}>{getPrice(product.prices)}</span>
            <span className={styles.sale_price}>{getSalePrice(product.sale_prices)}</span>
          </div>
        )}
        <p className={styles.name}>{product.name}</p>
        <div className={styles.event_list}>
          {product.events && product.events.map((event) => (
            <div key={event} className={styles.event_box}>
              {event}
            </div>
          ))}
        </div>
        <div className={styles.additional_box}>
          <div className={styles.like_box}>
            <img className={styles.like_img} src="images/like.png" alt="like" />
            <div>{product.like}</div>
          </div>
          <div className={styles.comment_box}>
            <img className={styles.comment_img} src="images/comment.png" alt="comment" />
            <div>{product.review}</div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Product;