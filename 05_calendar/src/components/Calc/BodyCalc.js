import React from 'react';
import '../components.css'
import moment from 'moment'
import CalcHeader from "./CalcHeader";
import CalcGrid from "./CalcGrid";

const BodyCalc = () => {

    // window.moment = moment;
    // moment.updateLocale('ru', {week: {dow: 2}})
    const firstDay = moment().startOf('month').startOf('week');

    // const endDay = moment().endOf('month').endOf('week');
    // window.firstDay = firstDay;
    // window.endDay = endDay;
    // const calendar = []
    // const day = firstDay.clone();
    // window.day = day;
    //
    // while (day.isBefore(endDay)) {
    //     calendar.push(day.clone())
    //     day.add(1, 'day')
    // }

    return (
        <div className={'calc-box'}>
            <CalcHeader />
            <CalcGrid firstDay={firstDay} />
        </div>
    );
};

export default BodyCalc;