/** @type {import('tailwindcss').Config} */
module.exports = {
  purge:['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [],
  theme: {
    extend: {
      height:{
        '120':'450px',
        '150': '120vh',
        '108':'1083px',
      },
      width:{
        '108':'1083px',
      },
      backgroundImage:{
        "Rain":"url('')",
        "Haze": "url('')",
        "Thunderstorm": "url('')",
        "Drizzle": "url('')",
        "Rain":"url('')",
        "Snow":"url('')",
        "Mist":"url('')",
        "Dust":"url('')",
        "Fog":"url('')",
        "Sand":"url('')",
        "Ash":"url('')",
        "Squall":"url('')",
        "Tornado":"url('')",
        "Clear":"url('https://images.unsplash.com/photo-1601297183305-6df142704ea2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        "Clouds":"url('')",
        "Day":"url('https://media.gettyimages.com/id/1156729138/photo/wild-meadow-on-summers-day.jpg?s=612x612&w=gi&k=20&c=U16YkaRr7wt0OGYoP8GFvzZrC0zHxJVXIBbuhd15PBQ=')"
      }
    },
  },
  plugins: [],
}

