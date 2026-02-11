import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Send, Phone, X } from 'lucide-react'

const Footer = () => {
  const [showContacts, setShowContacts] = useState(false)

  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h3>NextStore</h3>
              <p>Преміальна техніка для сучасних творців.</p>
            </div>
            <div className="footer-col">
              <h4 className="section-title">Каталог</h4>
              <Link to="/shop" className="footer-link">Телефони</Link>
              <Link to="/shop" className="footer-link">Планшети</Link>
              <Link to="/shop" className="footer-link">Аудіо</Link>
            </div>
            <div className="footer-col">
              <h4 className="section-title">Клієнтам</h4>
              <button onClick={() => setShowContacts(true)} className="footer-link contact-btn">
                Контакти
              </button>
              <Link to="/shop" className="footer-link">Повернення</Link>
              <Link to="/shop" className="footer-link">FAQ</Link>
            </div>
            <div className="footer-col">
              <h4 className="section-title">Юридична інформація</h4>
              <a href="#" className="footer-link">Політика конфіденційності</a>
              <a href="#" className="footer-link">Умови використання</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 NextStore Inc. Всі права захищені.</p>
          </div>
        </div>
      </footer>

      {showContacts && (
        <div className="modal-overlay" onClick={() => setShowContacts(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowContacts(false)}>
              <X size={24} />
            </button>
            <h2>Наші Контакти</h2>
            <p className="modal-desc">Зв'яжіться з нами у будь-який зручний спосіб</p>

            <div className="contacts-list">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="contact-item instagram">
                <div className="icon-box"><Instagram size={28} /></div>
                <div>
                  <h3>Instagram</h3>
                  <p>@nextstore_ua</p>
                </div>
              </a>

              <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="contact-item telegram">
                <div className="icon-box"><Send size={28} /></div>
                <div>
                  <h3>Telegram</h3>
                  <p>@nextstore_support</p>
                </div>
              </a>

              <a href="tel:+380000000000" className="contact-item phone">
                <div className="icon-box"><Phone size={28} /></div>
                <div>
                  <h3>Телефон</h3>
                  <p>+380 00 000 00 00</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .site-footer {
          background: var(--color-bg-secondary);
          padding: 5rem 0 3rem;
          margin-top: 6rem;
          color: var(--color-text-secondary);
          border-top: 1px solid var(--color-border);
        }
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 3rem;
          margin-bottom: 4rem;
        }
        .footer-col h3 {
          color: var(--color-text-primary);
          margin-bottom: 1.2rem;
          font-weight: 800;
          letter-spacing: -0.02em;
        }
        .section-title {
          color: var(--color-text-primary);
          margin-bottom: 1.2rem;
          font-size: 0.95rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .footer-link {
          display: block;
          margin-bottom: 0.8rem;
          font-size: 0.95rem;
          transition: all 0.2s;
          color: var(--color-text-secondary);
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          text-decoration: none;
        }
        .contact-btn {
          font-family: inherit;
        }
        .footer-link:hover {
          color: var(--color-accent);
          transform: translateX(4px);
        }
        .footer-bottom {
          border-top: 1px solid rgba(0,0,0,0.05);
          padding-top: 2rem;
          text-align: center;
          font-size: 0.8rem;
        }



        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(5px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.3s ease;
        }

        .modal-content {
          background: white;
          padding: 2.5rem;
          border-radius: 24px;
          width: 90%;
          max-width: 450px;
          position: relative;
          box-shadow: 0 20px 60px rgba(0,0,0,0.2);
          animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .modal-close {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: var(--color-bg-secondary);
          border: none;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
        }
        .modal-close:hover {
          background: #eee;
          transform: rotate(90deg);
        }

        .modal-content h2 {
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
        }

        .modal-desc {
          color: var(--color-text-secondary);
          margin-bottom: 2rem;
        }

        .contacts-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          border-radius: 16px;
          background: var(--color-bg-secondary);
          text-decoration: none;
          color: var(--color-text-primary);
          transition: all 0.3s;
          border: 1px solid transparent;
        }

        .contact-item:hover {
          background: white;
          border-color: var(--color-border);
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          transform: translateY(-2px);
        }

        .icon-box {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }
        
        .instagram .icon-box { background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888); }
        .telegram .icon-box { background: #0088cc; }
        .phone .icon-box { background: #34c759; }

        .contact-item h3 {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 2px;
        }
        
        .contact-item p {
          font-size: 0.9rem;
          color: var(--color-text-secondary);
        }

        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </>
  )
}

export default Footer
