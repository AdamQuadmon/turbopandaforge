import { defineTokens } from '@pandacss/dev'

import { getConfigFluidValue } from '../utils/getConfigFluidValue'

export const spacing = defineTokens.radii({
  fl2xl: { value: getConfigFluidValue(64, 80) },
  fl2xs: { value: getConfigFluidValue(8, 10) },
  fl3xl: { value: getConfigFluidValue(96, 120) },
  fl3xs: { value: getConfigFluidValue(4, 5) },
  fll: { value: getConfigFluidValue(32, 40) },
  flm: { value: getConfigFluidValue(24, 30) },
  fls: { value: getConfigFluidValue(16, 20) },
  flxl: { value: getConfigFluidValue(48, 60) },
  flxs: { value: getConfigFluidValue(12, 15) },
})
