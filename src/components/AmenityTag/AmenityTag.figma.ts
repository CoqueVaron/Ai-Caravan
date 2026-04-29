// url=https://www.figma.com/design/pAPIYC9XnPNmuKneSUGl6g/City-Rewards-%E2%80%94-Adaptive-Loyalty-System?node-id=5-95
// source=src/components/AmenityTag/AmenityTag.jsx
// component=AmenityTag
import figma from 'figma'
const instance = figma.selectedInstance

const amenity = instance.getEnum('Label', {
  'Pool': 'Pool',
  'Spa & Wellness': 'Spa & Wellness',
  'Breakfast Included': 'Breakfast Included',
  'Ocean View': 'Ocean View',
  'Free Cancellation': 'Free Cancellation',
  'Best Value': 'Best Value',
  'Late Checkout': 'Late Checkout',
  'Airport Transfer': 'Airport Transfer',
})

export default {
  example: figma.code`<AmenityTag amenity="${amenity}" />`,
  imports: ['import { AmenityTag } from "@city-rewards/ui"'],
  id: 'amenity-tag',
  metadata: { nestable: true },
}
