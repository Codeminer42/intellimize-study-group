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

  export const create = (props: Type): Type => {
    if (!isValidWine(props)) {
      throw new Error('Missing some required fields');
    }
    return {
      id: props.id,
      name: props.name,
      year: props.year,
      wineryOfOrigin: props.wineryOfOrigin,
      mainImage: props.mainImage,
      sellingPrice: props.sellingPrice,
      quantity: props.quantity,
      moreDetails: props.moreDetails,
    };
  };

  export function isValidWine(wine: any): boolean {
    const validWineProps = ['name', 'year', 'wineryOfOrigin', 'mainImage', 'sellingPrice', 'quantity', 'moreDetails'];

    return validWineProps.every((key) => wine.hasOwnProperty(key) === true);
  }
}
