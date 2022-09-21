import { Fragment, useEffect, useState } from 'react';
import { Status } from '../../components/Status';
import { useHealthCheckQuery } from './health-check-api-slice';
import IHealthCheckResult from './health-check-result';

/**
 * Create a component for the results of health checks.
 * @returns A html component.
 */
export default function HealthCheck() {
  const { data, error, isFetching, isLoading, refetch } = useHealthCheckQuery();
  // evaluate error before data
  const queryData = (error as { data: any })?.data as IHealthCheckResult || data as IHealthCheckResult;

  const [counter, setCounter] = useState(10);
  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  const onReload = () => {
    refetch();
    setCounter(10);
  }

  return (
    <div className='health-check'>
      <p>Check the current status of the system including websites, services and databases.</p>
      <div className='health-check-result'>
        <Status keyText='Status' status={queryData?.status} isWaiting={isLoading || isFetching} counter={counter} />
        {
          queryData?.details
            ? Object.entries(queryData.details).map(([key, value], i) => {
              return (
                <Fragment key={`key_${i}`}>
                  <Status keyText={key} status={value.status} isWaiting={isLoading || isFetching} />
                  {
                    value.details
                      ? Object.entries(value.details).map(([subKey, subValue], j) => {
                        return (
                          <Fragment key={`key_${i}_${j}`}>
                            <Status keyText={subKey} status={subValue.status} isWaiting={isLoading || isFetching} />
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
