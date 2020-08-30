import React from 'react';
import Week from './Week';
import styles from './Month.module.scss';
import { format, eachWeekOfInterval, startOfMonth, endOfMonth } from 'date-fns';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const getWeeks = ({ date, currentDate }) => {
  return eachWeekOfInterval({
    start: startOfMonth(date),
    end: endOfMonth(date),
  }).map((weekDate) => (
    <Week
      key={weekDate}
      weekDate={weekDate}
      date={date}
      currentDate={currentDate}
    />
  ));
};

const Month = (props) => {
  const { date } = props;
  const className = classNames(styles.box, styles.dayName);
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{format(date, 'LLLL y')}</div>
      <ul className={styles.row}>
        <li className={styles.dayName}>s</li>
        <li className={styles.dayName}>m</li>
        <li className={styles.dayName}>t</li>
        <li className={styles.dayName}>w</li>
        <li className={styles.dayName}>t</li>
        <li className={styles.dayName}>f</li>
        <li className={styles.dayName}>s</li>
      </ul>
      {getWeeks(props)}
    </div>
  );
};

Month.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  currentDate: PropTypes.instanceOf(Date),
};
Month.defaultProps = {
  currentDate: new Date(),
};
export default Month;
