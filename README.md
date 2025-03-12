# Workout Planner App
# Author: Lulu Osofisan

## Overview
The **Workout Planner App** helps users browse workouts from a library and plan their fitness routines by adding and removing workouts. Users can search for exercises, view details, and manage their planned workouts.

## Features
- **Workout Library**: Browse exercises with images, descriptions, and categories.
- **Search Functionality**: Find workouts by name.
- **Planner**: Add and remove workouts from your personal plan.
- **Persistent Data**: Uses `db.json` for local data storage with `json-server`.

## Technologies Used
- **React** (Frontend UI)
- **React Router** (Navigation)
- **JSON Server** (Mock Backend)
- **CSS** (Styling)

## 📂 File Structure
```
/workout-planner
│── public/
│── src/
│   │── components/
│   │   │── App.js
│   │   │── Home.js
│   │   │── Library.js
│   │   │── Planner.js
│   │   │── WorkoutCard.js
│   │   │── NavBar.js
│   │── images/
│   │── index.js
│── db.json
│── package.json
│── README.md
```

## Installation & Setup
1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/workout-planner.git
   cd workout-planner
   ```

2. **Install dependencies:**
   ```npm install```

3. **Start the JSON Server:**
   ```npx json-server --watch db.json --port 3001```

4. **Start the React app:**
   ```npm start```

## Usage
- **Navigate**: Use the navbar to access the Library and Planner.
- **Search**: Enter a keyword in the search bar to filter workouts.
- **Add Workouts**: Click a button to add a workout to your planner.
- **Remove Workouts**: Click "Remove" to delete a workout from the planner.

---

Have suggestions? Feel free to open a pull request! 🚀

