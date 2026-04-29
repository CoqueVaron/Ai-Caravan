// url=https://www.figma.com/design/pAPIYC9XnPNmuKneSUGl6g/City-Rewards-%E2%80%94-Adaptive-Loyalty-System?node-id=5-50
// source=src/components/Button/Button.jsx
// component=Button
import figma from 'figma'
const instance = figma.selectedInstance

const variant = instance.getEnum('Type', {
  'Primary': 'Primary',
  'Secondary': 'Secondary',
  'Ghost': 'Ghost',
  'Destructive': 'Destructive',
})

const brand = instance.getEnum('Brand', {
  'A': 'A',
  'B': 'B',
})

const disabled = instance.getEnum('State', {
  'Default': false,
  'Hover': false,
  'Disabled': true,
})

export default {
  example: figma.code`<Button variant="${variant}" brand="${brand}" disabled={${disabled}}>Book Now</Button>`,
  imports: ['import { Button } from "@city-rewards/ui"'],
  id: 'button',
  metadata: { nestable: false },
}
