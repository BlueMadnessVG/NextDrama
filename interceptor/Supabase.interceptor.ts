import { apiSupabase } from "@/services/apiEndpoints";
import type { InternalAxiosRequestConfig } from "axios";

/**
 * Axios interceptor for Supabase API requests.
 * Adds an Authorization header with a static token to each request.
 * Logs request and response events for debugging.
 *
 * Usage:
 *   Call AxiosInterceptor() once during app initialization.
 *
 * - Automatically attaches the token to all Supabase API requests.
 * - Logs requests and responses to the console.
 * - Handles and logs errors from responses.
 */
export const AxiosInterceptor = () => {
  const updateHeaders = (request: InternalAxiosRequestConfig) => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhka2lhdGdlbnZ6ZHBrcm1mbXVtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NjcwMjg5NywiZXhwIjoyMDcyMjc4ODk3fQ.9IoMx0wUfTeIz0uNNDpzwa-z_9wvCdmJ_vCIySs6uDI";

    if (token) {
      request.headers = request.headers || {};
      request.headers['Authorization'] = `Bearer ${token}`;
    }

    return request;
  };

  apiSupabase.interceptors.request.use((request: InternalAxiosRequestConfig) => {
    console.log("Request Interceptor Triggered", request);
    return updateHeaders(request);
  });

  apiSupabase.interceptors.response.use(
    (response) => {
      console.log("Response Interceptor Triggered", response);
      return response;
    },
    (error) => {
      console.error("Response Interceptor Error", error);
      return Promise.reject(error);
    }
  );
};
