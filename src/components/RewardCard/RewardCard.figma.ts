// url=https://www.figma.com/design/pAPIYC9XnPNmuKneSUGl6g/City-Rewards-%E2%80%94-Adaptive-Loyalty-System?node-id=17-329
// source=src/components/RewardCard/RewardCard.jsx
// component=RewardCard
import figma from 'figma'
const instance = figma.selectedInstance

const variant = instance.getEnum('Variant', {
  'Default': 'Default',
  'Recommended': 'Recommended',
  'Exclusive': 'Exclusive',
  'Vip': 'Vip',
})

const brand = instance.getEnum('Brand', {
  'A': 'A',
  'B': 'B',
})

export default {
  example: figma.code`<RewardCard variant="${variant}" brand="${brand}" />`,
  imports: ['import { RewardCard } from "@city-rewards/ui"'],
  id: 'reward-card',
  metadata: { nestable: false },
}
