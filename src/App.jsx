import {useState} from 'react'
import './App.css'
import { Category } from "./Category.jsx";
import { PersonDetails } from "./PersonDetails.jsx";

function App() {

    const categories = [
        {
            id: 'card-work-1',
            headingSrc: 'src/assets/icon-work.svg',
            categoryName: 'Work',
            bannerBackgroundColor: '#fbaa76',
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
            categoryName: 'Play',
            bannerBackgroundColor: '#4EBBC5FF',
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
            categoryName: 'Study',
            bannerBackgroundColor: '#ff88a3',
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
            categoryName: 'Exercise',
            bannerBackgroundColor: '#71d691',
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
            categoryName: 'Social',
            bannerBackgroundColor: '#9c6bec',
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
            categoryName: 'Self Care',
            bannerBackgroundColor: '#e4cd87',
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

    const [selectedPeriod, setSelectedPeriod] = useState('Daily');

    function switchTimePeriod(e) {
        document.querySelector(".time-period-btn[class~='selected']").classList.remove('selected');
        e.target.classList.add('selected');
        setSelectedPeriod(e.target.innerText)
    }
  return (
   <main>
       <PersonDetails switchTimePeriodFunction={switchTimePeriod}/>
       {categories.map(category => (
           <Category key={category.id} categoryDetails={category} timePeriod={selectedPeriod}/>
       ))}
   </main>
  )
}

export default App
