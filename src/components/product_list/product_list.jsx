import React, { useState, useEffect } from 'react';
import Header from '../header/header';
import Product from '../product/product';
import styles from './product_list.module.css';
import Menu from '../menu/menu';

const ProductList = ({ products, menus }) => {
  const [index, setIndex] = useState(0);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setIndex(products.length < 10 ? products.length : 10);
  }, [products]);

  useEffect(() => {
    const updateProductList = () => {
      setProductList([...productList, ...products.slice(productList.length, index)]);
    };
    updateProductList();
  }, [index]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [index]);

  const clickMore = () => {
    const next_index = index + 10 > products.length ? products.length : index + 10;
    setIndex(next_index);
  }

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      clickMore();
    }
  };

  const clickMenu = (menu) => {
    if (menu === "전체") {
      setIndex(products.length < 10 ? products.length : 10);
      setProductList([...productList, ...products.slice(productList.length, index)]);
    } else {
      const filtered_products = products.filter(product => {
        return product.menu === menu;
      });
      const new_index = filtered_products.length < 10 ? filtered_products.length : 10;
      setProductList([...filtered_products.slice(0, new_index)]);
      setIndex(new_index);
    }
  }

  return (
    <section>
      <Header />
      <div className={styles.product_list}>
        <h1>금주의 전단 상품을 만나보세요.</h1>
        <Menu menus={menus} clickMenu={clickMenu} />
        <ul className={styles.list}>
          {productList &&
            productList.map(product => (
              <Product key={product.id} product={product} />
            ))
          }
        </ul>
      </div>
    </section>
  );
};

export default ProductList;