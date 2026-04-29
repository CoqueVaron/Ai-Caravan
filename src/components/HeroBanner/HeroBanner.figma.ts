// url=https://www.figma.com/design/pAPIYC9XnPNmuKneSUGl6g/City-Rewards-%E2%80%94-Adaptive-Loyalty-System?node-id=21-105
// source=src/components/HeroBanner/HeroBanner.jsx
// component=HeroBanner
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
  example: figma.code`<HeroBanner variant="${variant}" brand="${brand}" />`,
  imports: ['import { HeroBanner } from "@city-rewards/ui"'],
  id: 'hero-banner',
  metadata: { nestable: false },
}
