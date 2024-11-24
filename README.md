# EduMarket - Online Education Platform

Experience at: [`edu-market.vercel.app`](edu-market.vercel.app)

EduMarket is a community project providing an online education platform that connects students, teachers, admins, and collaborators. The project consists of two main parts:

- **Frontend (EduMarketClient)**: Building the user interface, etc.
- **Backend (EduMarketServer)**: Managing data and handling business logic, REST APIs, etc.
---

## 📂 Project Structure

### Repository:

  + Frontend: [`edu-market-client`](https://github.com/zunohoang/EduMarketClient.git)
  + Backend: [`edu-market-server`](https://github.com/zunohoang/EduMarketServer.git)

### Tech:

- **Frontend:** Reactjs, TailwindCSS

- **Backend:** Nodejs (Expressjs)

- **Database:** MongoDB

- **Auth:** JWT

- **Cache:** Redis

- **Libs:** mongoose, dotenv, jsonwebtoken, redis... (more at package.json)

---

## 🚀 How to Run the Project

### Method 1. Using **Docker**

| (Update later)

### Method 2. Clone the code

#### Run **Backend**:
1. **Clone the Backend repo**:
    ```bash
    git clone https://github.com/zunohoang/EduMarketServer.git
    cd EduMarketServer
    ```
2. **Install dependencies**:
    ```bash
    npm i
    ```
3. **Configure environment variables**:
    Create a `.env` file with the following template:
    ```env
    PORT=5000

    MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/db

    JWT_SECRET=<your_secret_key>

    REDIS_PORT=<port>
    REDIS_PW=<password>
    REDIS_HOST=<url_host>
    ```
4. **Run the server**:
    ```bash
    npm run dev
    ```
    The server will run at: `http://localhost:<PORT>`.

---

#### Run **Frontend**:
1. **Clone the Frontend repo**:
    ```bash
    git clone https://github.com/zunohoang/EduMarketClient.git
    cd EduMarketClient
    ```
2. **Install dependencies**:
    ```bash
    npm i
    ```
3. **Configure environment variables**:
    Create a `.env` file with the following template:
    ```env
    VITE_PORT=<port>
    VITE_API=<server_url>
    ```
4. **Run the application**:
    ```bash
    npm run dev
    ```
    The application will run at: `http://localhost:<port>`.

## 🛠️ Contributing

If you want to contribute to the project, please follow these steps:
1. Fork the repository.
2. Create a new branch for the feature or bug fix:
    ```bash
    git checkout -b feature/<feature-name>
    ```
3. Commit your changes:
    ```bash
    git commit -m "Add feature <feature-name>"
    ```
4. Push to your branch:
    ```bash
    git push origin feature/<feature-name>
    ```
5. Create a Pull Request on GitHub.

---

## 📞 Contact

- **Lead Author**: [zunohoang](https://github.com/zunohoang)
- **Email**: nguyenvanhoang2005nt@gmail.com

Thank you for visiting the project! 🚀
