# MiniCookieSession

MiniCookieSession is a web application that demonstrates the basic CRUD (Create, Read, Update, Delete) operations within a Node.js environment. Utilizing Express.js for server-side routing and templating with EJS, the application offers a straightforward user interface to handle products management.

## Features


- **Home (`/`)**: Display all products added to the database
- **Add Product (`/add-product`)**: Form to add new products
- **Admin (`/admin`)**: Admin interface for product management (edit/delete)
- **Login (`/login`)**: Simulate user login with a session

## Technologies

- [ejs](https://ejs.co/)
- [expressjs](https://expressjs.com/)
- [express-session](https://www.npmjs.com/package/express-session)
- [connect-mongodb-session](https://www.npmjs.com/package/connect-mongodb-session)
- [nodejs](https://nodejs.org/)
- [nodemon](https://nodemon.io/)
- [body-parser](https://www.npmjs.com/package/body-parser)
- [mongoose](https://mongoosejs.com/)
- [mongodb](https://www.mongodb.com/)

## Database

The application uses MongoDB for storing user details, product information, and session management. The local database URI is:

```
'mongodb://localhost:27017/MiniCookieSession'
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/m-mdy-m/MiniCookieSession.git
   ```
2. Enter the directory:
   ```bash
   cd MiniCookieSession
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the application:
   ```bash
   npm start
   ```

## Usage
Make sure MongoDB service is running on your machine.

After starting the application, navigate to `localhost:3000` on your browser. The default paths available are 'home' and 'login'. Authentication is simulated through a session mechanism, and upon logging in, additional paths become available.

## Related Articles

I have written extensive articles about the implementation and understanding of cookies and sessions in Node.js. You can read about the advantages, disadvantages, and usage techniques in these articles:

- Medium: [Understanding Cookies and Sessions in Node.js](https://medium.com/@m--mdy--m/understanding-cookies-and-sessions-in-node-js-f67995d321ed)
- dev.to: [Understanding Cookies and Sessions in Node.js](https://dev.to/m__mdy__m/understanding-cookies-and-sessions-in-nodejs-3449)

These articles complement the project by providing theoretical background and practical insights into the mechanisms that underpin the session management implemented in this demonstration.

## Contributing

Contributions to MiniCookieSession are welcome! Please feel free to fork the repository, make your changes, and create a pull request with your improvements.

## License

Distributed under the MIT License. See [LICENSE](https://github.com/m-mdy-m/MiniCookieSession/blob/main/LICENSE) for more information.
