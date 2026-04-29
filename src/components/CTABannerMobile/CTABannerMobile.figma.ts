// url=https://www.figma.com/design/pAPIYC9XnPNmuKneSUGl6g/City-Rewards-%E2%80%94-Adaptive-Loyalty-System?node-id=26-262
// source=src/components/CTABannerMobile/CTABannerMobile.jsx
// component=CTABannerMobile
import figma from 'figma'
const instance = figma.selectedInstance

const variant = instance.getEnum('Variant', {
  'Default': 'Default',
  'Personalized': 'Personalized',
})

const brand = instance.getEnum('Brand', {
  'A': 'A',
  'B': 'B',
})

export default {
  example: figma.code`<CTABannerMobile variant="${variant}" brand="${brand}" />`,
  imports: ['import { CTABannerMobile } from "@city-rewards/ui"'],
  id: 'cta-banner-mobile',
  metadata: { nestable: false },
}
