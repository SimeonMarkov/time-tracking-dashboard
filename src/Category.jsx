import './Category.css'

export function Category(props) {
    return (
        <section className="category-container">
            <div className="heading-banner" style={{backgroundColor: `${props.categoryDetails.bannerBackgroundColor}`}}>
                <img src={props.categoryDetails.headingSrc} alt='picture'/>
            </div>
            <div className="category-content">
                <div className="category-details">
                    <p>{props.categoryDetails.categoryName}</p>
                    <p>{props.categoryDetails.hoursSpentForTime.find(period => period.timeUnit === props.timePeriod).currentTimeSpent}hrs</p>
                </div>
                <div className="last-time">
                    <p>...</p>
                    <p>{props.timePeriod === 'Weekly' ? 'Last week ' : props.timePeriod === 'Monthly' ? 'Last month' : 'Yesterday'} - {props.categoryDetails.hoursSpentForTime.find(period => period.timeUnit === props.timePeriod).previousTimeSpent}hrs</p>
                </div>
            </div>
        </section>
    );
}
