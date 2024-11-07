import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './sections/**/*.{ts,tsx}',
    './layouts/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        maxpurple: {
          '100': '#ddd2ff',
          '200': '#bca6ff',
          '300': '#9a79ff',
          '400': '#794dff',
          '500': '#5720ff',
          '600': '#461acc',
          '700': '#341399',
          '800': '#230d66',
          '900': '#110633'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
}
export default config
