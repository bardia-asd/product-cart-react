# Product List with Cart

A React-based e-commerce product list application with shopping cart functionality, built as a solution to the [Frontend Mentor Product List with Cart Challenge](https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d).

![Project Preview](./public/preview.jpg)

## 🚀 Live Demo

**[View Live Demo](https://product-cart-react-mu.vercel.app/)**

## 📋 Challenge Overview

This project is a solution to the Frontend Mentor "Product List with Cart" challenge, which focuses on building a functional product list with cart management capabilities. The challenge emphasizes updating the UI in multiple places based on user actions and practicing dynamic DOM population.

## ✨ Features

-   **Product Display**: Beautiful product grid showcasing dessert items with images, names, categories, and prices
-   **Shopping Cart**: Add, remove, and manage items in the cart
-   **Quantity Controls**: Increase/decrease item quantities with intuitive +/- buttons
-   **Order Confirmation**: Modal confirmation when placing an order
-   **Responsive Design**: Optimized for desktop, tablet, and mobile devices
-   **Keyboard Navigation**: Full keyboard accessibility support
-   **Interactive States**: Hover and focus states for all interactive elements

## 🛠️ Tech Stack

-   **React** - Frontend framework
-   **Vite** - Build tool and development server
-   **Tailwind CSS** - Styling and responsive design
-   **Lucide React** - Icon library
-   **ESLint** - Code linting

## 🎯 Key Functionality

### Cart Management

-   Add items to cart from product list
-   Remove items from cart
-   Increase/decrease item quantities
-   Real-time cart count updates
-   Persistent cart state during session

### User Experience

-   Smooth animations and transitions
-   Responsive design across all devices
-   Accessible keyboard navigation
-   Visual feedback for all interactions
-   Order confirmation modal

## 🚀 Getting Started

### Prerequisites

-   Node.js (version 14 or higher)
-   npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/product-list-cart.git
cd product-list-cart
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Cart/
│   │   ├── Cart.jsx
│   │   ├── CartItem.jsx
│   │   ├── CartList.jsx
│   │   └── EmptyCart.jsx
│   ├── ProductList/
│   │   ├── AddToCartButton/
│   │   │   ├── AddToCartButton.jsx
│   │   │   ├── AddToCartSpan.jsx
│   │   │   └── CartControls.jsx
│   │   ├── ProductImage.jsx
│   │   ├── ProductInfo.jsx
│   │   ├── ProductItem.jsx
│   │   └── ProductList.jsx
│   ├── Modal/
│   │   ├── Modal.jsx
│   │   ├── ModalList.jsx
│   │   └── ConfimeModal.jsx
│   ├── Overlay.jsx
│   └── Shop.jsx
├── data.json
├── App.jsx
└── main.jsx
```

## 🎨 Design Features

-   **Modern UI**: Clean, professional design with attention to detail
-   **Responsive Layout**: Seamless experience across all device sizes
-   **Interactive Elements**: Smooth hover effects and button animations
-   **Color Scheme**: Professional red and white color palette
-   **Typography**: Clean, readable fonts with proper hierarchy

## 🔧 Available Scripts

-   `npm run dev` - Start development server
-   `npm run build` - Build for production
-   `npm run preview` - Preview production build
-   `npm run lint` - Run ESLint

## 📱 Responsive Design

The application is fully responsive and optimized for:

-   **Desktop**: 1440px and above
-   **Tablet**: 768px - 1439px
-   **Mobile**: 375px - 767px

## 🎯 Challenge Requirements Met

✅ Add items to cart and remove them  
✅ Increase/decrease the number of items in the cart  
✅ See an order confirmation modal when clicking "Confirm Order"  
✅ Reset selections when clicking "Start New Order"
✅ View optimal layout for different screen sizes  
✅ See hover and focus states for all interactive elements

## 🤝 Contributing

This is a Frontend Mentor challenge solution. If you'd like to suggest improvements or report issues, please feel free to open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

-   [Frontend Mentor](https://www.frontendmentor.io/) for providing the challenge
-   [Vite](https://vitejs.dev/) for the excellent build tool
-   [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
-   [Lucide React](https://lucide.dev/) for the beautiful icons

---

**Challenge Link**: [Frontend Mentor - Product List with Cart](https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d)  
**Live Demo**: [product-cart-react-mu.vercel.app](https://product-cart-react-mu.vercel.app/)
