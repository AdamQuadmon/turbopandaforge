import Papa from 'papaparse'
import { defineLoader } from 'velite'

export const csvLoader: ReturnType<typeof defineLoader> = defineLoader({
  test: /\.csv$/,
  load: (vfile) => {
    const csvData = Papa.parse(vfile.toString(), {
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
    })

    return { data: csvData.data }
  },
})
