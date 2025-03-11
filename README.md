# Notes App 📝

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![PocketBase](https://img.shields.io/badge/PocketBase-B8DBE4?style=for-the-badge&logo=pocketbase&logoColor=black)

A modern, full-stack notes application built with Next.js and TypeScript, powered by PocketBase for backend operations. Users can add and view notes.

[Features](#-features) • [Tech Stack](#️-tech-stack) • [Installation](#-installation--running-locally) • [Contributing](#-contributing) • [Screenshots](#-screenshots) • [Author](#-author)

</div>

## ✨ Features

- **🎯 Intuitive Note Management** - Create, edit, and delete notes with ease
- **📱 Responsive Design** - Seamless experience across all devices
- **⚡ Fast Performance** - Built with Next.js for optimal speed and SEO
- **🔒 Local Backend** - Powered by PocketBase for secure data management

## 🛠️ Tech Stack

### Frontend
- **Next.js** - React framework for production
- **TypeScript** - For type-safe code
- **TailwindCSS** - Utility-first CSS framework

### Backend
- **PocketBase** - Open source backend in one file

## 🚀 Installation / Running Locally

1. **Clone the repository**

   ```bash
   git clone https://github.com/Ashwin-S-Nambiar/Notes-App.git
   cd notes-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up PocketBase**
   - Download PocketBase executable from [pocketbase.io](https://pocketbase.io/docs/)
   - Add `pocketbase.exe` to project root
   - Start PocketBase server:

     ```bash
     ./pocketbase serve
     ```

4. **Configure PocketBase**
   - Create a new collection following the prompts
   - API endpoint will be available at `http://localhost/api/`

5. **Launch development server**

   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000` to view the app.

## 🤝 Contributing

Contributions are welcome! Here's how you can help improve Notes App:

1. Fork the repository
2. Create a feature branch:

   ```bash
   git checkout -b feature/amazing-feature
   ```

3. Commit your changes:

   ```bash
   git commit -m 'Add some amazing feature'
   ```

4. Push to the branch:

   ```bash
   git push origin feature/amazing-feature
   ```

5. Open a Pull Request   

## 📸 Screenshots

<div align="center">

### Landing Page
![Landing Page](./public/screenshots/Landing-Page.png)

### Creating a New Note
![Adding a Note](./public/screenshots/Note-Adding.png)

### Home Page with New Note
![New Note Added](./public/screenshots/New-Note-Added.png)

### Note Details
![Note Details](./public/screenshots/Note-Detail.png)

### PocketBase Admin Interface
![PocketBase Backend](./public/screenshots/PocketBase.png)

### Database Structure
![Backend Structure](./public/screenshots/Backend-Structure.png)

</div>

## 👤 Author

### Ashwin S Nambiar
- Portfolio: [ashwin-s-nambiar.is-a.dev](https://ashwin-s-nambiar.is-a.dev/)
- GitHub: [@Ashwin-S-Nambiar](https://github.com/Ashwin-S-Nambiar)

---

<div align="center">
Made with ❤️ by Ashwin S Nambiar
</div>
