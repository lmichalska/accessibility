# A11y Workshop

Welcome to the **Accessibility Workshop** repository! This project is designed to help frontend developers learn the essentials of building accessible websites and creating inclusive user experiences. Accessibility isn’t just about compliance—it’s about ensuring that everyone, regardless of ability, can use and enjoy your site.

This repository includes a sample React project built with Vite to simulate real-world scenarios. You'll explore common accessibility challenges and try to solve them, to not make the same mistakes in your own projects.

Test yourself by identifying and fixing accessibility issues in the provided project. With hands-on practice, you’ll gain a deeper understanding of:

- Semantic HTML
- ARIA roles and attributes
- Keyboard navigation
- Accessible animations and motion

---

## **Table of Contents**

- [Getting Started](#getting-started)
- [Features](#features)
- [Scripts](#scripts)
- [Accessibility Testing](#accessibility-testing)
- [Contributing](#contributing)
- [License](#license)

---

## **Getting Started**

### **Prerequisites**

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v16 or newer recommended)
- [npm](https://www.npmjs.com/)

### **Installation**

You can start by either **forking** or **cloning** this repository:

#### **Option 1: Fork the Repository**

1. Click the "Fork" button on the top-right corner of this repository's page (if on GitHub).
2. Clone your forked repository:
   ```bash
   git clone https://github.com/your-username/accessibility-workshop.git
   cd accessibility-workshop
   ```

#### **Option 2: Fork the Repository**

1. Clone the repository:
   ```bash
   git clone https://github.com/OlgaMozejko/a11y-workshop
   cd a11y-workshop
   ```

#### **Set-up the project**

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open your browser and navigate to the provided local URL (e.g., `http://localhost:3000`).

---

## **Features**

- **Interactive Workshop Page**: Includes common accessibility issues for practice.
- **Vite + React**: Fast and modern frontend development environment.
- **Accessibility Testing**: Integrated tools for testing and fixing accessibility problems.

---

## **Accessibility Testing**

### **Tools Used**

- **[Playwright](https://playwright.dev/)**: End-to-end testing framework.
- **[Axe-playwright](https://www.npmjs.com/package/axe-playwright)**: provides simple commands to integrate the axe-core® library for Playwright.

### **Running Tests**

To run the accessibility tests:

1. Install Playwright dependencies:

   ```bash
   npx playwright install
   ```

2. Run the tests:
   ```bash
   npx playwright test
   ```

In order to run the tests you need to have the local solution running. Playwright will open a browser and check for accessibility issues using Axe. The test results will be displayed in the terminal.

---

## **Contributing**

Contributions are welcome! If you find an issue or want to enhance the workshop, feel free to submit a pull request. Follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to your branch (`git push origin feature-name`).
5. Open a pull request.

---

## **License**

This project is licensed under the [MIT License](LICENSE).

---

## **Feedback**

Have suggestions or feedback? Open an issue or reach out directly via GitHub.

---

Happy coding 🌍✨
