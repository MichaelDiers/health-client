import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { Fragment } from 'react';
import { useHealthCheckQuery } from './health-check-api-slice';
import IHealthCheckResult from './health-check-result';

/**
 * Create a component for the results of health checks.
 * @returns A html component.
 */
export default function HealthCheck() {
  const { data, error, isFetching, isLoading, refetch } = useHealthCheckQuery();
  const queryError = error as FetchBaseQueryError;
  const queryData = data as IHealthCheckResult;
  const onReload = () => {
    refetch();
  }

  return (
    <>
      <h1>Health Checks</h1>
      <p>Check the current status of the system including websites, services and databases.</p>
      <div>{queryError?.status ? 'Service is not available. Try again later!' : ''}</div>
      <div className='health-check-result'>
        <div>Status</div>
        <div>{queryData?.status || queryError?.status || 'waiting'}</div>
        {
          queryData?.info
            ? Object.entries(queryData.info).map(([key, value], i) => {
              return (
                <Fragment key={`key_${i}`}>
                  <div>{key}</div>
                  <div>{value.status}</div>
                </Fragment>
              )
            })
            : ''
        }
      </div>
      <button
        disabled={isLoading || isFetching}
        onClick={onReload}
      >Reload</button>
    </>
  );
}
