import { useState, useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ProductCard from './ProductCard'

const ProductCarousel = ({ products, title }) => {
  const scrollRef = useRef(null)
  const [showLeftBtn, setShowLeftBtn] = useState(false)
  const [showRightBtn, setShowRightBtn] = useState(true)
  const autoScrollRef = useRef(null)

  const checkScroll = () => {
    if (!scrollRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
    setShowLeftBtn(scrollLeft > 0)
    setShowRightBtn(scrollLeft < scrollWidth - clientWidth - 10)
  }


  useEffect(() => {
    const startAutoScroll = () => {
      autoScrollRef.current = setInterval(() => {
        if (scrollRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
          if (scrollLeft + clientWidth >= scrollWidth - 10) {
            scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' })
          } else {
            scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' })
          }
        }
      }, 3000)
    }

    startAutoScroll()

    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current)
    }
  }, [])

  const pauseAutoScroll = () => {
    if (autoScrollRef.current) clearInterval(autoScrollRef.current)
  }

  const resumeAutoScroll = () => {
    if (autoScrollRef.current) clearInterval(autoScrollRef.current)
    autoScrollRef.current = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' })
        } else {
          scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' })
        }
      }
    }, 3000)
  }

  const scroll = (direction) => {
    if (!scrollRef.current) return
    const { clientWidth } = scrollRef.current
    const scrollAmount = direction === 'left' ? -clientWidth / 1.5 : clientWidth / 1.5
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  }

  if (!products || products.length === 0) return null

  return (
    <div
      className="product-carousel-section"
      onMouseEnter={pauseAutoScroll}
      onMouseLeave={resumeAutoScroll}
    >
      <div className="carousel-header">
        <h2 className="carousel-title">{title}</h2>
        <div className="carousel-nav">
          <button
            className={`nav-btn ${!showLeftBtn ? 'disabled' : ''}`}
            onClick={() => scroll('left')}
            disabled={!showLeftBtn}
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className={`nav-btn ${!showRightBtn ? 'disabled' : ''}`}
            onClick={() => scroll('right')}
            disabled={!showRightBtn}
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div
        className="carousel-container"
        ref={scrollRef}
        onScroll={checkScroll}
      >
        {products.map(product => (
          <div key={product.id} className="carousel-item">
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <style>{`
        .product-carousel-section {
          margin-bottom: 4rem;
          position: relative;
        }

        .carousel-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          padding: 0 1rem;
        }

        .carousel-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--color-text-primary);
        }

        .carousel-nav {
          display: flex;
          gap: 1rem;
        }

        .nav-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid var(--color-border);
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
          color: var(--color-text-primary);
        }

        .nav-btn:hover:not(:disabled) {
          background: var(--color-text-primary);
          color: white;
          border-color: var(--color-text-primary);
        }

        .nav-btn:disabled, .nav-btn.disabled {
          opacity: 0.3;
          cursor: default;
          background: transparent;
          color: var(--color-text-secondary);
        }

        .carousel-container {
          display: flex;
          gap: 2rem;
          overflow-x: auto;
          scroll-behavior: smooth;
          scroll-snap-type: x mandatory;
          padding: 1rem 1rem 3rem 1rem;
          margin: 0 -1rem;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .carousel-container::-webkit-scrollbar {
          display: none;
        }

        .carousel-item {
          min-width: 320px;
          flex: 0 0 320px;
          scroll-snap-align: start;
        }

        @media (max-width: 768px) {
          .carousel-title {
            font-size: 1.8rem;
          }
          
          .carousel-item {
            min-width: 280px;
            flex: 0 0 280px;
          }
        }
      `}</style>
    </div>
  )
}

export default ProductCarousel
