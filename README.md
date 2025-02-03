
# 🗒️ Notes App

**Description:**  
A full-stack app made using Next.js with TypeScript. Built to better understand Next.js and full-stack development. Uses PocketBase for backend, so can only run locally for the moment. More improvements coming soon.

## 🚀 Features

- **Create, Edit, and Delete Notes:** Easily manage your notes by adding, editing, and deleting them.
- **Responsive Design:** The app is optimized for a seamless experience on different devices.
- **Backend Integration:** Uses PocketBase as the backend for storing and managing notes.

## 🛠️ Tech Stack

- **Frontend:**
  - [Next.js](https://nextjs.org/): A React framework for building server-side rendered applications.
  - [TypeScript](https://www.typescriptlang.org/): A typed superset of JavaScript.
  - [TailwindCSS](https://tailwindcss.com/): A utility-first CSS framework for rapid UI development.

- **Backend:**
  - [PocketBase](https://pocketbase.io/docs/): A lightweight backend for managing data storage and users.

## 🛠️ Installation & Running Locally

To run the application locally, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Ashwin-S-Nambiar/Notes-App.git
   cd notes-app
   ```

2. **Install Dependencies:** Ensure you have **Node.js** installed. Then, install the required packages:

   ```bash
   npm install
   ```

3. **Set Up PocketBase:**  
   - Visit [PocketBase](https://pocketbase.io/docs/) and download the `pocketbase.exe` file for your operating system.
   - After adding the `pocketbase.exe` file to your project root, run the following command:

     ```bash
     ./pocketbase serve
     ```

4. **Create a New Collection:** Follow the prompts to create a new collection and records. The API endpoint will be accessible at `http://localhost/api/` for data access.

5. **Start the Development Server:**

   ```bash
   npm run dev
   ```

   **The application will be accessible at `http://localhost:3000`.**

## 📸 Screenshots
<div align="center">
    <h3>Landing Page</h3>
    <img src="./public/screenshots/Landing-Page.png" alt="Landing Page" />
</div>
<div align="center">
    <h3>Adding a New Note</h3>
    <img src="./public/screenshots/Note-Adding.png" alt="Adding a new Note" />
</div>
<div align="center">
    <h3>Showing the New Note in Home Page</h3>
    <img src="./public/screenshots/New-Note-Added.png" alt="Showing the New Note in Home" />
</div>
<div align="center">
    <h3>Note Details Page</h3>
    <img src="./public/screenshots/Note-Detail.png" alt="Note Details Page" />
</div>
<div align="center">
    <h3>PocketBase Backend</h3>
    <img src="./public/screenshots/PocketBase.png" alt="PocketBase Backend" />
</div>
<div align="center">
    <h3>PocketBase Backend Structure</h3>
    <img src="./public/screenshots/Backend-Structure.png" alt="PocketBase Backend Structure" />
</div>

## 🧑‍💻 Author
**[Ashwin S Nambiar](https://ashwin-s-nambiar.is-a.dev/)**
