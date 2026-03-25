# 🍔 Food Delivery App

A simple yet structured **React-based Food Delivery Application** built to demonstrate core React concepts such as **Components, Props, Hooks, Routing, Redux Toolkit, Conditional Rendering, Event Handling, and Global State Management**.

This project was created as an academic submission to showcase practical understanding of **modern React development**.

<img width="1616" height="1312" alt="image" src="https://github.com/user-attachments/assets/874d8cda-5676-4393-8ecb-4be5aeb96df2" />


---

## 📌 Project Objective

The goal of this project is to build a mini food delivery web application where users can:

- View a food menu
- Add food items to cart
- View cart contents
- Remove items from cart
- Calculate total price
- Place order successfully

At the same time, the project demonstrates important React concepts in a realistic mini-project format.

---

# 🚀 Features

- 🏠 Home page with food menu
- 🛒 Cart page with selected items
- ✅ Success page after checkout
- ➕ Add to Cart functionality
- ❌ Remove from Cart functionality
- 💰 Total Price Calculation
- 🔄 Routing between pages
- 🌍 Global cart state using Redux Toolkit
- ⚡ Automatic UI updates using React re-rendering
- 🧠 `useEffect` usage for cart state tracking

---

# 🛠️ Tech Stack

- **React.js**
- **JavaScript (ES6)**
- **React Router DOM**
- **Redux Toolkit**
- **React Redux**
- **HTML / JSX**
- **CSS (Inline Styling)**

---

# 📁 Project Folder Structure

```txt
food-delivery-app/
│
├── node_modules/
├── public/
│   ├── index.html
│
├── src/
│   │
│   ├── components/
│   │   ├── Header.js
│   │   ├── FoodItem.js
│   │   ├── FoodList.js
│   │   └── Cart.js
│   │
│   ├── pages/
│   │   ├── Home.js
│   │   ├── CartPage.js
│   │   └── Success.js
│   │
│   ├── redux/
│   │   ├── store.js
│   │   └── cartSlice.js
│   │
│   ├── App.js
│   └── index.js
│
├── package.json
├── package-lock.json
└── README.md
