import axios from 'axios';

import { Wine } from '../../domain/Wine';

type WineProps = Omit<Wine.Type, 'id'>;

export type WineApiClient = {
  createWine: (newWine: WineProps) => Promise<Wine.Type>;
  getWines: () => Promise<Wine.Type[]>;
  getWineById: (wineId: number) => Promise<Wine.Type>;
};

const BASE_URL = '/api';

//#region -- Fetch Wrapper

// const fetchWrapper = {
//   get: async <T>(url: RequestInfo | URL, customConfig?: RequestInit | undefined): Promise<Response & { data: T }> => {
//     const config = {
//       method: 'GET',
//       ...customConfig,
//     };

//     const response = await window.fetch(`${BASE_URL}/${url}`, config);

//     if (response.ok) {
//       const data = await response.json().then((data) => data as T);
//       const formattedResponse = Object.assign(response, { data });

//       return formattedResponse;
//     } else {
//       const errorMessage = await response.text();
//       throw new Error(errorMessage);
//     }
//   },
//   post: async <T = any>(
//     url: RequestInfo | URL,
//     body: {} | undefined,
//     customConfig?: RequestInit | undefined
//   ): Promise<Response & { data: T }> => {
//     const config = {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(body),
//       ...customConfig,
//     };

//     const response = await window.fetch(`${BASE_URL}/${url}`, config);

//     if (response.ok) {
//       const data = await response.json().then((data) => data as T);
//       const formattedResponse = Object.assign(response, { data });

//       return formattedResponse;
//     } else {
//       const errorMessage = await response.text();
//       throw new Error(errorMessage);
//     }
//   },
// };

// const wineApiClient: WineApiClient = {
//   createWine: async (newWine: WineProps): Promise<Wine.Type> => {
//     const response = await fetchWrapper.post<{ data: Wine.Type }>(`wines`, newWine);
//     const { data: wine } = response.data;
//     return wine;
//   },
//   getWines: async (): Promise<Wine.Type[]> => {
//     const response = await fetchWrapper.get<{ data: Wine.Type[] }>('wines');
//     const { data: wines } = response.data;
//     return wines;
//   },
//   getWineById: async (wineId: number): Promise<Wine.Type> => {
//     const response = await fetchWrapper.get<{ data: Wine.Type }>(`wines/${wineId}`);
//     const { data: wine } = response.data;
//     return wine;
//   },
// };

//#endregion

//#region -- Pure Fetch

// const handleFetchResponse = async <T>(response: Response) => {
//   if (!response.ok) {
//     const errorMessage = await response.text();
//     throw new Error(errorMessage);
//   }

//   const data = await response.json().then((data) => data.data as T);
//   return data;
// };

// const wineApiClient: WineApiClient = {
//   createWine: async (newWine: WineProps): Promise<Wine.Type> => {
//     const response = await window.fetch(`${BASE_URL}/wines`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(newWine),
//     });
//     return handleFetchResponse(response);
//   },
//   getWines: async (): Promise<Wine.Type[]> => {
//     const response = await window.fetch(`${BASE_URL}/wines`, { method: 'GET' });
//     return handleFetchResponse(response);
//   },
//   getWineById: async (wineId: number): Promise<Wine.Type> => {
//     const response = await window.fetch(`${BASE_URL}/wines/${wineId}`, { method: 'GET' });
//     return handleFetchResponse(response);
//   },
// };

//#endregion

//#region -- Axios

const axiosInstance = axios.create({ baseURL: BASE_URL });

const wineApiClient: WineApiClient = {
  createWine: async (newWine) => {
    const response = await axiosInstance.post<{ data: Wine.Type }>(`wines`, newWine);
    const { data: wine } = response.data;
    return wine;
  },
  getWines: async () => {
    const response = await axiosInstance.get<{ data: Wine.Type[] }>('wines');
    const { data: wines } = response.data;
    return wines;
  },
  getWineById: async (wineId) => {
    const response = await axiosInstance.get<{ data: Wine.Type }>(`wines/${wineId}`);
    const { data: wine } = response.data;
    return wine;
  },
};

//#endregion

export default wineApiClient;
