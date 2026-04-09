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
    const categories = [
        {
            id: 'card-work-1',
            headingSrc: 'src/assets/icon-work.svg',
            categoryName: '',
            hoursSpentForTime: [
                {
                    timeUnit: 'Daily',
                    currentTimeSpent: 5,
                    previousTimeSpent: 7
                },
                {
                    timeUnit: 'Weekly',
                    currentTimeSpent: 32,
                    previousTimeSpent: 36
                },
                {
                    timeUnit: 'Monthly',
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
                    timeUnit: 'Daily',
                    currentTimeSpent: 1,
                    previousTimeSpent: 2
                },
                {
                    timeUnit: 'Weekly',
                    currentTimeSpent: 10,
                    previousTimeSpent: 8
                },
                {
                    timeUnit: 'Monthly',
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
                    timeUnit: 'Daily',
                    currentTimeSpent: 0,
                    previousTimeSpent: 1
                },
                {
                    timeUnit: 'Weekly',
                    currentTimeSpent: 4,
                    previousTimeSpent: 7
                },
                {
                    timeUnit: 'Monthly',
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
                    timeUnit: 'Daily',
                    currentTimeSpent: 1,
                    previousTimeSpent: 1
                },
                {
                    timeUnit: 'Weekly',
                    currentTimeSpent: 4,
                    previousTimeSpent:5
                },
                {
                    timeUnit: 'Monthly',
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
                    timeUnit: 'Daily',
                    currentTimeSpent: 1,
                    previousTimeSpent: 1
                },
                {
                    timeUnit: 'Weekly',
                    currentTimeSpent: 5,
                    previousTimeSpent: 10
                },
                {
                    timeUnit: 'Monthly',
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
                    timeUnit: 'Daily',
                    currentTimeSpent: 0,
                    previousTimeSpent: 1
                },
                {
                    timeUnit: 'Weekly',
                    currentTimeSpent: 2,
                    previousTimeSpent: 2
                },
                {
                    timeUnit: 'Monthly',
                    currentTimeSpent: 7,
                    previousTimeSpent: 11
                }
            ]
        }
    ]

    const [selectedCategory, setSelectedCategory] = useState('Daily');

    function switchTimeCategory(e) {
        document.querySelector(".time-period-btn[class~='selected']").classList.remove('selected');
        e.target.classList.add('selected');
        setSelectedCategory(e.target.innerText)
    }
  return (
   <main>
       <section className="person-card-container">
           <div className="person-details">
            <img src='src/assets/image-jeremy.png' alt="Jeremy's avatar"/>
            <p>Report for</p>
            <p>Jeremy Robson</p>
           </div>
           <div className="time-periods">
               <button type="button" className="time-period-btn selected" onClick={switchTimeCategory}>Daily</button>
               <button type="button" className="time-period-btn" onClick={switchTimeCategory}>Weekly</button>
               <button type="button" className="time-period-btn" onClick={switchTimeCategory}>Monthly</button>
           </div>
       </section>
       {categories.map(category => (
           <Category key={category.id} categoryDetails={category} timePeriod={selectedCategory}/>
       ))}
   </main>
  )
}

export default App
