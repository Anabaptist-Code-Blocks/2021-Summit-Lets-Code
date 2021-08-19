import React, { useEffect, useState } from 'react';
import moment from 'moment';

type Statuses = 'Loading' | 'Finished'

interface Forecast {
  id: string
  date: Date
  temperatureC: number
  temperatureF: number
  summary: string
}

export const FetchData: React.VFC = () => {
  const [ forecasts, setForecasts ] = useState<Forecast[]>([]);
  const [ status, setStatus ] = useState<Statuses>('Loading')
  
  useEffect(() => {
    fetch('weatherforecast')
      .then(response => response.json())
      .then(response => {
        setForecasts(response);
        setStatus('Finished');
      })
  }, [])

  if (status === 'Loading')
    return <p><em>Loading...</em></p>;

  if (forecasts.length === 0)
    return <div>No forecasts found.</div>;

  return (
    <table className='table table-striped' aria-labelledby="tabelLabel">
      <thead>
        <tr>
          <th>Date</th>
          <th>Temp. (C)</th>
          <th>Temp. (F)</th>
          <th>Summary</th>
        </tr>
      </thead>
      <tbody>
        {forecasts.map(forecast =>
          <tr key={forecast.id}>
            <td>{moment(forecast.date).format('MMM Do YYYY, h:mm:ss A')}</td>
            <td>{forecast.temperatureC}</td>
            <td>{forecast.temperatureF}</td>
            <td>{forecast.summary}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
