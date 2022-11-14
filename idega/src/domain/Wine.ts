export namespace Wine {
  type WineProps = {
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
      color: string;
      location_in_cellar: {
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
      alcohol_content: number;
      buying_price: number;
      color: string;
      location_in_cellar: {
        section: string;
        position: string;
      };
    };
  };

  export const create = (props: WineProps): Type => {
    // validations will be here

    return {
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
        alcohol_content: props.moreDetails.alcohol_content,
        buying_price: props.moreDetails.buying_price,
        color: props.moreDetails.color,
        location_in_cellar: {
          section: props.moreDetails.location_in_cellar.section,
          position: props.moreDetails.location_in_cellar.position,
        },
      },
    };
  };
}
