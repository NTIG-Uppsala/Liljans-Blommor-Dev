# Liljans Blommor - Modifying Data

## Changing the **products**:

_Navigate to data/products.json in your IDE or [github](https://github.com/NTIG-Uppsala/Liljans-Blommor-Dev/tree/Nextjs-dev/my-app/data)_

The products.json file contains 2 main parts, the categories and the products inside the category.

### Categories

```json
{
    "category1": {
        "categoryName": "Example name",
        "products": [ ... ]
	},
	"category2": {
        "categoryName": "Example name",
        "products": [ ... ]
	},
	...
}
```
Every category should contain the categoryName and products keys. The object name itself (e.g. category1 & category2) is free to name whatever fits the category.
The categoryName key should contain a string with the category name displayed on the website.
The products key should contain a list filled with product objects (see below).

### Products list

```json
{
    "categoryX": {
        "categoryName": "Example name",
        "products": [
			{
				"name": "Example",
				"price": 123,
				"isBestSeller": false,
				"isShowcase": true,
				"img": "yourImagePathway"
			},
			...
		]
	},
	...
}
```

The products list's product object should contain all of the above shown keys.
* "name" - a string containing the name of the product.
* "price" - an integer containing the product price including taxes.
* "isBestSeller" - a boolean, true or false, defining if the product should be shown on the homepage or not
* "isShowCase" - a boolean, true or false, defining if the products image should be shown on the products page or not
* "img" - a string containing the pathway to the products image, e.g: "../assets/images/example.jpg", may be left empty

## Changing the **contacts**:

_Navigate to data/contacts.json_

```json
{
	"contacts": {
		"tel": "+46123456789",
		"mail": "ex.mail@mail.com",
		"address": "address",
		"postalCode": "123 45",
		"city": "City name"
	}
}
```
The contacts object should contain all of the above shown keys. _Note; the telephone number should be 'raw' an not contain spaces, hyphens, etc._

## Changing the **openingHours**:

_Navigate to data/openingHours.json_

```json
{
	"openingHours": {
		"weekdays": "00-00",
		"saturday": "00-00",
		"sunday": "00-00"
	}
}
```
The openingHours object should contain all of the above shown keys; following the hours by the day. For example, if the opening hours for sunday is from 7am to 3pm, then the value would be: "07-15"; more specific hours such as "07:30-16:15" is allowed.
