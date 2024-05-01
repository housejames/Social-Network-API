# Social Network API

This is a RESTful API for a social network application built using Node.js, Express.js, and MongoDB. It allows users to perform CRUD operations on users and thoughts, as well as interact with friends.

## Getting Started

To get started with this API, follow these steps:

1. Clone this repository to your local machine:

   ```
   git clone <repository_url>
   ```

2. Install dependencies using npm:

   ```
   npm install
   ```

3. Set up your MongoDB database. Make sure you have MongoDB installed locally or use a cloud MongoDB service like MongoDB Atlas. Update the MongoDB connection string in `server.js` if necessary:

   ```javascript
   mongoose.connect('mongodb://localhost/social_network_db');
   ```

4. Start the server:

   ```
   npm start
   ```

   The server will start running at `http://localhost:3001`.

## API Endpoints

### Users

- **GET /api/users**: Get all users
- **GET /api/users/{userId}**: Get a single user by ID
- **POST /api/users**: Create a new user
- **PUT /api/users/{userId}**: Update a user by ID
- **DELETE /api/users/{userId}**: Delete a user by ID
- **POST /api/users/{userId}/friends/{friendId}**: Add a friend to a user
- **DELETE /api/users/{userId}/friends/{friendId}**: Remove a friend from a user

### Thoughts

- **GET /api/thoughts**: Get all thoughts
- **GET /api/thoughts/{thoughtId}**: Get a single thought by ID
- **POST /api/thoughts**: Create a new thought
- **PUT /api/thoughts/{thoughtId}**: Update a thought by ID
- **DELETE /api/thoughts/{thoughtId}**: Delete a thought by ID

## Dependencies

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)

## Contributing

Contributions are welcome! Please create a new branch and submit a pull request for review.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
