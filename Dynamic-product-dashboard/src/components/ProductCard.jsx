import styles from "../styles/ProductCard.module.css";

const ProductCard = ({ product }) => {
  const cardClass = product.inStock
    ? `${styles.card} ${styles.inStock}`
    : `${styles.card} ${styles.outOfStock}`;

  const badgeClass = product.inStock
    ? `${styles.badge} ${styles.inStockBadge}`
    : `${styles.badge} ${styles.outOfStockBadge}`;

  return (
    <div className={cardClass}>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <span className={badgeClass}>
        {product.inStock ? "In Stock" : "Out of Stock"}
      </span>
    </div>
  );
};

export default ProductCard;
