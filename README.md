<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/KvJellyBean/mini-message-board">
    <img src="./public/logoBanner.png" alt="Logo Banner">
  </a>

<h3 align="center">JellyBoard</h3>

  <p align="center">
    A simple mini message board app designed for easy, real-time text chatting. Users can create new chats and view chat details in a straightforward, no-frills interface.
    <br />
    <a href="https://jellyboard.up.railway.app/">View Demo</a>
    ·
    <a href="https://github.com/KvJellyBean/mini-message-board/issues">Report Bug</a>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ul>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
  </ul>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![JellyBoard GIF][product-gif]](https://github.com/KvJellyBean/mini-message-board)

JellyBoard is a basic message board application focused on simplicity and ease of use. Designed for quick and seamless text-based communication, JellyBoard allows users to create new chats and open existing chat details. With a clean and minimalist interface, it provides just the essential features needed for chatting, making it perfect for those who want an uncomplicated messaging experience without extra features like channels or advanced settings.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

Quickly set up a local copy by following these simple steps for a seamless start.

### Prerequisites

- Web browser (Google Chrome recommended)
- Node package manager (npm)
  ```sh
  npm install npm@latest -g
  ```

### Installation

- Clone the repository to your local machine
  ```sh
    git clone https://github.com/KvJellyBean/mini-message-board.git
  ```
- Navigate to your local project
  ```sh
  cd mini-message-board
  ```
- Install dependencies
  ```sh
    npm install
  ```
- Copy the .env file
  ```sh
    cp .env.example .env
  ```
- Open `.env` and update DATABASE_URL with your PostgreSQL account details
  ```sh
    DATABASE_URL=postgresql://<yourPostgreAccount>:<yourPassword>@localhost:5432/messages
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

- Create Database

  ```sh
  psql -U <yourPostgreAccount>

  CREATE DATABASE messages;
  \c messages
  ```

- Run this command to populate initial database
  ```sh
    node db/populateDb.js
  ```
- Build and start the project
  ```sh
    npm run start
  ```
- If the project is not yet open, open it using `http://localhost:3000`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Home Page
  - [x] Display a list of available chats
  - [x] Basic message board layout
- [x] Message Creation
  - [x] Create new chat
  - [x] View individual chat details
- [ ] Search functionality

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

If you have suggestions to enhance this project, feel free to fork the repo and submit a pull request. Alternatively, you can open an issue with the "enhancement" tag. Your contributions are highly valued and will help make this project even better. Thank you for your support! 🚀

Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[product-gif]: ./public/JellyBoard.gif
