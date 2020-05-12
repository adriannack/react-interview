/**
 * @summary example api endpoints
 * @example getSupplier(supplierId)
 * @returns {object} supplierId, supplierName, brandIds
 *
 *
 */
export const supplierCage = {
  id: 22,
  supplierName: "Cage Industries",
  brandIds: [101, 201, 342]
};

export const supplierBacon = {
  id: 10,
  supplierName: "The Bacon",
  brandIds: [401, 501]
};

/**
 * getAllBrandData(brandId)
 * @returns object of all brand data
 */

export const brandData = [
  {
    brandId: 101,
    name: "10 Monkeys Barrel Brewing Co.",
    imgUrl: "https://www.placecage.com/640/360",
    catalogItems: [
      {
        id: 118,
        label: "Banana Porter",
        value: "Banana Porter",
        description:
          "Brewed in old casks with bananas thought to be the origins of ale",
        containerType: "bottle",
        imgUrl: "https://www.placecage.com/640/360",
        tastingNotes: ["banana, coconut"],
        isType: "active"
      }
    ]
  },
  {
    brandId: 201,
    name: "Buddie Sudds",
    imgUrl: "https://www.placecage.com/g/200/300",
    catalogItems: [
      {
        id: 108,
        label: "Buddie Light",
        value: "Buddie Light",
        description: "",
        containerType: "can",
        imgUrl: "https://www.placecage.com/g/200/500",
        tastingNotes: ["hops, orange"],
        isType: "active"
      },
      {
        id: 343,
        label: "Lim-a-buddie Light",
        value: "Lim-a-buddie Light",
        description: "",
        containerType: "bottle",
        imgUrl: "https://www.placecage.com/g/200/600",
        tastingNotes: ["lime, grapefruit"],
        isType: "pending"
      }
    ]
  },
  {
    brandId: 401,
    name: "Kevins Reserve",
    imgUrl: "https://www.placecage.com/g/400/600",
    catalogItems: [
      {
        id: 443,
        label: "Tin on a Hoot Roof 12 YR",
        value: "Tin on a Hoot Roof 12 YR",
        description: "A bottle stored in the earth of Kentucky",
        containerType: "",
        imgUrl: "https://www.placecage.com/g/400/600",
        tastingNotes: ["butter, earth, cheese"],
        isType: "active"
      },
      {
        id: 209,
        label: "Old Spice Rye",
        value: "Old Spice Rye",
        description: "Spiced with happiness",
        containerType: "bottle",
        imgUrl: "https://www.placecage.com/g/200/401",
        tastingNotes: ["spice, apricot"],
        isType: "active"
      }
    ]
  },
  {
    brandId: 501,
    name: "CatNip Brewskies",
    imgUrl: "https://www.placecage.com/g/200/401",
    catalogItems: [
      {
        id: 345,
        label: "GreenThumb IPA",
        value: "GreenThumb IPA",
        description: "Like cat nip, but for humans!",
        containerType: "",
        imgUrl: "https://www.placecage.com/g/200/401",
        tastingNotes: ["catnip, hops, pine"],
        isType: "pending"
      }
    ]
  },
  {
    brandId: 342,
    name: "Jan Flan Wines",
    imgUrl: "https://www.placecage.com/g/300/801",
    catalogItems: []
  }
];
