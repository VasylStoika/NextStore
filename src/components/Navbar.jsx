import { Link } from 'react-router-dom'
import { ShoppingBag, Search, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useCart } from '../context/CartContext'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { toggleCart, checkCount, badgePulse } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-content">
        <Link to="/" className="logo">
          NextStore
        </Link>

        <nav className={`desktop-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <Link to="/" className="nav-link">Головна</Link>
          <Link to="/shop" className="nav-link">Каталог</Link>
          <Link to="/shop" className="nav-link">Аксесуари</Link>
          <Link to="#" className="nav-link">Підтримка</Link>
        </nav>

        <div className="nav-actions">

          <button
            className="icon-btn cart-btn-wrapper"
            aria-label="Кошик"
            onClick={toggleCart}
          >
            <ShoppingBag size={22} />
            {checkCount > 0 && <span className={`cart-badge ${badgePulse ? 'pulse' : ''}`}>{checkCount}</span>}
          </button>
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1.2rem 0;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          background: rgba(255, 255, 255, 0);
        }

        .navbar.scrolled {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          padding: 0.8rem 0;
          border-bottom: 1px solid rgba(0,0,0,0.05);
        }

        .navbar-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          font-weight: 800;
          font-size: 1.6rem;
          color: var(--color-text-primary);
          letter-spacing: -0.04em;
          position: relative;
        }
        
        .logo::after {
          content: none;
        }

        .desktop-nav {
          display: flex;
          gap: 2.5rem;
          background: rgba(255, 255, 255, 0.6);
          padding: 0.6rem 2rem;
          border-radius: 999px;
          border: 1px solid rgba(0,0,0,0.03);
          backdrop-filter: blur(10px);
        }
        
        .navbar.scrolled .desktop-nav {
           background: transparent;
           border-color: transparent;
           backdrop-filter: none;
           padding: 0;
        }

        .nav-link {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--color-text-secondary);
          transition: all 0.2s;
          position: relative;
        }

        .nav-link:hover {
          color: var(--color-text-primary);
        }

        .nav-actions {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .icon-btn {
          background: rgba(255,255,255,0.8);
          color: var(--color-text-primary);
          padding: 10px;
          border-radius: 50%;
          transition: all 0.2s;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid transparent;
        }
        
        .navbar.scrolled .icon-btn {
           background: transparent;
        }

        .icon-btn:hover {
          background: #fff;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          border-color: rgba(0,0,0,0.05);
        }

        .cart-badge {
          position: absolute;
          top: -2px;
          right: -2px;
          background: var(--color-accent);
          color: white;
          font-size: 0.7rem;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          border: 2px solid white;
        }

        .cart-badge.pulse {
          animation: badgePop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes badgePop {
          0% { transform: scale(1); }
          40% { transform: scale(1.5); }
          100% { transform: scale(1); }
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--color-text-primary);
        }

        @media (max-width: 1024px) {
          .desktop-nav {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(20px);
            flex-direction: column;
            padding: 2rem;
            border-radius: 0 0 24px 24px;
            border-bottom: 1px solid rgba(0,0,0,0.05);
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
            gap: 1.5rem;
            align-items: center;
          }
          
          .desktop-nav.open {
            display: flex;
          }

          .mobile-menu-btn {
            display: block;
          }
        }
      `}</style>
    </header>
  )
}

export default Navbar
