import { useParams } from 'react-router-dom'
import { Check, Truck, Shield } from 'lucide-react'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'

const ProductDetails = () => {
  const { id } = useParams()
  const { addToCart } = useCart()
  const product = products.find(p => p.id === parseInt(id))

  if (!product) {
    return <div className="container" style={{ paddingTop: '100px' }}>Товар не знайдено</div>
  }

  return (
    <div className="product-details-page">
      <div className="container">
        <div className="details-grid">
          <div className="product-gallery">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="product-info">
            <h1 className="product-title">{product.name}</h1>
            <p className="product-price">{product.price.toLocaleString()} ₴</p>

            <p className="product-description">{product.description}</p>

            <div className="specs-list">
              <h3>Характеристики</h3>
              <ul>
                {Object.entries(product.specs).map(([key, value]) => (
                  <li key={key}>
                    <span className="spec-label">{key}:</span> {value}
                  </li>
                ))}
              </ul>
            </div>

            <div className="actions">
              <button
                className="btn-buy"
                onClick={() => addToCart(product)}
              >
                Додати в кошик
              </button>
            </div>

            <div className="benefits">
              <div className="benefit-item">
                <Truck size={20} />
                <span>Безкоштовна доставка</span>
              </div>
              <div className="benefit-item">
                <Shield size={20} />
                <span>Гарантія 2 роки</span>
              </div>
              <div className="benefit-item">
                <Check size={20} />
                <span>30 Днів на повернення</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .product-details-page {
          padding-top: 100px;
          padding-bottom: 4rem;
          min-height: 100vh;
        }

        .details-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .product-gallery {
          background: var(--color-bg-secondary);
          border-radius: var(--radius-lg);
          padding: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .product-gallery img {
          width: 100%;
          height: auto;
          mix-blend-mode: multiply;
        }

        .product-title {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }

        .product-price {
          font-size: 1.5rem;
          color: var(--color-accent);
          font-weight: 600;
          margin-bottom: 2rem;
        }

        .product-description {
          font-size: 1.1rem;
          color: var(--color-text-secondary);
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .specs-list {
          margin-bottom: 2rem;
          padding: 1.5rem;
          background: var(--color-bg-secondary);
          border-radius: var(--radius-md);
        }

        .specs-list h3 {
          font-size: 0.9rem;
          text-transform: uppercase;
          margin-bottom: 1rem;
          opacity: 0.6;
        }

        .specs-list ul {
          list-style: none;
        }

        .specs-list li {
          margin-bottom: 0.5rem;
          display: flex;
          gap: 0.5rem;
        }

        .spec-label {
          font-weight: 600;
          text-transform: capitalize;
        }

        .btn-buy {
          width: 100%;
          padding: 1rem;
          background: var(--color-accent);
          color: white;
          font-size: 1.1rem;
          font-weight: 600;
          border-radius: var(--radius-sm);
          transition: background 0.2s;
        }

        .btn-buy:hover {
          background: var(--color-accent-hover);
        }

        .benefits {
          margin-top: 2rem;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 1rem;
          border-top: 1px solid var(--color-border);
          padding-top: 2rem;
        }

        .benefit-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          color: var(--color-text-secondary);
        }

        @media (max-width: 768px) {
          .details-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </div>
  )
}

export default ProductDetails
