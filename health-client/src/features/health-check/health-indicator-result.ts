/**
 * Describes the results for each executed health check.
 */
export default interface IHealthIndicatorResult {
  /**
   * An indexer for a health check result.
   * The key is the name of the health check.
   */
  [key: string]: {
    /**
     * The status of the executed health check.
     */
    status: string;
  },
}
