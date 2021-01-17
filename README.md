# gunkulhomepage

Due to myself don't have much time on implementing this test. Some part may not be finished(Ex. frontend page for admin system) on time because I only have time after working hour to implenmenting this.

*In order to run and test the process, you can simply use "npm start" for both frontend and backend separately as they are currently seperated.

For frontend part(using Reactjs):
  - You can simply clone the repository and got to shop-frontend folder then, run "npm start".
  - This frontend part not yet included admin system.
  - Frontend part done with MVP(the UI is not that beautiful).
  - There're still one bug(not a bug actually) which the cart will be empty everytime you redirect to another page as I'm using render() so, it will refresh the page eveytime I change the route.
  
For backend part(using Node.js):
  - This is my second time using Node.js.
  - You can also simply clone the repository and got to shop-backend folder then, run "npm start".
  - I'm using cloud MongoDB as a database.
  - List of feature that already done:
      2.1 build endpoint to list all product.
      2.2 build endpoint to get product by id
      2.3 build endpoint to create product (name, description, price, image) *** image must be file (multipart/form-data) not the url of the image.
  - List of feature that have not done yet:
     1.1 Login Page with Email + Password
     1.2 After login redirect to the page that list all products that added from API(This one is almost done except to combine image with product detail object by image-id *image-id already added inside product detail object.)
     2.4 build endpoint to update product
     2.5 build endpoint to delete product
  - Don't forget to replace on 'REPLACEME at 'var mongo_uri = REPLACEME;' in index.js file.
