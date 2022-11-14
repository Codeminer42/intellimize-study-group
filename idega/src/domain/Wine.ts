export namespace Wine {
  export type Props = {
    id?: number;
    name: string;
    year: number;
    wineryOfOrigin: string;
    mainImage: string;
    sellingPrice: number;
    quantity: number;
    moreDetails: {
      description: string;
      tags: string[];
      alcoholContent: number;
      buyingPrice: number;
      color: string;
      locationInCellar: {
        section: string;
        position: string;
      };
    };
  };

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
      alcoholContent: number;
      buyingPrice: number;
      color: string;
      locationInCellar: {
        section: string;
        position: string;
      };
    };
  };

  export const create = (props: Props): Type => ({
    id: props.id || -1,
    name: props.name,
    year: props.year,
    wineryOfOrigin: props.wineryOfOrigin,
    mainImage: props.mainImage,
    sellingPrice: props.sellingPrice,
    quantity: props.quantity,
    moreDetails: {
      description: props.moreDetails.description,
      tags: props.moreDetails.tags,
      alcoholContent: props.moreDetails.alcoholContent,
      buyingPrice: props.moreDetails.buyingPrice,
      color: props.moreDetails.color,
      locationInCellar: {
        section: props.moreDetails.locationInCellar.section,
        position: props.moreDetails.locationInCellar.position,
      },
    },
  });
}
