# English Janala - Learn English Easily

A modern, interactive web application designed to help users learn English vocabulary through structured lessons and levels.

## 🎯 Project Overview

**English Janala** (englishjanala.com) is an ED-Tech application that provides an engaging platform for learning English vocabulary. The application features interactive lessons organized by difficulty levels, pronunciation guidance, and detailed word definitions with examples.

## ✨ Features

- **Level-Based Learning**: Browse lessons organized across multiple difficulty levels
- **Interactive Vocabulary Cards**: Display word, meaning/pronunciation, examples, and synonyms
- **Speech Synthesis**: Click to hear correct pronunciation of English words
- **Modal Details**: View comprehensive word information including:
  - Word pronunciation
  - Meaning in Bengali
  - Example sentences
  - Synonyms
- **Responsive Design**: Fully responsive UI built with Tailwind CSS and DaisyUI
- **Loading States**: User-friendly loading and empty states
- **FAQ Section**: Common questions about the platform

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, Tailwind CSS, DaisyUI
- **JavaScript**: Vanilla JavaScript (ES6+)
- **Fonts**: Poppins, Hind Siliguri (Bengali support)
- **APIs**: Programming Hero's English Learning API

## 📁 Project Structure

```
english-janala/
├── index.html           # Main HTML file
├── script.js            # Core JavaScript logic
├── style.css            # Custom CSS styles
├── tailwind.config.js   # Tailwind configuration
└── assets/              # Images and icons
```

## 🚀 Getting Started

1. Open `index.html` in your web browser
2. Click on a lesson level to view vocabulary
3. Click the info button to see detailed word information
4. Click the speaker icon to hear pronunciation

## 📝 Core Functions

- **`loadlessons()`** - Fetches all lesson levels from API
- **`loadwords()`** - Loads all vocabulary words
- **`levelLessons(id)`** - Fetches lessons for a specific level
- **`wordSpeak(word)`** - Uses Web Speech API for pronunciation
- **`detailModal(id)`** - Displays detailed word information in a modal
- **`displayModal(wordDetails)`** - Renders the modal with word details
- **`displaylessons(lessons)`** - Renders lesson cards
- **`displaylevels(datas)`** - Renders level buttons

## 🌐 API Integration

The application fetches data from Programming Hero's API:
- **All Levels**: `https://openapi.programming-hero.com/api/levels/all`
- **All Words**: `https://openapi.programming-hero.com/api/words/all`
- **Level Details**: `https://openapi.programming-hero.com/api/level/{id}`
- **Word Details**: `https://openapi.programming-hero.com/api/word/{id}`

## 💡 Key Highlights

- Bengali language support for better accessibility
- Clean, intuitive user interface
- Mobile-responsive design
- Zero configuration required
- Educational focus with interactive learning

## 📋 Status

Currently in demo mode - no account creation required. Full version with certificates coming soon!

---

*"ইংরেজি শিখুন সহজে" - Learn English Easily*
