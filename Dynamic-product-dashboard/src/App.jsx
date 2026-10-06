import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import products from './components/ProductList.jsx'
import ProductCard from './components/ProductCard.jsx'
import styles from "./styles/ProductCard.module.css"; 
import './App.css'

function App() {
  return (
    <div className={styles.pageWrapper}>
      <h1>Products</h1>

      <div className={styles.productGrid}>
        {products.length > 0 ? (
          products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
}

export default App;
