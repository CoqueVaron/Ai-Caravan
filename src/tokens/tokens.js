// City Rewards Design Tokens — Brand A (Skyline / Light) & Brand B (Prestige / Dark)
// Source of truth: Figma variable collections "Brand Tokens", "Spacing", "Radius"

export const colorBrandA = {
  // Brand
  primary:        '#0B6FFF',
  primaryHover:   '#0952CC',
  primaryActive:  '#073AA3',
  primarySubtle:  '#DBEAFE',
  accent:         '#4D9BFF',

  // Text
  textDefault:    '#0B1220',
  textSecondary:  '#6B7280',
  textDisabled:   '#D1D5DB',
  textInverse:    '#FFFFFF',
  textOnBrand:    '#FFFFFF',

  // Background
  bgDefault:      '#FFFFFF',
  bgSubtle:       '#F9FAFB',
  bgMuted:        '#F3F4F6',
  bgBrand:        '#0B6FFF',

  // Border
  borderDefault:  '#E5E7EB',
  borderStrong:   '#9CA3AF',
  borderBrand:    '#0B6FFF',

  // Loyalty
  loyaltyGold:      '#D97706',
  loyaltyVIP:       '#7C3AED',
  loyaltyExclusive: '#0891B2',
  loyaltyRecommended: '#16A34A',
};

export const colorBrandB = {
  primary:        '#6B21A8',
  primaryHover:   '#4C1373',
  primaryActive:  '#3B0764',
  primarySubtle:  '#EDE9FE',
  accent:         '#8B5CF6',
  textDefault:    '#F8F8FB',
  textSecondary:  '#9CA3AF',
  textDisabled:   '#2A3340',
  textInverse:    '#030405',
  textOnBrand:    '#FFFFFF',
  bgDefault:      '#0B0F14',
  bgSubtle:       '#111418',
  bgMuted:        '#1A1F26',
  bgBrand:        '#6B21A8',
  borderDefault:  '#2A3340',
  borderStrong:   '#4B5563',
  borderBrand:    '#6B21A8',
  loyaltyGold:      '#D4AF37',
  loyaltyVIP:       '#A855F7',
  loyaltyExclusive: '#22D3EE',
  loyaltyRecommended: '#4ADE80',
};

export const semantic = {
  success:    '#16A34A',
  successBg:  '#DCFCE7',
  error:      '#DC2626',
  errorBg:    '#FEE2E2',
  warning:    '#F59E0B',
  warningBg:  '#FEF3C7',
  info:       '#0891B2',
  infoBg:     '#CFFAFE',
};

export const spacing = {
  0:  '0px',
  1:  '4px',
  2:  '8px',
  3:  '12px',
  4:  '16px',
  5:  '20px',
  6:  '24px',
  8:  '32px',
  10: '40px',
  12: '48px',
  16: '64px',
  20: '80px',
  24: '96px',
};

export const radius = {
  none: '0px',
  sm:   '4px',
  md:   '8px',
  lg:   '12px',
  xl:   '16px',
  '2xl':'24px',
  full: '9999px',
};

export const elevation = {
  1: '0px 1px 3px rgba(0,0,0,0.12)',
  2: '0px 2px 8px rgba(0,0,0,0.16)',
  3: '0px 4px 16px rgba(0,0,0,0.20)',
  4: '0px 8px 32px rgba(0,0,0,0.24)',
};

// Typography — Brand A (Inter)
export const typographyA = {
  display:    { fontFamily:'Inter', fontWeight:800, fontSize:'56px', lineHeight:'64px', letterSpacing:'-1.12px' },
  h1:         { fontFamily:'Inter', fontWeight:700, fontSize:'40px', lineHeight:'48px', letterSpacing:'-0.8px'  },
  h2:         { fontFamily:'Inter', fontWeight:700, fontSize:'32px', lineHeight:'40px', letterSpacing:'-0.32px' },
  h3:         { fontFamily:'Inter', fontWeight:600, fontSize:'24px', lineHeight:'32px', letterSpacing:'-0.24px' },
  h4:         { fontFamily:'Inter', fontWeight:600, fontSize:'20px', lineHeight:'28px' },
  h5:         { fontFamily:'Inter', fontWeight:600, fontSize:'16px', lineHeight:'24px' },
  h6:         { fontFamily:'Inter', fontWeight:600, fontSize:'14px', lineHeight:'20px' },
  bodyLarge:  { fontFamily:'Inter', fontWeight:400, fontSize:'18px', lineHeight:'28px' },
  body:       { fontFamily:'Inter', fontWeight:400, fontSize:'16px', lineHeight:'24px' },
  bodySmall:  { fontFamily:'Inter', fontWeight:400, fontSize:'14px', lineHeight:'20px' },
  caption:    { fontFamily:'Inter', fontWeight:400, fontSize:'12px', lineHeight:'16px', letterSpacing:'0.12px' },
  overline:   { fontFamily:'Inter', fontWeight:600, fontSize:'11px', lineHeight:'16px', letterSpacing:'1.1px'  },
  button:     { fontFamily:'Inter', fontWeight:600, fontSize:'14px', lineHeight:'20px' },
  buttonLg:   { fontFamily:'Inter', fontWeight:600, fontSize:'16px', lineHeight:'24px' },
};
