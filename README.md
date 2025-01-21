# User Management Dashboard

This project is a user management dashboard built with React, TypeScript, and Tailwind CSS. It lets you view, add, edit, and delete user information fetched from a mock API. The application is designed for easy user management and provides a responsive, modern UI.

---

## Features
- **View Users**: Paginated display of users with detailed information.
- **Search Functionality**: Search users by name, email, or department.
- **Add User**: Add new user data using a modal form.
- **Edit User**: Update existing user information via the modal form.
- **Delete User**: Remove user data with confirmation.
- **Pagination**: Efficiently browse through large datasets.

---

## Tech Stack
- **Frontend**: React, TypeScript, Tailwind CSS
- **API**: JSONPlaceholder for mock data
- **Build Tool**: Vite

---

## Getting Started

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/asanurag/User-Management-Dashboard-.git
   ```
2. Navigate to the project directory:
   ```bash
   cd User-Management-Dashboard-
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally
Start the development server:
```bash
npm run dev
```
Open your browser and navigate to:
```
http://localhost:5173
```

---

## Deployment
This project uses GitHub Pages for deployment.

### Steps to Deploy
1. Install the GitHub Pages plugin:
   ```bash
   npm install vite-plugin-gh-pages --save-dev
   ```
2. Configure the `vite.config.ts` file:
   ```ts
   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';
   import ghPages from 'vite-plugin-gh-pages';

   export default defineConfig({
     plugins: [react()],
     base: '/User-Management-Dashboard-/',
   });
   ```
3. Add the deploy script in `package.json`:
   ```json
   "scripts": {
     "deploy": "vite deploy"
   }
   ```
4. Run the deploy command:
   ```bash
   npm run deploy
   ```

The app will be available at:
```
[https://asanurag.github.io/User-Management-Dashboard-/]
```

---

## Project Structure
```
user-management-dashboard/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── UserManagementDashboard.tsx
│   ├── types/
│   │   └── index.ts
│   ├── services/
│   │   └── api.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── index.css
├── package.json
├── tsconfig.json
└── tailwind.config.js
```

---

## Reflection

### Challenges Faced
1. **API Integration**: Handling paginated and mock API data required managing state and ensuring data consistency.
2. **Error Handling**: Creating user-friendly error messages was essential for better UX.
3. **Responsive Design**: Adjusting layouts for various screen sizes presented design challenges.

### Improvements
- **Testing**: Adding unit and integration tests to ensure reliability.
- **Enhanced Features**:
  - Sorting by columns in the user table.
  - Advanced search filters for specific fields.
  - Bulk actions such as deleting multiple users.
- **UI Enhancements**: Using skeleton loaders for a better loading experience.

---

## Contributing
Contributions are welcome! Follow these steps to contribute:
1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## License
This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgments
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for mock API data.
- [Vite](https://vitejs.dev/) for a fast build tool.
- [Tailwind CSS](https://tailwindcss.com/) for modern and responsive styling.

---

Enjoy managing users effortlessly with this dashboard!

