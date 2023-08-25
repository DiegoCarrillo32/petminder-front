/** @type {import('tailwindcss').Config} */
import konstaConfig from 'konsta/config';

// wrap your config with konstaConfig
export default konstaConfig({
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {}
  },
  plugins: []
});
    
