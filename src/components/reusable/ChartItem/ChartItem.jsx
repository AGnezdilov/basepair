import qs from 'qs';
import React, { useCallback, useEffect, useState } from 'react';
import { chartsService } from '../../../services';

import styles from './chartItem.module.scss';

const ChartItem = ({ symbol, name }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [chartData, setChartData] = useState();

  const getChartData = useCallback( async () => {
    setIsLoading(true)
    try {
      const params = qs.stringify({
        function: 'TIME_SERIES_DAILY',
        symbol
      })
      const response = await chartsService.getChartsData(params);
      setChartData(response);
    } catch(error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  }, [symbol]) 

  useEffect(() => {
    getChartData();
  }, [getChartData]);

  return (
    <div className={styles.wrapper}>
      {console.log(chartData)}
      <div className={styles.chartWrapper}>{isLoading}</div>
      <h3 className={styles.title}>{name}</h3>
    </div>
  )
};

export default ChartItem;