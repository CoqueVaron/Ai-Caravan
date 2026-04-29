// url=https://www.figma.com/design/pAPIYC9XnPNmuKneSUGl6g/City-Rewards-%E2%80%94-Adaptive-Loyalty-System?node-id=5-77
// source=src/components/LoyaltyBadge/LoyaltyBadge.jsx
// component=LoyaltyBadge
import figma from 'figma'
const instance = figma.selectedInstance

const tier = instance.getEnum('Variant', {
  'Default': 'Default',
  'Recommended': 'Recommended',
  'Exclusive': 'Exclusive',
  'VIP': 'VIP',
})

const brand = instance.getEnum('Brand', {
  'A': 'A',
  'B': 'B',
})

export default {
  example: figma.code`<LoyaltyBadge tier="${tier}" brand="${brand}" />`,
  imports: ['import { LoyaltyBadge } from "@city-rewards/ui"'],
  id: 'loyalty-badge',
  metadata: { nestable: true },
}
