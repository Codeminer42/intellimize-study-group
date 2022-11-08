const BASE_URL = '/api';

// const wineApiClient = {
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
// };

const fakeWineData = [
  {
    id: 1,
    name: 'Vinho',
    year: 2017,
    wineryOfOrigin: 'Bertoletti',
    mainImage: 'https://imageio.forbes.com/specials-images/imageserve//6276c7a49c222289a2752bc2/0x0.jpg?format=jpg',
    sellingPrice: 300.0,
    quantity: 10,
    moreDetails: {
      description: 'bla bla bla',
      tags: ['fruity', 'sweet', 'citric'],
      alcohol_content: 14.3,
      buying_price: 180.0,
      location_in_cellar: {
        section: 'A',
        position: '3',
      },
      color: 'rosé',
    },
  },
  {
    id: 2,
    name: 'Vinho',
    year: 2017,
    wineryOfOrigin: 'Bertoletti',
    mainImage: 'https://imageio.forbes.com/specials-images/imageserve//6276c7a49c222289a2752bc2/0x0.jpg?format=jpg',
    sellingPrice: 300.0,
    quantity: 10,
    moreDetails: {
      description: 'bla bla bla',
      tags: ['fruity', 'sweet', 'citric'],
      alcohol_content: 14.3,
      buying_price: 180.0,
      location_in_cellar: {
        section: 'A',
        position: '3',
      },
      color: 'rosé',
    },
  },
  {
    id: 3,
    name: 'Vinho',
    year: 2017,
    wineryOfOrigin: 'Bertoletti',
    mainImage: 'https://imageio.forbes.com/specials-images/imageserve//6276c7a49c222289a2752bc2/0x0.jpg?format=jpg',
    sellingPrice: 300.0,
    quantity: 10,
    moreDetails: {
      description: 'bla bla bla',
      tags: ['fruity', 'sweet', 'citric'],
      alcohol_content: 14.3,
      buying_price: 180.0,
      location_in_cellar: {
        section: 'A',
        position: '3',
      },
      color: 'rosé',
    },
  },
];

const wineApiClient = {
  get: async <T>(url: string): Promise<{ data: T }> => {
    return { data: fakeWineData as T };
  },
};

export default wineApiClient;

export type WineApiClient = typeof wineApiClient;
