import qs from 'qs';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Plot from 'react-plotly.js';
import Loader from '../../../assets/images/loader.gif';

import { chartsService } from '../../../services';
import { getPlotData } from '../../../utils';
import styles from './chartItem.module.scss';

const ChartItem = ({ symbol, name }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [chartData, setChartData] = useState([]);

  const getChartData = useCallback( async () => {
    setIsLoading(true)
    try {
      const params = qs.stringify({
        function: 'TIME_SERIES_DAILY',
        symbol
      })
      const response = await chartsService.getChartsData(params);
      setChartData(response['Time Series (Daily)']);
    } catch(error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  }, [symbol]) 

  useEffect(() => {
    getChartData();
  }, [getChartData]);

  const plotData = useMemo(() => getPlotData(chartData), [chartData]) 

  return (
    <div className={styles.wrapper}>
      <div className={styles.chartWrapper}>
        {isLoading ? (
          <img alt="Loader" src={Loader} className={styles.loader} />
        ) : (
          <Plot
            data={[plotData]}
            layout={{
              responsive: true,
              useResizeHandler: true,
              autosize: true,
              width: '100%',
            }}
            useResizeHandler={true}
            style={{width: "100%"}} 
          />
        )}
      </div>
      <h3 className={styles.title}>{name}</h3>
    </div>
  )
};

export default ChartItem;