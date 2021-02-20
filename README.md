# Node.js E-Commerce API 

This full E-Commerce API build using Express and Mongo. Here it contains all the required functionalities of a full-fledged E-commerce API like User registration, User Login, Category Add, Edit & Delete, Product Add, Edit, Delete, Add product feature image & Add product images, Order creation and etc...

## Setup
 
```
    $ git clone https://github.com/dinushchathurya/nodejs-ecommerce-api.git
    $ cd nodejs-ecommerce-api
    $ npm install
```
  - Duplicate and database.configexample.js as database.confi.js and fill in environment variables

  ### Run The Service
  ```
  $ nodemon app.js
  ```
## API Endpoints

## User Routes

### * Create User

`POST |  /api/v1/users/register` 

| Key       | Value          |
| --------- | -----------    |
| name      | Admin          |
| email     | admin@admin.com|
| password  | password       |
| phone     | +947187520     |
| isAdmin   | true           |
| street    | Main Street    |
| apartment | Block C        |
| zip       | 10870          |
| city      | Colombo        |
| country   | SriLanka       |

### * Login User

`POST |  /api/v1/users/login` 

| Key        | Value          |
| ---------  | -----------    |
| email      | admin@admin.com|
| password   | password       |

### * Get Users

`GET |  /api/v1/users` 

### * Get Single Users

`GET |  /api/v1/users/{id}` 

### * Delete User

`DELETE |  /api/v1/users/{id}` 

### * Get Users Count

`GET |  /api/v1/users/get/count` 

## Category Routes

### * Create Category

`POST |  /api/v1/categories` 

| Key   | Value      |
| ------| ---------- |
| name  | Category 1 |
| icon  | icon-health|
| color | #55879     |

### * Get Categories

`GET |  /api/v1/categories` 

### * Get Single Category

`GET |  /api/v1/categories/{id}` 

### * Update Category

`PUT |  /api/v1/categories/{id}` 

| Key   | Value      |
| ------| ---------- |
| name  | Category 1 |
| icon  | icon-health|
| color | #55879     |

### * Delete Category

`DELETE |  /api/v1/categories/{id}`

## Product Routes

### * Create Product

`POST |  /api/v1/products` 

| Key            | Value           |
| ---------      | -----------     |
| name           | Product 1       |
| description    | Description     |
| richDescription| Rich Description|
| image          | image           |
| brand          | Brand 1         |
| price          | 50              |
| category       | {category_id}   |
| countInStock   | 100             |
| rating         | 4.5             |
| numReviews     | 40              |
| isFeatured     | true            |

### * Get Products

`GET |  /api/v1/products` 

###  * Get Single Category

`GET |  /api/v1/products/{id}` 

###  * Get Prodcut Counts

`GET |  /api/v1/products/get/count` 

###  * Get Featured Prodcut Counts

`GET |  /api/v1/products/get/featured/{count}`

### * Upload Galley Images

`POST |  /api/v1/products/gallery-images/{id}`
| Key            | Value           |
| ---------      | -----------     |
| images         | Array of images |

### * Update Product

`PUT |  /api/v1/products` 
| Key            | Value           |
| ---------      | -----------     |
| name           | Product 1       |
| description    | Description     |
| richDescription| Rich Description|
| image          | image           |
| brand          | Brand 1         |
| price          | 50              |
| category       | {category_id}   |
| countInStock   | 100             |
| rating         | 4.5             |
| numReviews     | 40              |
| isFeatured     | true            |

### * Delete Product

`DELETE |  /api/v1/products/{id}`

## Orders Routes

### * Create Order

`POST |  /api/v1/orders` 
```
{
	"orderItems":[
		{
			"quantity": 3,
			"product" : "602e9c348e700335d8532b14"
		},
			{
			"quantity": 2,
			"product" : "602bde0161fcc409fc149734"
		}
	],
	"shippingAddress1" : "No 45,Park Street",
	"shippingAddress2" : "No 46,Main Street",
	"city" : "Colombo",
	"zip" : "10600t",
	"country" : "Sri Lanka",
	"phone" : "+94717185748",
	"user" : "602e9b718e700335d8532b13"
}
```
### * Get Orders

`GET |  /api/v1/orders` 

### * Get Single Order

`GET |  /api/v1/orders/{id}` 

### * Get Total Order Count

`GET |  /api/v1/orders/get/count`

### * Get Total Sales

`GET |  /api/v1/orders/get/totalsales`

### * Get User Order

`GET |  /api/v1/orders/get/usersorders/{userid}`

### * Update Single Order

`PUT |  /api/v1/orders/{id}` 

### * Delete Single Order

`DELETE |  /api/v1/orders/{id}` 

## Author
[Dinush Chathurya](https://dinushchathurya.github.io/)

## License

Copyright (c) 2020 <a href="https://dinushchathurya.github.io/">Dinush Chathurya</a> and <a href="https://codingtricks.io/">codingtricks.io</a>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Blog

https://codingtricks.io/


## 

<p ><h2 align="center">Happy<i class="fa fa-heart" style="color:red;"></i> Coding<i class="fa fa-code" style="color:orange;"> </i></h2></p>
