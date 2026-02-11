import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

const Shop = () => {
  const [searchParams] = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState("Всі")

  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) {
      setSelectedCategory(cat)
    }
  }, [searchParams])

  const categories = ["Всі", ...new Set(products.map(p => p.category))]

  const filteredProducts = selectedCategory === "Всі"
    ? products
    : products.filter(p => p.category === selectedCategory)

  return (
    <div className="shop-page container">
      <div className="shop-header text-center">
        <h1 className="display-title">Каталог</h1>
        <p className="lead-text">Досконалість у кожній деталі.</p>
      </div>

      <div className="shop-layout">
        <aside className="filters-sidebar">
          <div className="sticky-filter">
            <h3 className="filter-heading">Категорії</h3>
            <div className="category-list">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  <span className="cat-name">{cat}</span>
                </button>
              ))}
            </div>

            <div className="promo-box">
              <h4>Знижка 10%</h4>
              <p>На аксесуари при покупці телефону</p>
            </div>
          </div>
        </aside>

        <main className="product-grid-container">
          <div className="results-count">
            Знайдено {filteredProducts.length} товарів
          </div>
          <div className="product-grid">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>

      <style>{`
        .shop-page {
          padding-top: 140px;
          padding-bottom: 8rem;
        }

        .shop-header {
          text-align: center;
          margin-bottom: 6rem;
        }

        .display-title {
          font-size: 5rem;
          margin-bottom: 1.5rem;
          color: var(--color-text-primary);
        }

        .lead-text {
          font-size: 1.8rem;
          color: var(--color-text-secondary);
        }

        .shop-layout {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 5rem;
          align-items: start;
        }

        .sticky-filter {
          position: sticky;
          top: 140px;
          padding: 2.5rem;
          background: #Fbfbfd;
          border-radius: var(--radius-lg);
          border: 1px solid rgba(0,0,0,0.05);
        }

        .filter-heading {
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--color-text-secondary);
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--color-border);
        }

        .category-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .category-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.2rem;
          background: transparent;
          color: var(--color-text-primary);
          border-radius: var(--radius-md);
          font-size: 1.15rem;
          text-align: left;
          transition: all 0.2s;
          font-weight: 500;
        }

        .category-btn:hover {
          background: rgba(0,0,0,0.03);
        }

        .category-btn.active {
          background: #1d1d1f;
          color: white;
        }

        .cat-dot {
          width: 8px;
          height: 8px;
          background: var(--color-accent);
          border-radius: 50%;
        }
        
        .category-btn.active .cat-dot {
           background: white;
        }

        .promo-box {
          margin-top: 4rem;
          padding: 2rem;
          background: linear-gradient(135deg, #e0f2fe 0%, #dbeafe 100%);
          border-radius: var(--radius-md);
          border: 1px solid #bfdbfe;
        }
        
        .promo-box h4 { color: #0369a1; margin-bottom: 0.8rem; font-size: 1.2rem; }
        .promo-box p { font-size: 1rem; color: #0c4a6e; line-height: 1.5; }

        .results-count {
           font-size: 1rem;
           color: var(--color-text-secondary);
           margin-bottom: 2rem;
           text-align: right;
        }

        .product-grid {
          display: grid;

          grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
          gap: 3rem;
        }

        @media (max-width: 1024px) {
          .shop-layout {
            grid-template-columns: 1fr;
          }

          .filters-sidebar {
            margin-bottom: 3rem;
          }

          .sticky-filter {
             position: static;
             display: flex;
             flex-direction: column;
             padding: 1.5rem;
          }

          .category-list {
             flex-direction: row;
             flex-wrap: wrap;
          }

          .category-btn {
             padding: 0.8rem 1.5rem;
             background: var(--color-bg-secondary);
          }
           
          .promo-box { display: none; }
          
          .product-grid {
             grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          }
        }
      `}</style>
    </div>
  )
}

export default Shop
