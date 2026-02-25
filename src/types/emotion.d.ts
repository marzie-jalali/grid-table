// src/types/emotion.d.ts
import '@emotion/react'
import AppThemeModel from '../models/theme-model'

declare module '@emotion/react' {
  export interface Theme extends AppThemeModel {}
}
