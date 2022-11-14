import axios from 'axios';

import { Wine } from '../../domain/Wine';

export type WineApiClient = {
  createWine: (newWine: Wine.Type) => Promise<Wine.Type>;
  getWines: () => Promise<Wine.Type[]>;
  getWineById: (wineId: number) => Promise<Wine.Type>;
};

type ApiWine = {
  id: number;
  name: string;
  year: number;
  wineryOfOrigin: string;
  mainImage: string;
  sellingPrice: number;
  quantity: number;
  moreDetails: {
    description: string;
    tags: string[];
    alcohol_content: number;
    buying_price: number;
    location_in_cellar: {
      section: string;
      position: string;
    };
    color: string;
  };
};

const axiosInstance = axios.create({ baseURL: '/api' });

const wineMapper = {
  fromApi: (props: ApiWine): Wine.Type => ({
    id: props.id,
    name: props.name,
    year: props.year,
    wineryOfOrigin: props.wineryOfOrigin,
    mainImage: props.mainImage,
    sellingPrice: props.sellingPrice,
    quantity: props.quantity,
    moreDetails: {
      description: props.moreDetails.description,
      tags: props.moreDetails.tags,
      alcoholContent: props.moreDetails.alcohol_content,
      buyingPrice: props.moreDetails.buying_price,
      color: props.moreDetails.color,
      locationInCellar: {
        section: props.moreDetails.location_in_cellar.section,
        position: props.moreDetails.location_in_cellar.position,
      },
    },
  }),
  toApi: (wine: Wine.Type): ApiWine => ({
    id: wine.id,
    name: wine.name,
    year: wine.year,
    wineryOfOrigin: wine.wineryOfOrigin,
    mainImage: wine.mainImage,
    sellingPrice: wine.sellingPrice,
    quantity: wine.quantity,
    moreDetails: {
      description: wine.moreDetails.description,
      tags: wine.moreDetails.tags,
      alcohol_content: wine.moreDetails.alcoholContent,
      buying_price: wine.moreDetails.buyingPrice,
      color: wine.moreDetails.color,
      location_in_cellar: {
        section: wine.moreDetails.locationInCellar.section,
        position: wine.moreDetails.locationInCellar.position,
      },
    },
  }),
};

const wineApiClient: WineApiClient = {
  createWine: async (newWine) => {
    const response = await axiosInstance.post<{ data: ApiWine }>(`wines`, wineMapper.toApi(newWine));
    return wineMapper.fromApi(response.data.data);
  },
  getWines: async () => {
    const response = await axiosInstance.get<{ data: ApiWine[] }>('wines');
    return response.data.data.map(wineMapper.fromApi);
  },
  getWineById: async (wineId) => {
    const response = await axiosInstance.get<{ data: ApiWine }>(`wines/${wineId}`);
    return wineMapper.fromApi(response.data.data);
  },
};

export default wineApiClient;
