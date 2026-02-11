import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import ProductCarousel from '../components/ProductCarousel'
import { products } from '../data/products'

const Home = () => {
  const featuredProducts = products.slice(0, 3)

  return (
    <div className="home-page">

      <section className="hero">
        <div className="hero-background"></div>
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title fade-in-up">
              Втілення <br />
              <span className="gradient-text">Досконалості.</span>
            </h1>
            <p className="hero-subtitle fade-in-up delay-1">
              Твій світ стає безмежним з технологіями нового покоління.
            </p>
            <div className="hero-actions fade-in-up delay-2">
              <Link to="/shop" className="btn-primary">
                Купити Зараз
              </Link>
              <Link to="/shop" className="btn-secondary">
                Дізнатись більше <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          <div className="hero-image-wrapper fade-in delay-3">
            <img
              src="https://images.unsplash.com/photo-1696429175928-793a1cdef1d3?q=80&w=2080&auto=format&fit=crop"
              alt="NextPhone Titanium"
              className="hero-image"
            />
          </div>
        </div>
      </section>


      <section className="featured-section">
        <div className="container">
          <ProductCarousel
            title="Останні Новинки"
            products={products.slice(0, 8)}
          />

          <div style={{ height: '4rem' }}></div>

          <ProductCarousel
            title="Смартфони"
            products={products.filter(p => p.category === 'Телефони')}
          />

          <div style={{ height: '4rem' }}></div>

          <ProductCarousel
            title="Аксесуари"
            products={products.filter(p => ['Годинники', 'Навушники', 'Аксесуари'].includes(p.category))}
          />
        </div>
      </section>

      <section className="categories-section">
        <div className="container">
          <h2 className="section-title text-center mb-5">Популярні Категорії</h2>
          <div className="categories-grid">
            <Link to="/shop?category=Телефони" className="category-card" onClick={() => window.scrollTo(0, 0)}>
              <div className="cat-icon">📱</div>
              <h3>iPhone</h3>
            </Link>
            <Link to="/shop?category=Годинники" className="category-card" onClick={() => window.scrollTo(0, 0)}>
              <div className="cat-icon">⌚</div>
              <h3>Watch</h3>
            </Link>
            <Link to="/shop?category=Ноутбуки" className="category-card" onClick={() => window.scrollTo(0, 0)}>
              <div className="cat-icon">💻</div>
              <h3>MacBook</h3>
            </Link>
            <Link to="/shop?category=Навушники" className="category-card" onClick={() => window.scrollTo(0, 0)}>
              <div className="cat-icon">🎧</div>
              <h3>AirPods</h3>
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .home-page {
          overflow-x: hidden;
        }


        .hero {
          position: relative;
          min-height: 95vh;
          display: flex;
          align-items: center;
          background: #Fbfbfd;
          padding-top: 100px;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 6rem;
          width: 100%;
        }

        .hero-content {
          z-index: 2;
        }

        .hero-title {
          font-size: var(--font-size-hero);
          font-weight: 700;
          line-height: 1.05;
          margin-bottom: 2rem;
          letter-spacing: -0.03em;
          color: #1d1d1f;
        }

        .gradient-text {
          background: linear-gradient(135deg, #0071E3 0%, #00C6FB 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: 1.8rem;
          color: var(--color-text-secondary);
          margin-bottom: 3.5rem;
          max-width: 600px;
          line-height: 1.4;
          font-weight: 500;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .hero-image-wrapper {
          position: relative;
          height: 900px;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1000px;
        }

        .hero-image {
          width: 130%; 
          max-width: 1000px;
          transform: rotate(-10deg) translateX(80px);
          mask-image: linear-gradient(to bottom, black 85%, transparent 100%);
          filter: drop-shadow(0 50px 100px rgba(0,0,0,0.3));
        }

        @media (max-width: 1200px) {
          .hero-title { font-size: 4.5rem; }
          .hero-image-wrapper { height: 600px; }
        }

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            padding-top: 4rem;
            gap: 2rem;
          }
          
          .hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .hero-title {
             font-size: 3.5rem;
          }
          
          .hero-subtitle {
            font-size: 1.25rem;
            margin-bottom: 2rem;
          }

          .hero-image-wrapper {
             height: 500px;
             margin-top: -50px;
          }
          
          .hero-image {
            width: 100%;
            transform: rotate(0);
          }
        }


        .featured-section {
          padding: 10rem 0;
          background: #fff;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 5rem;
        }

        .section-title {
          font-size: 4rem;
          margin-bottom: 0.5rem;
          color: #1d1d1f;
        }

        .section-desc {
          font-size: 1.5rem;
          color: var(--color-text-secondary);
        }

        .see-all-link {
          color: var(--color-accent);
          font-size: 1.25rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: gap 0.2s;
        }
        
        .see-all-link:hover {
          gap: 15px;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 3rem;
        }


        .categories-section {
          padding-bottom: 8rem;
        }
        
        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }

        .category-card {
           background: var(--color-bg-secondary);
           padding: 3rem 1.5rem;
           border-radius: var(--radius-lg);
           display: flex;
           flex-direction: column;
           align-items: center;
           justify-content: center;
           gap: 1rem;
           transition: all 0.3s;
           text-decoration: none;
           color: var(--color-text-primary);
           border: 1px solid transparent;
        }

        .category-card:hover {
           background: white;
           transform: translateY(-5px);
           box-shadow: var(--shadow-lg);
           border-color: var(--color-border);
        }

        .cat-icon {
           font-size: 3rem;
        }
        
        .category-card h3 {
           margin: 0;
           font-size: 1.25rem;
           font-weight: 600;
        }
        
        .mb-5 { margin-bottom: 3rem; }



        .fade-in-up {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .fade-in {
          opacity: 0;
          animation: fadeIn 1.2s ease forwards;
        }

        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
        .delay-3 { animation-delay: 0.6s; }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          to { opacity: 1; }
        }
      `}</style>
    </div>
  )
}

export default Home
