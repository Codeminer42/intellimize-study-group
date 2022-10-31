const inMemoryDb =
{
  wines: [{
    id: 1,
    name: "Vinho",
    year: 2017,
    wineryOfOrigin: "Bertoletti",
    mainImage: "https://imageio.forbes.com/specials-images/imageserve//6276c7a49c222289a2752bc2/0x0.jpg?format=jpg",
    sellingPrice: 300,
    quantity: 10,
    moreDetails: {
      description: "bla bla bla",
      tags: [
        "fruity",
        "sweet",
        "citric"
      ],
      alcohol_content: 14.3,
      buying_price: 180,
      location_in_cellar: {
        "section": "A",
        "position": "3"
      },
      color: "rosé"
    }
  }]
}


export default inMemoryDb;
