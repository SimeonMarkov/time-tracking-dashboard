export function PersonDetails(props) {
    const switchTimePeriodFunction = props.switchTimePeriodFunction;

    return (
        <section className="person-card-container">
            <div className="person-details">
                <img src="src/assets/image-jeremy.png" alt="Jeremy's avatar"/>
                <p>Report for</p>
                <p>Jeremy Robson</p>
            </div>
            <div className="time-periods">
                <button type="button" className="time-period-btn selected" onClick={switchTimePeriodFunction}>Daily</button>
                <button type="button" className="time-period-btn" onClick={switchTimePeriodFunction}>Weekly</button>
                <button type="button" className="time-period-btn" onClick={switchTimePeriodFunction}>Monthly</button>
            </div>
        </section>
    );
}