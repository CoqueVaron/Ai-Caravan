// url=https://www.figma.com/design/pAPIYC9XnPNmuKneSUGl6g/City-Rewards-%E2%80%94-Adaptive-Loyalty-System?node-id=26-68
// source=src/components/HeroBannerMobile/HeroBannerMobile.jsx
// component=HeroBannerMobile
import figma from 'figma'
const instance = figma.selectedInstance

const variant = instance.getEnum('UserType', {
  'New': 'New',
  'Frequent': 'Frequent',
  'VIP': 'VIP',
})

const brand = instance.getEnum('Brand', {
  'A': 'A',
  'B': 'B',
})

export default {
  example: figma.code`<HeroBannerMobile variant="${variant}" brand="${brand}" />`,
  imports: ['import { HeroBannerMobile } from "@city-rewards/ui"'],
  id: 'hero-banner-mobile',
  metadata: { nestable: false },
}
