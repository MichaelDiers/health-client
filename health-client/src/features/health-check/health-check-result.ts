import IHealthIndicatorResult from './health-indicator-result';

/**
 * Decribes the result of a health check.
 */
export default interface IHealthCheckResult {
  /**
   * Detailed information about all executed health checks.
   */
  details?: IHealthIndicatorResult;

  /**
   * Information about failed health checks.
   */
  error?: IHealthIndicatorResult;

  /**
   * Information about all executed health checks.
   */
  info?: IHealthIndicatorResult;

  /**
   * The global status of all health checks.
   */
  status: 'error' | 'ok' | 'shutting_down';
}
