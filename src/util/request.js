import { useEffect, useRef, useState } from 'react';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

function client(endpoint, { body, headers, ...config } = {}) {
  return window
    .fetch(`${BASE_URL}/${endpoint}`, {
      method: body ? 'POST' : 'GET',
      body: body ? JSON.stringify(body) : undefined,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      ...config,
    })
    .then((r) => {
      const data = r.json();
      if (r.ok) return data;
      throw data;
    });
}

function useGet(endpoint, mapper) {
  const [data, setData] = useState();

  const mapperRef = useRef(mapper);
  useEffect(() => {
    mapperRef.current = mapper;
  }, [mapper]);

  useEffect(() => {
    client(endpoint)
      .then(mapperRef.current)
      .then((r) => setData(r));
  }, [endpoint]);

  return data;
}

export { client, useGet };
