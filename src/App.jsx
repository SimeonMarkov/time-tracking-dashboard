import { useState } from 'react'
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
*/
    const [categories, setCategories] = useState([
        {
            id: 'card-work-1',
            headingSrc: 'src/assets/icon-work.svg',
            categoryName: '',
            hoursSpentForTime: [
                {
                    timeUnit: 'hours',
                    currentTimeSpent: 5,
                    previousTimeSpent: 7
                },
                {
                    timeUnit: 'weeks',
                    currentTimeSpent: 32,
                    previousTimeSpent: 36
                },
                {
                    timeUnit: 'months',
                    currentTimeSpent: 103,
                    previousTimeSpent: 128
                }
            ]
        },
        {
            id: 'card-play-1',
            headingSrc: 'src/assets/icon-play.svg',
            hoursSpentForTime: [
                {
                    timeUnit: 'hours',
                    currentTimeSpent: 1,
                    previousTimeSpent: 2
                },
                {
                    timeUnit: 'weeks',
                    currentTimeSpent: 10,
                    previousTimeSpent: 8
                },
                {
                    timeUnit: 'months',
                    currentTimeSpent: 23,
                    previousTimeSpent: 29
                }
            ]
        },
        {
            id: 'card-study-1',
            headingSrc: 'src/assets/icon-study.svg',
            hoursSpentForTime: [
                {
                    timeUnit: 'hours',
                    currentTimeSpent: 0,
                    previousTimeSpent: 1
                },
                {
                    timeUnit: 'weeks',
                    currentTimeSpent: 4,
                    previousTimeSpent: 7
                },
                {
                    timeUnit: 'months',
                    currentTimeSpent: 13,
                    previousTimeSpent: 19
                }
            ]
        },
        {
            id: 'card-exercise-1',
            headingSrc: 'src/assets/icon-exercise.svg',
            hoursSpentForTime: [
                {
                    timeUnit: 'hours',
                    currentTimeSpent: 1,
                    previousTimeSpent: 1
                },
                {
                    timeUnit: 'weeks',
                    currentTimeSpent: 4,
                    previousTimeSpent:5
                },
                {
                    timeUnit: 'months',
                    currentTimeSpent: 11,
                    previousTimeSpent: 18
                }
            ]
        },
        {
            id: 'card-social-1',
            headingSrc: 'src/assets/icon-social.svg',
            hoursSpentForTime: [
                {
                    timeUnit: 'hours',
                    currentTimeSpent: 1,
                    previousTimeSpent: 1
                },
                {
                    timeUnit: 'weeks',
                    currentTimeSpent: 5,
                    previousTimeSpent: 10
                },
                {
                    timeUnit: 'months',
                    currentTimeSpent: 21,
                    previousTimeSpent: 23
                }
            ]
        },
        {
            id: 'card-self-care-1',
            headingSrc: 'src/assets/icon-self-care.svg',
            hoursSpentForTime: [
                {
                    timeUnit: 'hours',
                    currentTimeSpent: 0,
                    previousTimeSpent: 1
                },
                {
                    timeUnit: 'weeks',
                    currentTimeSpent: 2,
                    previousTimeSpent: 2
                },
                {
                    timeUnit: 'months',
                    currentTimeSpent: 7,
                    previousTimeSpent: 11
                }
            ]
        }
    ])

  return (
   <>
       {categories.map(category => (
           <Category key={category.id} categoryDetails = {category} />
       ))}
   </>
  )
}

export default App
