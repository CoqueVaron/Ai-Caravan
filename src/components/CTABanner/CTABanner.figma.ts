// url=https://www.figma.com/design/pAPIYC9XnPNmuKneSUGl6g/City-Rewards-%E2%80%94-Adaptive-Loyalty-System?node-id=21-38
// source=src/components/CTABanner/CTABanner.jsx
// component=CTABanner
import figma from 'figma'
const instance = figma.selectedInstance

const variant = instance.getEnum('Variant', {
  'Default': 'Default',
  'Personalized': 'Personalized',
})

const brand = instance.getEnum('Brand', {
  'A': 'A',
  'B': 'B',
})

export default {
  example: figma.code`<CTABanner variant="${variant}" brand="${brand}" />`,
  imports: ['import { CTABanner } from "@city-rewards/ui"'],
  id: 'cta-banner',
  metadata: { nestable: false },
}
