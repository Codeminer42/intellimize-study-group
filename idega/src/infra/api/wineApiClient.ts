const BASE_URL = '/api';

const wineApiClient = {
  get: async <T>(url: RequestInfo | URL, customConfig?: RequestInit | undefined): Promise<Response & { data: T }> => {
    const config = {
      method: 'GET',
      ...customConfig,
    };

    const response = await window.fetch(`${BASE_URL}/${url}`, config);

    if (response.ok) {
      const data = await response.json().then((data) => data as T);
      const formattedResponse = Object.assign(response, { data });

      return formattedResponse;
    } else {
      const errorMessage = await response.text();
      throw new Error(errorMessage);
    }
  },
  post: async <T>(
    url: RequestInfo | URL,
    body: BodyInit,
    customConfig?: RequestInit | undefined
  ): Promise<Response & { data: T }> => {
    const config = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      ...customConfig,
    };

    const response = await window.fetch(`${BASE_URL}/${url}`, config);

    if (response.ok) {
      const data = await response.json().then((data) => data as T);
      const formattedResponse = Object.assign(response, { data });

      return formattedResponse;
    } else {
      const errorMessage = await response.text();
      throw new Error(errorMessage);
    }
  },
};

export default wineApiClient;

export type WineApiClient = typeof wineApiClient;
