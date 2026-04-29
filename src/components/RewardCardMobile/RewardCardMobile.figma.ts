// url=https://www.figma.com/design/pAPIYC9XnPNmuKneSUGl6g/City-Rewards-%E2%80%94-Adaptive-Loyalty-System?node-id=25-122
// source=src/components/RewardCardMobile/RewardCardMobile.jsx
// component=RewardCardMobile
import figma from 'figma'
const instance = figma.selectedInstance

const variant = instance.getEnum('Variant', {
  'Default': 'Default',
  'Gold': 'Gold',
  'Exclusive': 'Exclusive',
  'VIP': 'VIP',
})

const brand = instance.getEnum('Brand', {
  'A': 'A',
  'B': 'B',
})

export default {
  example: figma.code`<RewardCardMobile variant="${variant}" brand="${brand}" />`,
  imports: ['import { RewardCardMobile } from "@city-rewards/ui"'],
  id: 'reward-card-mobile',
  metadata: { nestable: false },
}
