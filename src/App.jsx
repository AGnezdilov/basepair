import React from 'react';
import ChartsList from './components/reusable/ChartsList';

import './styles/index.css';
import styles from './app.module.scss';
import { FINANCIALS_COMPANIES_LIST, HEALTHCARE_COMPANIES_LIST, TECHNOLOGY_COMPANIES_LIST } from './constants/chartConstants';

const App = () => (
  <div className={styles.wrapper}>
    <div className={styles.list}>
      <div className={styles.item}>
        <ChartsList title="Technology" companies={TECHNOLOGY_COMPANIES_LIST} />
      </div>
      <div className={styles.item}>
        <ChartsList title="Financials" companies={FINANCIALS_COMPANIES_LIST} />
      </div>
      <div className={styles.item}>
        <ChartsList title="Healthcare" companies={HEALTHCARE_COMPANIES_LIST} />
      </div>
    </div>
  </div>
)


export default App;
