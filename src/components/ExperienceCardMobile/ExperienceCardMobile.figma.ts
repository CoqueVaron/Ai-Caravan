// url=https://www.figma.com/design/pAPIYC9XnPNmuKneSUGl6g/City-Rewards-%E2%80%94-Adaptive-Loyalty-System?node-id=13-231
// source=src/components/ExperienceCardMobile/ExperienceCardMobile.jsx
// component=ExperienceCardMobile
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
  example: figma.code`<ExperienceCardMobile variant="${variant}" brand="${brand}" />`,
  imports: ['import { ExperienceCardMobile } from "@city-rewards/ui"'],
  id: 'experience-card-mobile',
  metadata: { nestable: false },
}
