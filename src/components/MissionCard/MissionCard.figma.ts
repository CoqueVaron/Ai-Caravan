// url=https://www.figma.com/design/pAPIYC9XnPNmuKneSUGl6g/City-Rewards-%E2%80%94-Adaptive-Loyalty-System?node-id=18-156
// source=src/components/MissionCard/MissionCard.jsx
// component=MissionCard
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
  example: figma.code`<MissionCard variant="${variant}" brand="${brand}" />`,
  imports: ['import { MissionCard } from "@city-rewards/ui"'],
  id: 'mission-card',
  metadata: { nestable: false },
}
