export type Wine = {
  id: number;
  name: string;
  year: number;
  wineryOfOrigin: string;
  mainImage: string;
  sellingPrice: number;
  quantity: number;
  moreDetails: WineMoreDetails;
};

type WineMoreDetails = {
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
