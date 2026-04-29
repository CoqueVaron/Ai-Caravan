import React, { useState } from 'react';
import { colorBrandA, colorBrandB, typographyA, spacing, radius } from '../../tokens/tokens';

export function NavigationBar({
  brand = 'A',
  logoText = 'City Rewards',
  navLinks = ['Explore', 'Partners', 'Rewards', 'About'],
  ctaLabel = 'Join City Rewards',
  activeLink,
  onCtaClick,
  onNavClick,
  variant = 'Desktop',
}) {
  const C = brand === 'B' ? colorBrandB : colorBrandA;
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = variant === 'Mobile';

  return (
    <nav
      style={{
        width: '100%',
        height: isMobile ? '60px' : '72px',
        backgroundColor: C.bgDefault,
        borderBottom: `1px solid ${C.borderDefault}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: isMobile ? `0 ${spacing[4]}` : `0 ${spacing[10]}`,
        boxSizing: 'border-box',
        position: 'relative',
      }}
    >
      {/* Logo */}
      <span style={{ ...typographyA.h5, color: C.textDefault, cursor: 'pointer' }}>
        {logoText}
      </span>

      {/* Desktop nav links */}
      {!isMobile && (
        <div style={{ display: 'flex', gap: spacing[8], alignItems: 'center' }}>
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => onNavClick?.(link)}
              style={{
                background: 'none',
                border: 'none',
                ...typographyA.body,
                color: activeLink === link ? C.primary : C.textSecondary,
                fontWeight: activeLink === link ? 600 : 400,
                cursor: 'pointer',
                padding: 0,
              }}
            >
              {link}
            </button>
          ))}
        </div>
      )}

      {/* Desktop CTA / Mobile hamburger */}
      {!isMobile ? (
        <button
          onClick={onCtaClick}
          style={{
            height: '40px',
            padding: `0 ${spacing[5]}`,
            backgroundColor: C.primary,
            color: C.textOnBrand,
            border: 'none',
            borderRadius: radius.md,
            ...typographyA.button,
            cursor: 'pointer',
          }}
        >
          {ctaLabel}
        </button>
      ) : (
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: spacing[2],
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}
          aria-label="Open menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: 'block',
                width: '22px',
                height: '2px',
                backgroundColor: C.textDefault,
                borderRadius: '1px',
              }}
            />
          ))}
        </button>
      )}

      {/* Mobile dropdown */}
      {isMobile && menuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '60px',
            left: 0,
            right: 0,
            backgroundColor: C.bgDefault,
            borderBottom: `1px solid ${C.borderDefault}`,
            padding: spacing[4],
            display: 'flex',
            flexDirection: 'column',
            gap: spacing[3],
            zIndex: 100,
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => { onNavClick?.(link); setMenuOpen(false); }}
              style={{
                background: 'none',
                border: 'none',
                textAlign: 'left',
                ...typographyA.body,
                color: C.textDefault,
                cursor: 'pointer',
                padding: `${spacing[2]} 0`,
                borderBottom: `1px solid ${C.borderDefault}`,
              }}
            >
              {link}
            </button>
          ))}
          <button
            onClick={onCtaClick}
            style={{
              width: '100%',
              height: '48px',
              backgroundColor: C.primary,
              color: C.textOnBrand,
              border: 'none',
              borderRadius: radius.md,
              ...typographyA.buttonLg,
              cursor: 'pointer',
            }}
          >
            {ctaLabel}
          </button>
        </div>
      )}
    </nav>
  );
}

export default NavigationBar;
