### Welcome to our frontend interview

Background:
You are working on a business-to-business (btb) web application that allows
brand suppliers, John Cage and Cline Bacon, to sell their brands. These brands have corresponding items which a person can buy to consume (imagine a can of beer).

You are the UI specialist and the framework you are working in is React. It's a zippy single page application (SPA) that fetches data from a brand api. <b>For the purposes of this interview, your api is a data file that you import.</b>

#### Example API fetch:

`/src/data` contains the data for this interview

```code javascript
    @example
      brandData {
      id: 101,
      label: "10 Monkeys Barrel Brewing Co.",
      imgUrl: "https://www.placecage.com/640/360",
      catalogItems: [{
      id: 108,
      label: "Banana Porter",
      value: "Banana Porter",
      description:
      "Brewed in old casks with bananas thought to be the origins of ale",
      containerType: "bottle",
      imgUrl: "https://www.placecage.com/640/360",
      tastingNotes: ["banana, coconut"]
      }]
    },
```

#### Problem

You are to design and implement the following...

1.  Brand Page:
    "Fetch" data for a supplier's brands upon initial mount of the app
    The page should show:

    - A header: "Welcome supplier name"
    - A table with brand information (e.g. name, image, ...)
    - Name from above links to a new page with the associated catalogItems for the selected brand of `type=active`. See below.

2.  Catalog Items Page:

    - A header with the name of the Brand
    - A table of the brand's catalog items: label, description, image, tasting notes, containerType...

    a. Enable Suppliers to add missing data to their catalog:

    1. For any missing description and containerType field, a link with text copy to "Add" should be present.
    2. Clicking on link should reval an input to type in some text
    3. Handling save: Within the same input, when a user clicks away or moves their mouse away from the field, fire a console.log('saved') with the typed in value and update field to show the typed in response.

3.  Bad Data, oh no!
    A supplier is attempting to submit a catalog item with the same description, label, containterType, and imageUrl as an existing one. What happens? What actions should the client vs backend take?
