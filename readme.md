# Items API

![Express](https://img.shields.io/badge/Express-4.17.1-blue) ![Node.js](https://img.shields.io/badge/Node.js-14.x-green) ![UUID](https://img.shields.io/badge/UUID-v4-orange) ![CORS](https://img.shields.io/badge/CORS-enabled-yellow)

This is a simple API built with Express.js, providing endpoints to get and add products. The API uses CORS for handling cross-origin requests and UUID for generating unique item IDs.

## Table of Contents

- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running the Server](#running-the-server)
- [API Endpoints](#api-endpoints)
  - [Get Status](#get-status)
  - [Get Items](#get-items)
  - [Add Item](#add-item)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Installation

1. **Clone the repository**

   ```sh
   git clone https://github.com/AllanTAP/products-marketplace-backend.git
   cd products-marketplace-backend
   ```

2. **Install dependencies**
   ```sh
   yarn
   ```

### Running the Server

1. **Start the server**

   ```sh
   yarn dev
   ```

2. **Server will be running at**
   ```
   http://localhost:3001
   ```

## API Endpoints

### Get Items

- **URL:** `/items`
- **Method:** `GET`
- **Response:**
  ```json
  {
    "status": 200,
    "items": [
      {
        "id": "uuid",
        "name": "Item Name",
        "price": 100
      },
      ...
    ]
  }
  ```

### Add Item

- **URL:** `/items`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "name": "New Item",
    "price": 150
  }
  ```
- **Response:**
  ```json
  {
    "status": 200,
    "items": [
      {
        "id": "uuid",
        "name": "New Item",
        "price": 150
      },
      ...
    ]
  }
  ```

## Technologies Used

- [Express.js](https://expressjs.com/)
- [Node.js](https://nodejs.org/)
- [UUID](https://www.npmjs.com/package/uuid)
- [CORS](https://www.npmjs.com/package/cors)

## Project Structure

```
items-api/
├── store/
│   ├── items.js
├── index.js
├── package.json
├── README.md
```

- **`store/items.js`**: Module to get default items.
- **`index.js`**: Main server file.
- **`package.json`**: Project metadata and dependencies.

---

Made by [AllanTAP](https://github.com/AllanTAP)
