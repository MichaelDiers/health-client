import { Fragment } from 'react';
import { useHealthCheckQuery } from './health-check-api-slice';
import IHealthCheckResult from './health-check-result';

/**
 * Create a component for the results of health checks.
 * @returns A html component.
 */
export default function HealthCheck() {
  const { data, error, isFetching, isLoading, refetch } = useHealthCheckQuery();
  const queryData = data as IHealthCheckResult || (error as { data: any })?.data as IHealthCheckResult;
  const onReload = () => {
    refetch();
  }

  const STATUS_ERROR = 'error';

  return (
    <div>
      <p>Check the current status of the system including websites, services and databases.</p>
      <div>{queryData?.status === STATUS_ERROR ? 'Service is not available. Try again later!' : ''}</div>
      <div className='health-check-result'>
        <div className={`status-${queryData?.status}`}>Status</div>
        <div className={`status-${queryData?.status}`}>{queryData?.status || 'waiting'}</div>
        {
          queryData?.details
            ? Object.entries(queryData.details).map(([key, value], i) => {
              return (
                <Fragment key={`key_${i}`}>
                  <div className={`status-${value.status}`}>{key}</div>
                  <div className={`status-${value.status}`}>{value.status}</div>
                  {
                    value.details
                      ? Object.entries(value.details).map(([subKey, subValue], j) => {
                        return (
                          <Fragment key={`key_${i}_${j}`}>
                            <div className={`status-${subValue.status} sub-result`}>{subKey}</div>
                            <div className={`status-${subValue.status}`}>{subValue.status}</div>
                          </Fragment>
                        )
                      })
                      : <></>
                  }
                </Fragment>
              )
            })
            : <></>
        }
        <button
          disabled={isLoading || isFetching}
          onClick={onReload}
        >Reload</button>
      </div>
    </div>
  );
}
