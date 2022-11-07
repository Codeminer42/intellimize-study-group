import { wineRepository } from '../infra/WineRepository';

export namespace Wine {
  export type Type = {
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

  export const create = (wine: Type): Type => {
    if (isValidWine(wine)) {
      throw new Error('Missing some required fields');
    }
    return wine;
  };

  export function isValidWine(wine: any): boolean {
    const validWineProps = ['name', 'year', 'wineryOfOrigin', 'mainImage', 'sellingPrice', 'quantity', 'moreDetails'];

    const isMissingKeys = validWineProps.some((key) => wine.hasOwnProperty(key) === false);

    return isMissingKeys;
  }
}
