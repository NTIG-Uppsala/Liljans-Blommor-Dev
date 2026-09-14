# Liljans Blommor - Modifying Data

_Modifying the data/data.json file_

### Changing the **products**:
```json
{
	"products": [
		{
			"name": "example name",
			"price": 123,
			"img": "src/link",
			"isBestSeller": false
		},
		...
	],
  ...
}
```
Every product object needs tocontain the _"name"_, _"price"_ and _"isBestSeller"_ keys, the _"img"_ key is optional and should contain the pathway to the image.

### Changing the **contacts**:
```json
{
  ...
	"contacts": {
		"tel": "+46123456789",
		"mail": "ex.mail@mail.com",
		"address": "address",
		"postalCode": "123 45",
		"city": "City name"
	},
  ...
}
```
The contacts object should contain all of the above shown keys. _Note; the telephone number should be 'raw' an not contain spaces, hyphens, etc._

### Changing the **openingHours**:
```json
{
  ...
	"openingHours": {
		"weekdays": "00-00",
		"saturday": "00-00",
		"sunday": "00-00"
	}
}
```
The openingHours object should contain all of the above shown keys; following the hours by the day. For example, if the opening hours for sunday is from 7am to 3pm, then the value would be: "07-15"; more specific hours such as "07:30-16:15" is allowed.