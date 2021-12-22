import React from 'react';
import '../components.css'
import moment from "moment";

const CalcGrid = ({ firstDay }) => {
    const amountDays = 42;
    const day = firstDay.clone();
    const daysArray = [...Array(amountDays)].map(() => day.add(1, 'day').clone())

    function classNames(item) {
        let className = 'calc-grid__cell';
        if ((item.day() === 0) || (item.day() === 6)) className += ' weekend';
        if (item.date() === moment().date()) className += ' today';
        if (item.day() === moment().day()) className += ' this-day';
        return className
    }

    function isThisMonth(item) {
        if (item.month() === moment().month()) return true
    }

    return (
        <div className={'calc-grid__wrapper'}>
            {
                daysArray.map((item) => (
                    <div key={item.format('DDMMYY')}
                         className={classNames(item)}>
                        <div className={isThisMonth(item) ? 'calc-grid__item' : 'calc-grid__item not-this-month'}>
                            {item.format('D')}
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default CalcGrid;