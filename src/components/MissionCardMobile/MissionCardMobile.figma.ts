// url=https://www.figma.com/design/pAPIYC9XnPNmuKneSUGl6g/City-Rewards-%E2%80%94-Adaptive-Loyalty-System?node-id=16-156
// source=src/components/MissionCardMobile/MissionCardMobile.jsx
// component=MissionCardMobile
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
  example: figma.code`<MissionCardMobile variant="${variant}" brand="${brand}" />`,
  imports: ['import { MissionCardMobile } from "@city-rewards/ui"'],
  id: 'mission-card-mobile',
  metadata: { nestable: false },
}
