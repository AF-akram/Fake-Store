##  StoRe – React E-commerce Application
A simple and interactive e-commerce application built with React.js. StoRe allows users to browse products, filter them by category, view product details, and interact with products through a basic shopping interface.

Products are fetched dynamically from the Fake Store API.

##  Features : 
- Dynamic Products: Fetches product data from Fake Store API using Axios.
### Category Filtering: Browse products by category:
- All
- Jewelery
- Electronics
- Men's Clothing
- Women's Clothing
- => Featured Product: Displays a randomly selected product image based on the selected category.
- => Product Display: Shows product images, titles, prices, and rating counts.
- => uy Interaction: Clicking the Buy button decreases the selected product's rating count.
- => Global State Management: Uses React Context API to share product data and the selected category across components.
- => Loading Indicator: Displays a loading spinner while products are being fetched.
- =>Custom Design: Styled with CSS, custom fonts, and Material UI components.
## Technologies Used :
- React.js – Building the user interface.
- JavaScript (ES6+) – Application logic.
- React Context API – Global state management.
- React Hooks – useState, useEffect, and useContext.
- Axios – Fetching products from the API.
- Material UI (MUI) – Layout components and loading indicators.
- CSS3 – Custom styling, layouts, and hover effects.
- Fake Store API – Providing product data.

### The API provides information such as:

- Product ID
- Title
- Price
- Description
- Category
- Image
- Rating and rating count
#  State Management

- The application uses React Context API through ProductsContext.

- Two main states are managed globally:

- products: Stores the products retrieved from the API.
- category: Stores the currently selected category.

- The useProduct() custom hook makes these values accessible to different components without prop drilling.

##  Future Improvements

# Possible improvements for future versions:

- Add a shopping cart.
- Implement a checkout system.
- Add product search functionality.
- Add product detail pages.
- Improve responsive design for mobile devices.
- Add proper loading and error handling.
- Prevent rating counts from becoming negative.
 Author: Akram AFOUFOU
## GitHub user :
 AF-akram
## Live demo :
[https://store-akram-fad2.vercel.app]
