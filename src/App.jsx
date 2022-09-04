import { useEffect, useState } from 'react';
import ProductList from './components/product_list/product_list';
import styles from './App.module.css';

function App({ productRepository }) {
  const [products, setProducts] = useState([]);
  const [menus, setMenus] = useState(null);

  useEffect(() => {
    const syncProducts = () => {
      productRepository
        .getProducts()
        .then(products => {
          setProducts(products);
        });
    };

    const syncMenus = () => {
      productRepository
        .getMenus()
        .then(menus => {
          setMenus(menus);
        });
    };

    return () => {
      syncProducts();
      syncMenus();
    };
  }, [productRepository]);

  return (
    <div className={styles.app}>
      <ProductList products={products} menus={menus} />
    </div>
  );
}

export default App;
