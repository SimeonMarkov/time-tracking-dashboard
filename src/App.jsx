import {useState} from 'react'
import './App.css'
import { Category } from "./Category.jsx";
import { PersonDetails } from "./PersonDetails.jsx";

function App() {

    const categories = [
        {
            id: 'card-work-1',
            headingSrc: 'assets/icon-work.svg',
            categoryName: 'Work',
            bannerBackgroundColor: 'orange_300',
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
            headingSrc: 'assets/icon-play.svg',
            categoryName: 'Play',
            bannerBackgroundColor: 'blue_300',
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
            headingSrc: 'assets/icon-study.svg',
            categoryName: 'Study',
            bannerBackgroundColor: 'pink_400',
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
            headingSrc: 'assets/icon-exercise.svg',
            categoryName: 'Exercise',
            bannerBackgroundColor: 'green_400',
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
            headingSrc: 'assets/icon-social.svg',
            categoryName: 'Social',
            bannerBackgroundColor: 'purple_700',
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
            headingSrc: 'assets/icon-self-care.svg',
            categoryName: 'Self Care',
            bannerBackgroundColor: 'yellow_300',
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
