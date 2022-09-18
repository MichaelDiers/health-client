import apiSplice from '../../app/api-slice';
import IHealthCheckResult from './health-check-result';

/**
 * The tag for health check result data.
 */
const HEALTH_CHECK_TAG = 'HEALTH_CHECK_TAG';

/**
 * Add the tag for health checks.
 */
const enhancedEndpoints = apiSplice.enhanceEndpoints({
  addTagTypes: [HEALTH_CHECK_TAG],
});

/**
 * Add the health check endpoint to the api.
 */
const healthCheckApiSlice = enhancedEndpoints.injectEndpoints({
  endpoints: builder => ({
    healthCheck: builder.query<IHealthCheckResult, void>({
      query: () => 'http://localhost:3001/health',
      providesTags: [HEALTH_CHECK_TAG],
    }),
  }),
  overrideExisting: false,
});

export const {
  useHealthCheckQuery,
} = healthCheckApiSlice;
