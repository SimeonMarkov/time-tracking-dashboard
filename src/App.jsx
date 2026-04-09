import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Category } from "./Category.jsx";

function App() {

    /*
    *
    * Report for
    Jeremy Robson

    Daily
    Weekly
    Monthly

    Work
    5hrs <!-- daily -->
    Previous - 7hrs <!-- daily -->
    32hrs <!-- weekly -->
    Previous - 36hrs <!-- weekly -->
    103hrs <!-- monthly -->
    Previous - 128hrs <!-- monthly -->

    Play
    1hr <!-- daily -->
    Previous - 2hrs <!-- daily -->
    10hrs <!-- weekly -->
    Previous - 8hrs <!-- weekly -->
    23hrs <!-- monthly -->
    Previous - 29hrs <!-- monthly -->

    Study
    0hrs <!-- daily -->
    Previous - 1hr <!-- daily -->
    4hrs <!-- weekly -->
    Previous - 7hrs <!-- weekly -->
    13hrs <!-- monthly -->
    Previous - 19hrs <!-- monthly -->

    Exercise
    1hr <!-- daily -->
    Previous - 1hr <!-- daily -->
    4hrs <!-- weekly -->
    Previous - 5hrs <!-- weekly -->
    11hrs <!-- monthly -->
    Previous - 18hrs <!-- monthly -->

    Social
    1hr <!-- daily -->
    Previous - 3hrs <!-- daily -->
    5hrs <!-- weekly -->
    Previous - 10hrs <!-- weekly -->
    21hrs <!-- monthly -->
    Previous - 23hrs <!-- monthly -->

    Self Care
    0hrs <!-- daily -->
    Previous - 1hr <!-- daily -->
    2hrs <!-- weekly -->
    Previous - 2hrs <!-- weekly -->
    7hrs <!-- monthly -->
    Previous - 11hrs <!-- monthly -->
    *
    * */
    const [categories, setCategories] = useState([
        {
            id: 'card-exercise-1',
            headingSrc: 'images\\icon-exercise.svg'
        },
        {
            id: 'card-play-1',
            headingSrc: 'images\\icon-play.svg'
        },
        {
            id: 'card-self-care-1',
            headingSrc: 'images\\icon-self-care.svg'
        },
        {
            id: 'card-social-1',
            headingSrc: 'images\\icon-social.svg'
        }
    ])

  return (
   <>
       {categories.map(category => (
           <Category key={category.id} headingSrc={category.headingSrc}/>
       ))}
   </>
  )
}

export default App
