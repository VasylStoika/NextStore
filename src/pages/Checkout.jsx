import { useState, useEffect, useRef } from 'react'
import { useCart } from '../context/CartContext'
import { CreditCard, Truck, Banknote, ArrowRight, CheckCircle, Search, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { searchCities, getWarehouses } from '../services/novaPoshta'

const Checkout = () => {
  const { items, subtotal } = useCart()
  const [step, setStep] = useState(1)
  const [loadingCities, setLoadingCities] = useState(false)
  const [loadingWarehouses, setLoadingWarehouses] = useState(false)


  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('card')


  const [cityQuery, setCityQuery] = useState('')
  const [cities, setCities] = useState([])
  const [selectedCity, setSelectedCity] = useState(null)
  const [showCityDropdown, setShowCityDropdown] = useState(false)

  const [warehouses, setWarehouses] = useState([])
  const [selectedWarehouse, setSelectedWarehouse] = useState(null)
  const [showWarehouseDropdown, setShowWarehouseDropdown] = useState(false)
  const [warehouseQuery, setWarehouseQuery] = useState('')


  useEffect(() => {
    const timer = setTimeout(async () => {
      if (cityQuery.length >= 1 && !selectedCity) {
        setLoadingCities(true)
        const results = await searchCities(cityQuery)
        setCities(results)
        setLoadingCities(false)
        setShowCityDropdown(true)
      } else if (cityQuery.length < 1) {
        setCities([])
        setShowCityDropdown(false)
      }
    }, 300)
    return () => clearTimeout(timer)
  }, [cityQuery, selectedCity])


  useEffect(() => {
    if (selectedCity) {
      const fetchWarehouses = async () => {
        setLoadingWarehouses(true)
        const results = await getWarehouses(selectedCity.ref)
        setWarehouses(results)
        setLoadingWarehouses(false)
      }
      fetchWarehouses()
    } else {
      setWarehouses([])
      setSelectedWarehouse(null)
      setWarehouseQuery('')
    }
  }, [selectedCity])

  const handleCitySelect = (city) => {
    setSelectedCity(city)
    setCityQuery(city.label)
    setShowCityDropdown(false)

    setSelectedWarehouse(null)
    setWarehouseQuery('')
  }

  const handleWarehouseSelect = (warehouse) => {
    setSelectedWarehouse(warehouse)
    setWarehouseQuery(warehouse.label)
    setShowWarehouseDropdown(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (step < 2) {
      if (!selectedCity || !selectedWarehouse || !firstName || !lastName || !phone) {
        alert('Будь ласка, заповніть всі поля')
        return
      }
      setStep(step + 1)
    } else {
      setTimeout(() => setStep(3), 1500)
    }
  }

  const filteredWarehouses = warehouses.filter(w =>
    w.label.toLowerCase().includes(warehouseQuery.toLowerCase())
  )

  if (items.length === 0 && step !== 3) {
    return (
      <div className="container empty-checkout">
        <h1>Ваш кошик порожній</h1>
        <Link to="/shop" className="btn-primary">Перейти до каталогу</Link>
      </div>
    )
  }

  if (step === 3) {
    return (
      <div className="success-page-wrapper">
        <style>{`
          .success-page-wrapper {
            min-height: 100vh;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 120px 24px 60px;
            background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
          }
          .success-card {
            background: white;
            padding: 3rem 2.5rem;
            border-radius: 28px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.04), 0 20px 60px rgba(0,0,0,0.08);
            text-align: center;
            max-width: 460px;
            width: 100%;
            animation: cardAppear 0.7s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .success-icon-container {
            width: 90px;
            height: 90px;
            background: linear-gradient(135deg, #34c759 0%, #30d158 100%);
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1.5rem;
            box-shadow: 0 12px 30px rgba(52, 199, 89, 0.35);
            animation: iconBounce 0.6s 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) both;
          }
          .success-card .success-title {
            font-size: 1.8rem;
            font-weight: 800;
            margin: 0 0 0.75rem;
            color: #1d1d1f;
            letter-spacing: -0.02em;
          }
          .success-card .success-message {
            color: #86868b;
            margin: 0 0 2rem;
            line-height: 1.6;
            font-size: 0.95rem;
          }
          .order-id {
            color: #1d1d1f;
            font-weight: 700;
            background: #f5f5f7;
            padding: 3px 8px;
            border-radius: 6px;
            font-size: 0.9rem;
          }
          .order-summary-box {
            background: #f5f5f7;
            padding: 1.25rem 1.5rem;
            border-radius: 16px;
            margin-bottom: 1.5rem;
            text-align: left;
          }
          .order-summary-box .summary-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 0.75rem;
          }
          .order-summary-box .summary-row span:first-child {
            font-size: 0.95rem;
            font-weight: 600;
            color: #1d1d1f;
          }
          .order-summary-box .total-amount {
            color: #0071e3;
            font-size: 1.3rem;
            font-weight: 800;
          }
          .shipping-note {
            font-size: 0.85rem;
            color: #86868b;
            margin: 0;
            line-height: 1.5;
          }
          .success-page-wrapper .btn-primary.full-width {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #0071e3;
            color: white;
            padding: 1rem 2rem;
            border-radius: 14px;
            font-weight: 600;
            font-size: 1rem;
            border: none;
            cursor: pointer;
            transition: all 0.25s ease;
            text-decoration: none;
          }
          .success-page-wrapper .btn-primary.full-width:hover {
            background: #0077ed;
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(0, 113, 227, 0.3);
          }
          @keyframes cardAppear {
            from { opacity: 0; transform: translateY(30px) scale(0.96); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }
          @keyframes iconBounce {
            from { opacity: 0; transform: scale(0); }
            to { opacity: 1; transform: scale(1); }
          }
          @media (max-width: 500px) {
            .success-page-wrapper { padding: 100px 16px 40px; }
            .success-card { padding: 2rem 1.5rem; border-radius: 20px; }
            .success-card .success-title { font-size: 1.5rem; }
          }
        `}</style>

        <div className="success-card">
          <div className="success-icon-container">
            <CheckCircle size={44} strokeWidth={2.5} />
          </div>

          <h1 className="success-title">Замовлення прийнято!</h1>
          <p className="success-message">
            Дякуємо, {firstName}! Ваше замовлення <span className="order-id">#{Math.floor(Math.random() * 10000)}</span> успішно оформлено.
          </p>

          <div className="order-summary-box">
            <div className="summary-row">
              <span>Сума до сплати:</span>
              <span className="total-amount">{subtotal.toLocaleString()} ₴</span>
            </div>
            <p className="shipping-note">
              Ми зв'яжемося з вами найближчим часом для підтвердження деталей доставки.
            </p>
          </div>

          <Link to="/" className="btn-primary full-width">
            Продовжити покупки
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="checkout-page container">
      <h1 className="page-title">Оформлення замовлення</h1>

      <div className="checkout-grid">
        <div className="checkout-form-section">
          <div className="steps-indicator">
            <div className={`step ${step >= 1 ? 'active' : ''}`}>1. Доставка</div>
            <div className="step-line"></div>
            <div className={`step ${step >= 2 ? 'active' : ''}`}>2. Оплата</div>
          </div>

          <form onSubmit={handleSubmit} className="checkout-form">
            {step === 1 ? (
              <div className="form-step fade-in">
                <h2>Контактні дані</h2>
                <div className="form-row">
                  <div className="form-group">
                    <label>Ім'я</label>
                    <input
                      type="text"
                      required
                      value={firstName}
                      onChange={e => setFirstName(e.target.value)}
                      placeholder="Іван"
                    />
                  </div>
                  <div className="form-group">
                    <label>Прізвище</label>
                    <input
                      type="text"
                      required
                      value={lastName}
                      onChange={e => setLastName(e.target.value)}
                      placeholder="Петренко"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Телефон</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="+380 00 000 00 00"
                  />
                </div>

                <h2 style={{ marginTop: '2rem' }}>Доставка (Нова Пошта)</h2>

                <div className="form-group dropdown-group">
                  <label>Місто</label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      value={cityQuery}
                      onChange={e => {
                        setCityQuery(e.target.value)
                        setSelectedCity(null)
                      }}
                      onFocus={() => {
                        if (cities.length > 0) setShowCityDropdown(true)
                      }}
                      placeholder="Почніть вводити назву міста..."
                      required
                    />
                    {loadingCities && <div className="loader-spinner"></div>}
                  </div>

                  {showCityDropdown && cities.length > 0 && (
                    <div className="dropdown-list">
                      {cities.map((city, idx) => (
                        <div
                          key={idx}
                          className="dropdown-item"
                          onClick={() => handleCitySelect(city)}
                        >
                          {city.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="form-group dropdown-group">
                  <label>Відділення</label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      value={warehouseQuery}
                      onChange={e => {
                        setWarehouseQuery(e.target.value)
                        setShowWarehouseDropdown(true)
                      }}
                      onFocus={() => setShowWarehouseDropdown(true)}
                      placeholder={selectedCity ? "Оберіть відділення..." : "Спочатку оберіть місто"}
                      disabled={!selectedCity}
                      required
                    />
                    <ChevronDown size={16} className="input-icon" />
                  </div>

                  {showWarehouseDropdown && selectedCity && (
                    <div className="dropdown-list">
                      {loadingWarehouses ? (
                        <div className="dropdown-item">Завантаження...</div>
                      ) : filteredWarehouses.length > 0 ? (
                        filteredWarehouses.map((warehouse) => (
                          <div
                            key={warehouse.value}
                            className="dropdown-item"
                            onClick={() => handleWarehouseSelect(warehouse)}
                          >
                            {warehouse.label}
                          </div>
                        ))
                      ) : (
                        <div className="dropdown-item">Нічого не знайдено</div>
                      )}
                    </div>
                  )}
                </div>

                <button type="submit" className="btn-next">
                  Далі до оплати <ArrowRight size={18} />
                </button>
              </div>
            ) : (
              <div className="form-step fade-in">
                <h2>Виберіть спосіб оплати</h2>

                <div className="payment-methods">
                  <label className={`payment-option ${paymentMethod === 'card' ? 'selected' : ''}`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={() => setPaymentMethod('card')}
                    />
                    <div className="option-content">
                      <CreditCard size={24} />
                      <div>
                        <h3>Оплата карткою</h3>
                        <p>Visa / Mastercard / Apple Pay</p>
                      </div>
                    </div>
                  </label>

                  <label className={`payment-option ${paymentMethod === 'cod' ? 'selected' : ''}`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={paymentMethod === 'cod'}
                      onChange={() => setPaymentMethod('cod')}
                    />
                    <div className="option-content">
                      <Truck size={24} />
                      <div>
                        <h3>Накладений платіж</h3>
                        <p>Оплата при отриманні (+ комісія НП)</p>
                      </div>
                    </div>
                  </label>


                </div>

                <div className="summary-card">
                  <h3>Дані доставки:</h3>
                  <p>{firstName} {lastName}</p>
                  <p>{phone}</p>
                  <p>{selectedCity?.label}</p>
                  <p>{selectedWarehouse?.label}</p>
                </div>

                <div className="payment-actions">
                  <button type="button" className="btn-back" onClick={() => setStep(1)}>
                    Назад
                  </button>
                  <button type="submit" className="btn-confirm">
                    Підтвердити замовлення ({subtotal} ₴)
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>

        <div className="checkout-summary">
          <h2>Ваше замовлення</h2>
          <div className="summary-items">
            {items.map(item => (
              <div key={item.id} className="summary-item">
                <div className="summary-img">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="summary-details">
                  <h4>{item.name}</h4>
                  <p>x{item.quantity}</p>
                </div>
                <div className="summary-price">
                  {item.price * item.quantity} ₴
                </div>
              </div>
            ))}
          </div>
          <div className="summary-total">
            <span>Разом до сплати:</span>
            <span className="total-amount">{subtotal} ₴</span>
          </div>
        </div>
      </div>

      <style>{`
        .checkout-page {
          padding-top: 100px;
          padding-bottom: 4rem;
          min-height: 100vh;
        }

        .empty-checkout {
          padding-top: 140px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          max-width: 600px;
          margin: 0 auto;
          width: 100%;
        }

        .success-page-wrapper {
          min-height: 80vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 100px 20px 50px;
        }

        .success-card {
          background: white;
          padding: 3.5rem 2.5rem;
          border-radius: 32px;
          box-shadow: 0 25px 80px -12px rgba(0, 0, 0, 0.15);
          text-align: center;
          max-width: 480px;
          width: 100%;
          border: 1px solid rgba(0,0,0,0.04);
          animation: popIn 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .success-icon-container {
          width: 88px;
          height: 88px;
          background: rgba(52, 199, 89, 0.1);
          color: #34c759;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
        }

        .success-title {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 1rem;
          color: var(--color-text-primary);
          letter-spacing: -0.02em;
        }

        .success-message {
          color: var(--color-text-secondary);
          margin-bottom: 2rem;
          line-height: 1.5;
          font-size: 1rem;
        }

        .order-id {
          color: var(--color-text-primary);
          font-weight: 700;
          background: var(--color-bg-secondary);
          padding: 2px 6px;
          border-radius: 6px;
        }

        .order-summary-box {
          background: var(--color-bg-secondary);
          padding: 1.25rem;
          border-radius: 20px;
          margin-bottom: 2rem;
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--color-text-primary);
        }

        .total-amount {
          color: var(--color-accent);
          font-size: 1.4rem;
          font-weight: 800;
        }

        .shipping-note {
          font-size: 0.85rem;
          color: var(--color-text-secondary);
          margin: 0;
          line-height: 1.4;
        }

        .full-width {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        @keyframes scaleIn {
          from { transform: scale(0); }
          to { transform: scale(1); }
        }
        
        @keyframes slideUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes popIn {
          from { transform: scale(0); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        .order-details-card {
          background: white;
          padding: 2rem;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          width: 100%;
          margin-bottom: 2rem;
        }

        .btn-primary {
          background: var(--color-accent);
          color: white;
          padding: 1rem 2.5rem;
          border-radius: 999px;
          font-weight: 600;
          transition: all 0.3s;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0, 113, 227, 0.2);
        }

        .checkout-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 4rem;
          align-items: start;
        }


        @media (max-width: 900px) {
          .checkout-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .checkout-summary {
            order: 2; 
          }
          .checkout-form-section {
            order: 1;
          }
        }

        .checkout-form-section {
          background: #fff;
        }

        .steps-indicator {
          display: flex;
          align-items: center;
          margin-bottom: 2.5rem;
          font-weight: 500;
          color: var(--color-text-secondary);
        }

        .step.active {
          color: var(--color-accent);
          font-weight: 700;
        }

        .step-line {
          height: 1px;
          background: var(--color-border);
          flex: 1;
          margin: 0 1rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        @media (max-width: 600px) {
          .form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
        }

        .form-group {
          margin-bottom: 1.5rem;
          position: relative;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.6rem;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-text-secondary);
        }

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-icon {
          position: absolute;
          right: 14px;
          color: var(--color-text-secondary);
          pointer-events: none;
        }

        .form-group input {
          width: 100%;
          padding: 0.9rem 1rem;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          font-family: inherit;
          font-size: 1rem;
          transition: all 0.2s;
          background: var(--color-bg-secondary);
        }

        .form-group input:focus {
          outline: none;
          background: white;
          border-color: var(--color-accent);
          box-shadow: 0 0 0 3px rgba(0, 113, 227, 0.1);
        }

        .form-group input:disabled {
          background-color: var(--color-bg-secondary);
          cursor: not-allowed;
          opacity: 0.7;
        }


        .dropdown-list {
          position: absolute;
          top: calc(100% + 5px);
          left: 0;
          width: 100%;
          background: white;
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: var(--radius-md);
          max-height: 280px;
          overflow-y: auto;
          z-index: 100;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
          padding: 5px;
        }

        .dropdown-item {
          padding: 12px 16px;
          cursor: pointer;
          font-size: 0.95rem;
          border-radius: var(--radius-sm);
          transition: background 0.1s;
        }

        .dropdown-item:hover {
          background: var(--color-bg-secondary);
          color: var(--color-accent);
        }

        .loader-spinner {
          width: 18px;
          height: 18px;
          border: 2px solid var(--color-border);
          border-top-color: var(--color-accent);
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
          position: absolute;
          right: 14px;
        }
        
        @keyframes spin { to { transform: rotate(360deg); } }

        .payment-option {
          display: block;
          margin-bottom: 1rem;
          cursor: pointer;
        }

        .payment-option input {
          display: none;
        }

        .option-content {
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1.2rem;
          transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
        }
        
        .option-content:hover {
          border-color: var(--color-text-secondary);
        }

        .payment-option input:checked + .option-content {
          border-color: var(--color-accent);
          background: rgba(0, 113, 227, 0.04);
          box-shadow: 0 0 0 1px var(--color-accent);
        }

        .option-content h3 {
          font-size: 1.05rem;
          margin-bottom: 0.3rem;
          font-weight: 600;
        }

        .option-content p {
          font-size: 0.9rem;
          color: var(--color-text-secondary);
        }

        .payment-actions {
          display: flex;
          gap: 1rem;
          margin-top: 2.5rem;
        }

        .btn-next, .btn-confirm {
          background: var(--color-accent);
          color: white;
          border-radius: 999px;
          padding: 1.1rem 2.5rem;
          font-weight: 600;
          font-size: 1.05rem;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          width: 100%;
          justify-content: center;
          transition: all 0.3s;
          box-shadow: 0 4px 12px rgba(0, 113, 227, 0.2);
        }

        .btn-next:hover, .btn-confirm:hover {
          background: var(--color-accent-hover);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 113, 227, 0.3);
        }

        .btn-back {
          background: transparent;
          border: 1px solid var(--color-border);
          color: var(--color-text-primary);
          border-radius: 999px;
          padding: 1.1rem 2.5rem;
          font-weight: 600;
          font-size: 1.05rem;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .btn-back:hover {
          background: var(--color-bg-secondary);
          border-color: var(--color-text-primary);
        }

        .checkout-summary {
          background: var(--color-bg-secondary);
          padding: 2.5rem;
          border-radius: var(--radius-xl);
          height: fit-content;
          position: sticky;
          top: 120px;
        }

        .summary-item {
          display: flex;
          gap: 1.2rem;
          margin-bottom: 1.2rem;
          padding-bottom: 1.2rem;
          border-bottom: 1px solid rgba(0,0,0,0.06);
        }

        .summary-img {
          width: 70px;
          height: 70px;
          border-radius: var(--radius-md);
          overflow: hidden;
          background: white;
          flex-shrink: 0;
          border: 1px solid rgba(0,0,0,0.04);
        }
        
        .summary-img img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .summary-details {
          flex: 1;
        }

        .summary-details h4 {
          font-size: 1rem;
          margin-bottom: 0.3rem;
          font-weight: 600;
        }
        
        .summary-details p {
           color: var(--color-text-secondary);
           font-size: 0.9rem;
        }

        .summary-price {
          font-weight: 700;
          font-size: 1.1rem;
        }

        .summary-total {
          display: flex;
          justify-content: space-between;
          margin-top: 2rem;
          font-size: 1.4rem;
          font-weight: 800;
          border-top: 1px solid rgba(0,0,0,0.1);
          padding-top: 1.5rem;
        }

        .summary-card {
           background: white;
           padding: 1.5rem;
           border-radius: var(--radius-lg);
           margin-top: 2rem;
           border: 1px solid var(--color-border);
           box-shadow: var(--shadow-sm);
        }
        .summary-card h3 { font-size: 1.1rem; margin-bottom: 0.8rem; }
        .summary-card p { font-size: 0.95rem; color: var(--color-text-secondary); margin-bottom: 0.4rem; }
      `}</style>
    </div>
  )
}

export default Checkout
