// url=https://www.figma.com/design/pAPIYC9XnPNmuKneSUGl6g/City-Rewards-%E2%80%94-Adaptive-Loyalty-System?node-id=26-229
// source=src/components/LoyaltyProgressMobile/LoyaltyProgressMobile.jsx
// component=LoyaltyProgressMobile
import figma from 'figma'
const instance = figma.selectedInstance

const variant = instance.getEnum('Variant', {
  'Bronze': 'Bronze',
  'Silver': 'Silver',
  'Gold': 'Gold',
  'VIP': 'VIP',
})

const brand = instance.getEnum('Brand', {
  'A': 'A',
  'B': 'B',
})

export default {
  example: figma.code`<LoyaltyProgressMobile variant="${variant}" brand="${brand}" />`,
  imports: ['import { LoyaltyProgressMobile } from "@city-rewards/ui"'],
  id: 'loyalty-progress-mobile',
  metadata: { nestable: false },
}
