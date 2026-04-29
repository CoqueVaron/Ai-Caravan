// url=https://www.figma.com/design/pAPIYC9XnPNmuKneSUGl6g/City-Rewards-%E2%80%94-Adaptive-Loyalty-System?node-id=18-360
// source=src/components/NavigationBar/NavigationBar.jsx
// component=NavigationBar
import figma from 'figma'
const instance = figma.selectedInstance

const brand = instance.getEnum('Brand', {
  'A': 'A',
  'B': 'B',
})

const variant = instance.getEnum('Device', {
  'Desktop': 'Desktop',
  'Mobile': 'Mobile',
})

export default {
  example: figma.code`<NavigationBar brand="${brand}" variant="${variant}" />`,
  imports: ['import { NavigationBar } from "@city-rewards/ui"'],
  id: 'navigation-bar',
  metadata: { nestable: false },
}
