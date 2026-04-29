// url=https://www.figma.com/design/pAPIYC9XnPNmuKneSUGl6g/City-Rewards-%E2%80%94-Adaptive-Loyalty-System?node-id=18-307
// source=src/components/LoyaltyProgress/LoyaltyProgress.jsx
// component=LoyaltyProgress
import figma from 'figma'
const instance = figma.selectedInstance

const variant = instance.getEnum('UserType', {
  'New': 'New',
  'Frequent': 'Frequent',
  'Vip': 'Vip',
})

const brand = instance.getEnum('Brand', {
  'A': 'A',
  'B': 'B',
})

export default {
  example: figma.code`<LoyaltyProgress variant="${variant}" brand="${brand}" />`,
  imports: ['import { LoyaltyProgress } from "@city-rewards/ui"'],
  id: 'loyalty-progress',
  metadata: { nestable: false },
}
