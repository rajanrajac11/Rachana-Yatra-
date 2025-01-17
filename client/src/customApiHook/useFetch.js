import { useState, useEffect, useCallback } from "react";
import axios from "axios";

export function useFetch(url, method = "GET", body = null) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const options = {
        method,
        url,
        data: body,
      };

      const response = await axios(options);
      setData(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [url, method, body]);

  useEffect(() => {
    if (method === "GET") {
      fetchData();
    }
  }, [fetchData, method]);

  return { data, error, loading, fetchData };
}
