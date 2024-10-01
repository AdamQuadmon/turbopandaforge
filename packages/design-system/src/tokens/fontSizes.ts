import { defineTokens } from '@pandacss/dev'

import { getConfigFluidValue } from '../utils/getConfigFluidValue'

export const fontSizes = defineTokens.fontSizes({
  fl1: { value: getConfigFluidValue(13, 16) },
  fl2: { value: getConfigFluidValue(16, 20) },
  fl3: { value: getConfigFluidValue(20, 25) },
  fl4: { value: getConfigFluidValue(25, 31) },
  fl5: { value: getConfigFluidValue(31, 39) },
  fl6: { value: getConfigFluidValue(39, 49) },
  fl7: { value: getConfigFluidValue(49, 61) },
  fl8: { value: getConfigFluidValue(61, 76) },
  base: { value: '1rem' },
})
