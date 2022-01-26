# Car app

## Server

To install all dependencies

```bash
npm install
```

To run the server using nodemon

```bash
npm run dev
```

It's required to configure a .env file with MONGODB_URI, to run in local is mongodb://127.0.0.1:27017/car-app. It is possible to define a port to run the server, and the default will be 5000.

To test the api you can request /cars that will return you all the cars in the database or with a query string /cars?brand=<brand_name>

## Database

Import the csv file automatically in MongoDB Compass or using mongoimport command([Documentation](https://docs.mongodb.com/database-tools/mongoimport/))

## Client

To install all dependencies

```bash
npm install
```

To run the client

```bash
npm start
```

To run unit tests

```bash
npm test
```

To build optimized to production

```bash
npm run build
```

To format the project with prettier

```bash
npm run format
```