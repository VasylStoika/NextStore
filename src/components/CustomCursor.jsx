import { useEffect, useRef, useState } from 'react'

const CustomCursor = () => {
    const cursorRef = useRef(null)
    const pos = useRef({ x: -100, y: -100 })
    const target = useRef({ x: -100, y: -100 })
    const [isHovering, setIsHovering] = useState(false)
    const [isClicking, setIsClicking] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const rafRef = useRef(null)

    useEffect(() => {
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
        if (isTouchDevice) return

        const onMouseMove = (e) => {
            target.current = { x: e.clientX, y: e.clientY }
            if (!isVisible) setIsVisible(true)
        }

        const onMouseDown = () => setIsClicking(true)
        const onMouseUp = () => setIsClicking(false)

        const onMouseEnterInteractive = () => setIsHovering(true)
        const onMouseLeaveInteractive = () => setIsHovering(false)

        const onMouseLeaveWindow = () => setIsVisible(false)
        const onMouseEnterWindow = () => setIsVisible(true)

        const addInteractiveListeners = () => {
            const els = document.querySelectorAll(
                'a, button, [role="button"], input, select, textarea, .product-card, .category-card, .category-btn, .nav-btn, .add-btn-mini, .btn-primary, .btn-secondary, .btn-checkout, .btn-shop, .close-btn, .card-link'
            )
            els.forEach(el => {
                el.addEventListener('mouseenter', onMouseEnterInteractive)
                el.addEventListener('mouseleave', onMouseLeaveInteractive)
            })
            return els
        }

        document.addEventListener('mousemove', onMouseMove)
        document.addEventListener('mousedown', onMouseDown)
        document.addEventListener('mouseup', onMouseUp)
        document.documentElement.addEventListener('mouseleave', onMouseLeaveWindow)
        document.documentElement.addEventListener('mouseenter', onMouseEnterWindow)

        let interactiveEls = addInteractiveListeners()

        const observer = new MutationObserver(() => {
            interactiveEls.forEach(el => {
                el.removeEventListener('mouseenter', onMouseEnterInteractive)
                el.removeEventListener('mouseleave', onMouseLeaveInteractive)
            })
            interactiveEls = addInteractiveListeners()
        })
        observer.observe(document.body, { childList: true, subtree: true })

        const animate = () => {
            pos.current.x += (target.current.x - pos.current.x) * 0.12
            pos.current.y += (target.current.y - pos.current.y) * 0.12
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`
            }
            rafRef.current = requestAnimationFrame(animate)
        }
        rafRef.current = requestAnimationFrame(animate)

        return () => {
            document.removeEventListener('mousemove', onMouseMove)
            document.removeEventListener('mousedown', onMouseDown)
            document.removeEventListener('mouseup', onMouseUp)
            document.documentElement.removeEventListener('mouseleave', onMouseLeaveWindow)
            document.documentElement.removeEventListener('mouseenter', onMouseEnterWindow)
            interactiveEls.forEach(el => {
                el.removeEventListener('mouseenter', onMouseEnterInteractive)
                el.removeEventListener('mouseleave', onMouseLeaveInteractive)
            })
            observer.disconnect()
            if (rafRef.current) cancelAnimationFrame(rafRef.current)
        }
    }, [isVisible])

    const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)
    if (isTouchDevice) return null

    return (
        <>
            <div
                ref={cursorRef}
                className={`custom-cursor ${isVisible ? 'visible' : ''} ${isHovering ? 'hovering' : ''} ${isClicking ? 'clicking' : ''}`}
            />

            <style>{`
        .custom-cursor {
          position: fixed;
          top: 0;
          left: 0;
          width: 20px;
          height: 20px;
          margin-left: -10px;
          margin-top: -10px;
          background: radial-gradient(circle, #3b9eff 0%, #0071e3 50%, #005bb5 100%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 99999;
          opacity: 0;
          box-shadow: 0 0 12px 4px rgba(0, 113, 227, 0.35),
                      0 0 24px 8px rgba(0, 113, 227, 0.15);
          transition: opacity 0.3s,
                      width 0.35s cubic-bezier(0.25, 1, 0.5, 1),
                      height 0.35s cubic-bezier(0.25, 1, 0.5, 1),
                      margin 0.35s cubic-bezier(0.25, 1, 0.5, 1),
                      box-shadow 0.35s cubic-bezier(0.25, 1, 0.5, 1),
                      background 0.35s;
          will-change: transform;
        }

        .custom-cursor.visible {
          opacity: 1;
        }

        .custom-cursor.hovering {
          width: 44px;
          height: 44px;
          margin-left: -22px;
          margin-top: -22px;
          background: radial-gradient(circle, #5aadff 0%, #0071e3 60%, #005bb5 100%);
          box-shadow: 0 0 20px 6px rgba(0, 113, 227, 0.4),
                      0 0 40px 14px rgba(0, 113, 227, 0.15);
        }

        .custom-cursor.clicking {
          width: 14px;
          height: 14px;
          margin-left: -7px;
          margin-top: -7px;
          background: radial-gradient(circle, #66b3ff 0%, #0077ed 60%, #004fa3 100%);
          box-shadow: 0 0 16px 6px rgba(0, 113, 227, 0.5),
                      0 0 32px 12px rgba(0, 113, 227, 0.2);
        }

        @media (hover: none), (pointer: coarse) {
          .custom-cursor {
            display: none !important;
          }
        }
      `}</style>
        </>
    )
}

export default CustomCursor
