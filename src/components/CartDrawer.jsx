import { X, Minus, Plus, ShoppingBag, ArrowRight, Trash2, Truck } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { useState, useEffect, useRef, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const FREE_SHIPPING_THRESHOLD = 20000

const SwipeableCartItem = ({ item, onRemove, onUpdateQuantity }) => {
  const [offset, setOffset] = useState(0)
  const [removing, setRemoving] = useState(false)
  const startXRef = useRef(0)
  const offsetRef = useRef(0)
  const isSwipedRef = useRef(false)
  const isDraggingRef = useRef(false)

  const snapToPosition = useCallback((currentOffset) => {
    if (currentOffset < -40) {
      setOffset(-90)
      offsetRef.current = -90
      isSwipedRef.current = true
    } else {
      setOffset(0)
      offsetRef.current = 0
      isSwipedRef.current = false
    }
  }, [])

  const handleTouchStart = (e) => {
    startXRef.current = e.touches[0].clientX
    isDraggingRef.current = true
  }

  const handleTouchMove = (e) => {
    if (!isDraggingRef.current) return
    const diff = e.touches[0].clientX - startXRef.current
    let newOffset
    if (isSwipedRef.current) {
      newOffset = Math.max(Math.min(-90 + diff, 0), -90)
    } else {
      newOffset = Math.max(Math.min(diff, 0), -90)
    }
    setOffset(newOffset)
    offsetRef.current = newOffset
  }

  const handleTouchEnd = () => {
    isDraggingRef.current = false
    snapToPosition(offsetRef.current)
  }

  useEffect(() => {
    const onMouseMove = (e) => {
      if (!isDraggingRef.current) return
      const diff = e.clientX - startXRef.current
      let newOffset
      if (isSwipedRef.current) {
        newOffset = Math.max(Math.min(-90 + diff, 0), -90)
      } else {
        newOffset = Math.max(Math.min(diff, 0), -90)
      }
      setOffset(newOffset)
      offsetRef.current = newOffset
    }

    const onMouseUp = () => {
      if (!isDraggingRef.current) return
      isDraggingRef.current = false
      snapToPosition(offsetRef.current)
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
    }
  }, [snapToPosition])

  const handleMouseDown = (e) => {
    e.preventDefault()
    startXRef.current = e.clientX
    isDraggingRef.current = true
  }

  const handleDelete = () => {
    setRemoving(true)
    setOffset(-400)
    setTimeout(() => onRemove(item.id), 300)
  }

  return (
    <div className={`swipe-wrapper ${removing ? 'removing' : ''}`}>
      <div className="swipe-delete-bg" onClick={handleDelete}>
        <Trash2 size={20} />
        <span>Видалити</span>
      </div>
      <div
        className="cart-item"
        style={{
          transform: `translateX(${offset}px)`,
          transition: isDraggingRef.current ? 'none' : 'transform 0.3s cubic-bezier(0.25, 1, 0.5, 1)'
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
      >
        <div className="item-image">
          <img src={item.image} alt={item.name} draggable="false" />
        </div>
        <div className="item-details">
          <h3>{item.name}</h3>
          <p className="item-price">{item.price.toLocaleString()} ₴</p>
          <div className="item-quantity">
            <button onClick={(e) => { e.stopPropagation(); onUpdateQuantity(item.id, -1) }}>
              <Minus size={14} />
            </button>
            <span>{item.quantity}</span>
            <button onClick={(e) => { e.stopPropagation(); onUpdateQuantity(item.id, 1) }}>
              <Plus size={14} />
            </button>
          </div>
        </div>
        <div className="item-total">
          {(item.price * item.quantity).toLocaleString()} ₴
        </div>
      </div>
    </div>
  )
}

const CartDrawer = () => {
  const {
    isOpen,
    closeCart,
    items,
    removeFromCart,
    updateQuantity,
    subtotal
  } = useCart()

  const navigate = useNavigate()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleCheckout = () => {
    closeCart()
    navigate('/checkout')
  }

  const shippingProgress = Math.min((subtotal / FREE_SHIPPING_THRESHOLD) * 100, 100)
  const remaining = FREE_SHIPPING_THRESHOLD - subtotal
  const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD

  if (!isOpen) return null

  return (
    <>
      <div className="cart-overlay" onClick={closeCart} />
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <div className="cart-header-left">
            <ShoppingBag size={20} />
            <h2>Кошик <span className="cart-count">{items.length}</span></h2>
          </div>
          <button className="close-btn" onClick={closeCart}>
            <X size={22} />
          </button>
        </div>

        {items.length > 0 && (
          <div className="shipping-bar">
            <div className="shipping-info">
              <Truck size={16} />
              {isFreeShipping ? (
                <span className="shipping-free">Безкоштовна доставка! 🎉</span>
              ) : (
                <span>До безкоштовної доставки ще <strong>{remaining.toLocaleString()} ₴</strong></span>
              )}
            </div>
            <div className="shipping-progress-track">
              <div
                className={`shipping-progress-fill ${isFreeShipping ? 'complete' : ''}`}
                style={{ width: `${shippingProgress}%` }}
              />
            </div>
          </div>
        )}

        <div className="cart-items">
          {items.length === 0 ? (
            <div className="empty-cart">
              <div className="empty-icon-wrapper">
                <ShoppingBag size={40} />
              </div>
              <h3>Кошик порожній</h3>
              <p>Додайте товари, які вам сподобались</p>
              <button className="btn-shop" onClick={closeCart}>Перейти до каталогу</button>
            </div>
          ) : (
            items.map(item => (
              <SwipeableCartItem
                key={item.id}
                item={item}
                onRemove={removeFromCart}
                onUpdateQuantity={updateQuantity}
              />
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-footer">
            <div className="subtotal">
              <span>Разом</span>
              <span className="subtotal-amount">{subtotal.toLocaleString()} ₴</span>
            </div>
            <button className="btn-checkout" onClick={handleCheckout}>
              Оформити замовлення
              <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>

      <style>{`
        .cart-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 1001;
          animation: fadeIn 0.3s ease;
        }

        .cart-drawer {
          position: fixed;
          top: 0;
          right: 0;
          width: 100%;
          max-width: 420px;
          height: 100%;
          background: #fafafa;
          z-index: 1002;
          display: flex;
          flex-direction: column;
          box-shadow: -20px 0 60px rgba(0, 0, 0, 0.12);
          animation: slideIn 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          border-radius: 24px 0 0 24px;
        }

        .cart-header {
          padding: 1.25rem 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: white;
          border-bottom: 1px solid rgba(0,0,0,0.06);
          border-radius: 24px 0 0 0;
        }

        .cart-header-left {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .cart-header h2 {
          font-size: 1.15rem;
          font-weight: 700;
          margin: 0;
          color: #1d1d1f;
        }

        .cart-count {
          background: #0071e3;
          color: white;
          font-size: 0.75rem;
          padding: 2px 8px;
          border-radius: 20px;
          margin-left: 4px;
          font-weight: 600;
        }

        .close-btn {
          background: #f5f5f7;
          border: none;
          cursor: pointer;
          padding: 8px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
          color: #1d1d1f;
        }

        .close-btn:hover {
          background: #e8e8ed;
          transform: rotate(90deg);
        }


        .shipping-bar {
          padding: 1rem 1.5rem;
          background: white;
          border-bottom: 1px solid rgba(0,0,0,0.06);
        }

        .shipping-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.82rem;
          color: #86868b;
          margin-bottom: 0.6rem;
        }

        .shipping-info strong {
          color: #1d1d1f;
        }

        .shipping-free {
          color: #34c759;
          font-weight: 600;
        }

        .shipping-progress-track {
          height: 4px;
          background: #e8e8ed;
          border-radius: 4px;
          overflow: hidden;
        }

        .shipping-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #0071e3, #00c6fb);
          border-radius: 4px;
          transition: width 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .shipping-progress-fill.complete {
          background: linear-gradient(90deg, #34c759, #30d158);
        }


        .cart-items {
          flex: 1;
          overflow-y: auto;
          padding: 0.75rem 0;
        }

        .cart-items::-webkit-scrollbar {
          width: 0;
        }


        .swipe-wrapper {
          position: relative;
          overflow: hidden;
          margin-bottom: 2px;
        }

        .swipe-delete-bg {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: 90px;
          background: linear-gradient(135deg, #ff3b30, #ff453a);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          color: white;
          font-size: 0.7rem;
          font-weight: 600;
          cursor: pointer;
          transition: opacity 0.2s;
        }

        .swipe-delete-bg:hover {
          background: linear-gradient(135deg, #e5342a, #ff453a);
        }

        .cart-item {
          display: flex;
          gap: 1rem;
          padding: 1rem 1.5rem;
          position: relative;
          background: #fafafa;
          align-items: center;
          user-select: none;
          cursor: grab;
        }

        .cart-item:active {
          cursor: grabbing;
        }

        .item-image {
          width: 72px;
          height: 72px;
          background: white;
          border-radius: 14px;
          overflow: hidden;
          flex-shrink: 0;
          border: 1px solid rgba(0,0,0,0.04);
        }

        .item-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 6px;
        }

        .item-details {
          flex: 1;
          min-width: 0;
        }

        .item-details h3 {
          font-size: 0.9rem;
          font-weight: 600;
          margin: 0 0 4px;
          color: #1d1d1f;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .item-price {
          color: #86868b;
          margin: 0 0 8px;
          font-size: 0.82rem;
        }

        .item-total {
          font-size: 0.95rem;
          font-weight: 700;
          color: #1d1d1f;
          white-space: nowrap;
        }

        .item-quantity {
          display: inline-flex;
          align-items: center;
          gap: 0;
          background: white;
          border-radius: 10px;
          border: 1px solid rgba(0,0,0,0.08);
          overflow: hidden;
        }

        .item-quantity button {
          background: none;
          border: none;
          padding: 6px 10px;
          display: flex;
          align-items: center;
          cursor: pointer;
          color: #1d1d1f;
          transition: background 0.15s;
        }

        .item-quantity button:hover {
          background: #f5f5f7;
        }

        .item-quantity button:active {
          background: #e8e8ed;
        }

        .item-quantity span {
          font-size: 0.85rem;
          min-width: 24px;
          text-align: center;
          font-weight: 600;
        }


        .cart-footer {
          padding: 1.25rem 1.5rem;
          padding-bottom: calc(1.25rem + env(safe-area-inset-bottom, 0px));
          background: white;
          border-top: 1px solid rgba(0,0,0,0.06);
          border-radius: 0 0 0 24px;
        }

        .subtotal {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .subtotal span:first-child {
          font-size: 0.95rem;
          color: #86868b;
          font-weight: 500;
        }

        .subtotal-amount {
          font-size: 1.25rem;
          font-weight: 800;
          color: #1d1d1f;
        }

        .btn-checkout {
          width: 100%;
          padding: 1rem;
          background: #1d1d1f;
          color: white;
          font-weight: 600;
          border-radius: 14px;
          border: none;
          cursor: pointer;
          transition: all 0.25s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-size: 0.95rem;
        }

        .btn-checkout:hover {
          background: #333;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
        }

        .btn-checkout:active {
          transform: translateY(0);
        }


        .empty-cart {
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 2rem;
        }

        .empty-icon-wrapper {
          width: 80px;
          height: 80px;
          background: #f5f5f7;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
          color: #86868b;
        }

        .empty-cart h3 {
          font-size: 1.1rem;
          font-weight: 700;
          color: #1d1d1f;
          margin: 0 0 0.5rem;
        }

        .empty-cart p {
          color: #86868b;
          font-size: 0.9rem;
          margin: 0;
        }

        .btn-shop {
          margin-top: 1.5rem;
          padding: 0.8rem 2rem;
          background: #1d1d1f;
          color: white;
          border-radius: 999px;
          font-weight: 600;
          font-size: 0.9rem;
          border: none;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-shop:hover {
          background: #333;
          transform: translateY(-1px);
        }

        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @media (max-width: 440px) {
          .cart-drawer {
            max-width: 100%;
            border-radius: 0;
          }
          .cart-header {
            border-radius: 0;
          }
        }
      `}</style>
    </>
  )
}

export default CartDrawer
