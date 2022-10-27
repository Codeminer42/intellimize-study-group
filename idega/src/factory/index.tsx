function Factory(property: any) {
  const factoryData = {
    wineDetails: {
      name: 'Saxum Gratias',
      year: '2017',
      locationInCellar: 'Location in Cellar',
      winery: 'Paso Robles, CA',
      sellingPrice: 300,
      buyingPrice: 180,
      quantity: 5,
      cardImgSrc: '/assets/wine.png',
      imgSrc: 'https://imageio.forbes.com/specials-images/imageserve//6276c7a49c222289a2752bc2/0x0.jpg',
      description: 'Tasting notes - insert here short text about wines. 2 lines of text max.',
    },
  };

  return factoryData[property];
}

export default Factory;
