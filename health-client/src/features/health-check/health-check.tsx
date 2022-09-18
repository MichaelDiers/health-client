import { Fragment } from 'react';
import { useHealthCheckQuery } from './health-check-api-slice';
import IHealthCheckResult from './health-check-result';

/**
 * Create a component for the results of health checks.
 * @returns A html component.
 */
export default function HealthCheck() {
  const heathCheckQuery = useHealthCheckQuery();
  const healthCheckResult = heathCheckQuery.data as IHealthCheckResult;

  return (
    <>
      <h1>Health Checks</h1>
      <p>Check the current status of the system including websites, services and databases.</p>
      <div className='health-check-result'>
        <div>Status</div>
        <div>{healthCheckResult?.status || 'waiting'}</div>
        {
          healthCheckResult?.info
            ? Object.entries(healthCheckResult.info).map(([key, value], i) => {
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
    </>
  );
}
