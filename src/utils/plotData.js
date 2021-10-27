import dayjs from 'dayjs';

const twoWeeksAgoDate = dayjs().add(-2, 'week');

export const getPlotData = (chartData = {}) => (
  Object.keys(chartData).reduce((acc, key) => {
    const item = chartData[key];
    const currentDate = dayjs(key);

    if(currentDate.isAfter(twoWeeksAgoDate)) {
      acc.x.push(currentDate.toDate());
      acc.y.push(Number(item["4. close"]))
    }

    return acc;
  }, {
    type: 'scatter',
    x: [],
    y: []
  })
);