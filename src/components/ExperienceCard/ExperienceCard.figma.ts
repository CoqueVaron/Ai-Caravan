// url=https://www.figma.com/design/pAPIYC9XnPNmuKneSUGl6g/City-Rewards-%E2%80%94-Adaptive-Loyalty-System?node-id=17-196
// source=src/components/ExperienceCard/ExperienceCard.jsx
// component=ExperienceCard
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
  example: figma.code`<ExperienceCard variant="${variant}" brand="${brand}" />`,
  imports: ['import { ExperienceCard } from "@city-rewards/ui"'],
  id: 'experience-card',
  metadata: { nestable: false },
}
