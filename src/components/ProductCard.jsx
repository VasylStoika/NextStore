import { Link, useNavigate } from 'react-router-dom'
import { Plus, Maximize2 } from 'lucide-react'
import { useCart } from '../context/CartContext'

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()
  const navigate = useNavigate()

  const handleAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product)
  }

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="card-link">
        <div className="card-image-wrapper">
          <img src={product.image} alt={product.name} className="card-image" />
          <div className="card-overlay">
            <span className="view-text">Детальніше</span>
          </div>
        </div>

        <div className="card-info">
          <p className="card-category">{product.category}</p>
          <h3 className="card-title">{product.name}</h3>
          <div className="card-price-row">
            <span className="card-price">{product.price.toLocaleString()} ₴</span>
            <button
              className="add-btn-mini"
              onClick={handleAdd}
              aria-label="Додати в кошик"
            >
              <Plus size={20} />
              <span>Купити</span>
            </button>
          </div>
        </div>
      </Link>

      <style>{`
        .product-card {
          background: #fff;
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: all var(--transition-medium);
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
          border: 1px solid rgba(0,0,0,0.04);
        }

        .product-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
          border-color: transparent;
        }

        .card-link {
          display: flex;
          flex-direction: column;
          height: 100%;
          color: inherit;
        }

        .card-image-wrapper {
          position: relative;
          padding-top: 110%;
          background: var(--color-bg-secondary);
          overflow: hidden;
        }

        .card-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 1rem;
          transition: transform var(--transition-smooth);
        }

        .product-card:hover .card-image {
          transform: scale(1.08);
        }

        .card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.03);
          opacity: 0;
          transition: opacity var(--transition-medium);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .product-card:hover .card-overlay {
          opacity: 1;
        }

        .view-text {
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(10px);
          padding: 12px 28px;
          border-radius: 40px;
          font-weight: 600;
          font-size: 1rem;
          transform: translateY(10px);
          transition: transform var(--transition-medium);
          opacity: 0;
          box-shadow: var(--shadow-md);
        }

        .product-card:hover .view-text {
          transform: translateY(0);
          opacity: 1;
        }

        .card-info {
          padding: 2rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .card-category {
          font-size: 0.9rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--color-text-secondary);
          margin-bottom: 0.8rem;
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: auto;
          color: var(--color-text-primary);
          line-height: 1.2;
        }

        .card-price-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 2rem;
        }

        .card-price {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-text-primary);
        }

        .add-btn-mini {
          background: var(--color-bg-secondary);
          color: var(--color-text-primary);
          padding: 10px 20px;
          border-radius: 30px;
          border: 1px solid transparent;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 1rem;
          font-weight: 600;
          transition: all 0.2s;
        }

        .add-btn-mini:hover {
          background: var(--color-text-primary);
          color: white;
          border-color: var(--color-text-primary);
        }
      `}</style>
    </div>
  )
}

export default ProductCard
