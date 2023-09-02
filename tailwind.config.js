/** @type {import('tailwindcss').Config} */
module.exports = {
    "content": [
      "./src/**/*.{js,jsx,ts,tsx}"
    ],
    "theme": {
      "extend": {
        "colors": {
          "white": "#fff",
          "gainsboro": "#e8e8e8",
          "deepskyblue": {
            "100": "#08bef8",
            "200": "rgba(8, 190, 248, 0.05)"
          },
          "black": "#000",
          "red": "#ff0303",
          "whitesmoke": "rgba(238, 238, 238, 0.4)",
          "dark": "#002433",
          "darkslategray": "#085e79",
          "forestgreen": "#0da625",
          "lightyellow": "#feffe0"
        },
        "fontFamily": {
          "poppins": "Poppins"
        },
        "borderRadius": {
          "3xs-1": "9.1px",
          "3xs": "10px"
        }
      },
      "fontSize": {
        "10xl": "29px",
        "7xl": "26px",
        "9xl": "28px",
        "lg": "18px",
        "5xl": "24px",
        "inherit": "inherit"
      }
    },
    "corePlugins": {
      "preflight": false
    }
  }