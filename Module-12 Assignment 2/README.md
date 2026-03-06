# React Customer Support Ticket System

## 📚 Overview
This project is a comprehensive ReactJS assignment demonstrating core React fundamentals and best practices. The challenge was to build a fully functional customer support ticket management system that showcases component-based architecture, state management, event handling, and responsive design patterns.

## 🎯 Assignment Objective
The main goal was to create an interactive ticket management dashboard where:

- Tickets are loaded and displayed dynamically from JSON data
- Users can browse and interact with customer support tickets
- Tickets can be marked as "In-Progress" with state updates
- In-Progress tickets can be marked as "Resolved" with automatic removal from active list
- Real-time statistics display (In-Progress count, Resolved count)
- User-friendly notifications for all actions
- Fully responsive design across all devices


## 🛠️ Technology Stack
- **React 19.2.0** - UI library for component-based architecture
- **Vite 7.3.1** - Modern build tool and development server
- **Tailwind CSS 4.2.1** - Utility-first CSS framework
- **DaisyUI 5.5.19** - Tailwind-based component library
- **React-Toastify 11.0.5** - Toast notification library
- **JavaScript (ES6+)** - Modern JavaScript features
- **HTML5** - Semantic markup

## 📋 Assignment Requirements
- **Check the REQUIRMENTS file :** [Click Here](./RECRUITMENTS.md)


## 📁 Folder Structure
```
cs-ticket/
├── AssignmentReadme.md         # This file - Assignment analysis
├── README.md                   # Project overview
├── package.json               # Project dependencies
├── vite.config.js            # Vite configuration
├── eslint.config.js          # ESLint rules
├── index.html                # HTML entry point
│
├── public/
│   ├── tickets.json          # Sample ticket data (12+ tickets)
│   └── vector1.png           # Background texture for Hero section
│
└── src/
    ├── main.jsx              # React app entry point
    ├── App.jsx               # Root component with state management
    ├── App.css               # Global styles
    ├── index.css             # Base styles
    │
    └── components/
        ├── Navbar.jsx        # Navigation header with menu
        ├── Hero.jsx          # Statistics display section
        ├── Hero.css          # Hero section styles
        ├── Dashboard.jsx     # Main ticket management interface
        ├── Footer.jsx        # Footer component
        └── assets/           # Image and media assets
```



## 🌟 Key Features & Implementation

### Dynamic Ticket Management
Tickets are fetched from `public/tickets.json` and displayed in a responsive grid. Each ticket card shows:
- Ticket ID and title
- Description
- Priority level (color-coded)
- Status badge (Open/In-Progress/Resolved)
- Customer name and date
- Interactive buttons for actions

### State Flow Example
```
User clicks ticket card
        ↓
Dashboard's handleSelection() called
        ↓
Calls onSelection(card) prop function
        ↓
App.jsx's setSelected updates state
        ↓
App.jsx re-renders with new selected array
        ↓
Hero component receives updated inProgressCount
        ↓
Toast notification displays success message
```

### Toast Notifications
React-Toastify provides visual feedback for:
- ✅ Ticket added to task list
- ✅ Issue marked as resolved
- Real-time notifications with customizable position, duration, and animations

### Responsive Design
Built with Tailwind CSS's responsive prefixes:
- **Mobile (default)** - Single column layout
- **MD breakpoint** - Two-column grid
- **Hover effects** - Scale transitions and shadow effects
- **Flexible spacing** - Scales with screen size


## 🔗 Project Links
- **Live Demo:** [CS Ticket System](https://arm-cs-ticket.vercel.app/)
- **GitHub Repository:** [arman4h/cs-ticket](https://github.com/arman4h/cs-ticket)

