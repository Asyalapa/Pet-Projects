import React from 'react';
import '../components.css'

const CalcHeader = () => {
    const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    const dateNow = new Date();
    let options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'narrow' };
    options.timeZone = 'UTC';

    function isTodayDay(item) {
        if ((dateNow.getDay()-1) === item) return true
    }

    return (
        <div className="calc-head">
            <h1 className="calc-head__title">{months[dateNow.getUTCMonth()].toUpperCase()}</h1>
            <i className="calc-head__date-now">
                {dateNow.toLocaleDateString('ru-RU', options)}
            </i>
            <div className="calc__weekdays">
                {daysOfWeek.map((i, index) =>
                    <div key={i} className={!isTodayDay(index) ? 'calc-head__weekdays-item' : 'calc-head__weekdays-item this-day'}>
                        <div className="calc__weekdays-item">
                            {i}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CalcHeader;