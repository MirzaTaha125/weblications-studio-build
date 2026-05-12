import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, Unlock } from 'lucide-react';

export default function UnlockDiscountModal({ isOpen, onClose }) {
  const [unlocked, setUnlocked] = React.useState(false);
  const [stage, setStage] = React.useState('lock'); // 'lock' or 'form'

  React.useEffect(() => {
    if (isOpen) {
      setStage('lock');
      setUnlocked(false);
      
      // Step 1: Unlock after 500ms
      const unlockTimer = setTimeout(() => setUnlocked(true), 500);
      
      // Step 2: Transition to form after 1500ms
      const stageTimer = setTimeout(() => setStage('form'), 1500);
      
      return () => {
        clearTimeout(unlockTimer);
        clearTimeout(stageTimer);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        className="modal-overlay"
        style={{
          position: 'fixed', inset: 0, 
          background: stage === 'lock' ? 'rgba(0,0,0,0)' : 'rgba(0,0,0,0.85)',
          zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center',
          backdropFilter: stage === 'lock' ? 'none' : 'blur(10px)',
          transition: 'background 0.5s, backdrop-filter 0.5s'
        }}
        onClick={onClose}
      >
        {stage === 'lock' ? (
          <motion.div
            key="lock-stage"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.2, opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#fff' }}
          >
            <motion.div
              animate={{ scale: unlocked ? [1, 1.2, 1] : 1 }}
              transition={{ duration: 0.5 }}
              style={{
                background: 'rgba(255,255,255,0.1)', borderRadius: '50%',
                width: 120, height: 120, display: 'flex', alignItems: 'center',
                justifyContent: 'center', marginBottom: 24, border: '2px solid rgba(255,255,255,0.2)',
                backdropFilter: 'blur(5px)'
              }}
            >
              {unlocked ? (
                <Unlock size={60} color="#F47A1F" />
              ) : (
                <Lock size={60} color="#fff" />
              )}
            </motion.div>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', letterSpacing: '1px' }}>
              {unlocked ? "Unlocked!" : "Unlocking Exclusive Discount..."}
            </h2>
          </motion.div>
        ) : (
          <motion.div
            key="form-stage"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 20 }}
            style={{
              background: '#fff', width: '90%', maxWidth: '900px',
              borderRadius: '24px', overflow: 'hidden', display: 'grid',
              gridTemplateColumns: '1fr 1.2fr', position: 'relative'
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              style={{
                position: 'absolute', top: 20, right: 20,
                background: 'rgba(0,0,0,0.1)', border: 'none',
                borderRadius: '50%', width: 40, height: 40,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', zIndex: 10
              }}
            >
              <X size={20} color="#333" />
            </button>

            {/* Left Side: Image */}
            <div style={{ position: 'relative', height: '100%', minHeight: '400px' }}>
              <img
                src="/call_center_agent.png"
                alt="Call Center Agent"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(244, 122, 31, 0.4), transparent)'
              }} />
            </div>

            {/* Right Side: Form */}
            <div style={{ padding: '48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h2 style={{ fontSize: '2rem', color: '#1A1818', marginBottom: 8, fontWeight: '800' }}>Grab Your Discount</h2>
              <p style={{ color: '#666', marginBottom: 32, fontSize: '1rem' }}>Fill in the details below to unlock your exclusive discount on our premium services.</p>

              <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: 6, fontSize: '0.85rem', fontWeight: '600', color: '#333' }}>Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    style={{
                      width: '100%', padding: '12px 16px', borderRadius: '10px',
                      border: '1px solid #ddd', fontSize: '0.95rem', outline: 'none',
                      transition: 'border-color 0.3s'
                    }}
                    onFocus={e => e.target.style.borderColor = '#F47A1F'}
                    onBlur={e => e.target.style.borderColor = '#ddd'}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: 6, fontSize: '0.85rem', fontWeight: '600', color: '#333' }}>Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    style={{
                      width: '100%', padding: '12px 16px', borderRadius: '10px',
                      border: '1px solid #ddd', fontSize: '0.95rem', outline: 'none',
                      transition: 'border-color 0.3s'
                    }}
                    onFocus={e => e.target.style.borderColor = '#F47A1F'}
                    onBlur={e => e.target.style.borderColor = '#ddd'}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: 6, fontSize: '0.85rem', fontWeight: '600', color: '#333' }}>Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+92 300 1234567"
                    style={{
                      width: '100%', padding: '12px 16px', borderRadius: '10px',
                      border: '1px solid #ddd', fontSize: '0.95rem', outline: 'none',
                      transition: 'border-color 0.3s'
                    }}
                    onFocus={e => e.target.style.borderColor = '#F47A1F'}
                    onBlur={e => e.target.style.borderColor = '#ddd'}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: 6, fontSize: '0.85rem', fontWeight: '600', color: '#333' }}>Select Service</label>
                  <select
                    style={{
                      width: '100%', padding: '12px 16px', borderRadius: '10px',
                      border: '1px solid #ddd', fontSize: '0.95rem', outline: 'none',
                      transition: 'border-color 0.3s', background: '#fff'
                    }}
                    onFocus={e => e.target.style.borderColor = '#F47A1F'}
                    onBlur={e => e.target.style.borderColor = '#ddd'}
                  >
                    <option value="">Choose a service...</option>
                    <option value="web">Website Development</option>
                    <option value="app">Mobile App Development</option>
                    <option value="uiux">UI/UX Design</option>
                    <option value="ecommerce">E-Commerce Store</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: 6, fontSize: '0.85rem', fontWeight: '600', color: '#333' }}>Message</label>
                  <textarea
                    placeholder="Tell us about your project..."
                    style={{
                      width: '100%', padding: '12px 16px', borderRadius: '10px',
                      border: '1px solid #ddd', fontSize: '0.95rem', outline: 'none',
                      transition: 'border-color 0.3s', height: '80px', resize: 'none'
                    }}
                    onFocus={e => e.target.style.borderColor = '#F47A1F'}
                    onBlur={e => e.target.style.borderColor = '#ddd'}
                  ></textarea>
                </div>
                <button
                  className="btn btn-primary"
                  style={{ marginTop: '5px', padding: '14px', borderRadius: '10px', fontSize: '1rem' }}
                  onClick={e => e.preventDefault()}
                >
                  Claim Discount Now
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
}
