import './Category.css'

export function Category(props) {
    return (
        <section className="category-container">
            <div className={"heading-banner"}>
                <img src={props.categoryDetails.headingSrc} alt={'picture'}/>
            </div>
            <div>
                <p>{props.categoryDetails.categoryName}</p>
                <p>{props.categoryDetails.hoursSpentForTime.find(period => period.timeUnit === props.timePeriod).currentTimeSpent}hrs</p>
                <p>Last week - {props.categoryDetails.hoursSpentForTime.find(period => period.timeUnit === props.timePeriod).previousTimeSpent}hrs</p>
            </div>
        </section>
    );
}
