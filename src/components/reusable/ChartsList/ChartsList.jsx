import React from 'react';
import ChartItem from '../ChartItem';

import styles from './chartsList.module.scss';

const ChartsList = ({ companies, category }) => (
  <div className={styles.wrapper}>
    <h2 className={styles.title}>{category}</h2>
    <div className={styles.list}>
      {companies.map(( item, index ) => (
        <div className={styles.item} key={index}>
          <ChartItem {...item} />
        </div>
      ))}
    </div>
  </div>
);

export default ChartsList;