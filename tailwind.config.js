module.exports = {
  purge: ['./public/**/*.html', './src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      lg: {'min': '1800px'},
      md: {'max': '1500px'},
      sm: {'max': '800px'},
      'hover-hover': {'raw': '(hover: hover)'}
    },
    fontSize: {
      'root/ml': '1.25vw',
      'root/sm': '2vw',

      xl: ['9vw', {
        letterSpacing: '-0.1em',
        lineHeight: '0.8',
      }],
      lg: ['3rem', {
        letterSpacing: '-0.04em',
        lineHeight: '1',
      }],
      md: ['2rem', {
        letterSpacing: '-0.015em',
        lineHeight: '1',
      }],
      sm: ['1.5rem', {
        letterSpacing: '0.01em',
        lineHeight: '1',
      }],
      xs: ['min(1vw, 0.85rem)', {
        letterSpacing: '0.01em',
        lineHeight: '1.1',
      }]
    },
    extend: {
      colors: {
        'primary' : 'var(--color-primary)',
        'secondary' : 'var(--color-secondary)',
        'tertiary' : 'var(--color-tertiary)',
        'quaternary' : 'var(--color-quaternary)',
      },
      spacing: {
        '0.25' : '0.05rem',
        'sm' : '0.5rem',
        'md' : '1rem',
        '30' : '7.5rem',
        '35' : '8.75rem'
      },
      dropShadow: {
        'shape': '0rem .2rem .1rem rgba(0,0,0,.5)',
      },
     fontFamily: {
       'diatype' : 'Diatype',
       'serif' : 'Times New Roman'
      },
      transitionDuration: {
        'transform' : '5000ms'
      },
      animation: {
       'slide-right': 'slideRight 1200ms ease-in-out 1 forwards',
      },
      keyframes: {
        slideRight :{
          '0%': { marginLeft: '-20rem'},
          '100%': {  marginLeft: '0'},
        },
      },
      minHeight: {
        'textarea': '55vh',
        'textarea-sm' : '65vh'
      }

    }
  },
  variants: {
    extend: {
      width: ["responsive", "hover", "focus", "group-hover"],
      height: ["responsive", "hover", "focus", "group-hover"],
      filter: ["responsive", "hover", "focus", "group-hover"],
      letterSpacing: ["responsive", "hover", "focus", "group-hover"],
      margin: ["responsive", "hover", "focus", "group-hover"],
      transform: ["responsive", "hover", "focus", "group-hover"],
      translate: ["responsive", "hover", "focus", "group-hover"],
      webkitTextStroke: ["responsive", "hover", "focus", "group-hover"],
    },
  },
  plugins: [],
}
