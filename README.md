
![image](https://github.com/user-attachments/assets/7866da78-b53b-4ed1-926b-c87d3d31b712)



# Doctor's Hub Application

A responsive web application for managing doctors, filtering by specialty and location, and adding new doctors using modals. The app includes search functionality and intuitive UI interactions for a better user experience.

---

## Approach

### 1. Components & Design:
- **Header Component**:
  - Contains a branding icon, application name, and a button to add new doctors.
  - The button opens a modal for adding a doctor.
  
- **SearchBar Component**:
  - Provides a search input field to filter doctors by name.
  - The input includes a search icon for better UX.
  
- **Filters Component**:
  - Allows users to filter doctors based on their specialties and locations, dynamically populated from the doctor data.
  
- **DoctorCard Component**:
  - Displays detailed information about a doctor, such as name, specialty, location, and rating.
  - Each card has a hover effect to provide a dynamic and modern feel.

The project leverages **React Bootstrap** for a responsive layout and consistent styling across components.

### 2. State Management:
- **useState** is used for managing local component state, such as showing/hiding the add doctor modal, loading states, and selected filter options.
  
- **useContext (DoctorContext)**: 
  - The doctor data is managed globally using React's Context API, allowing easy access to the doctors' list throughout the app.

### 3. Asynchronous Logic:
- For loading filter options (specialty and location), a `useEffect` with a loading simulation is introduced. This demonstrates handling asynchronous data fetching in a real-world scenario.
  
- Doctors are dynamically filtered and displayed based on the selected filters (specialty and location).

### 4. Styling:
- The application uses a combination of custom CSS and Bootstrap classes.
  
- Each component has unique class names, and common elements like buttons, inputs, and cards are styled for a consistent UI.

---

## How to Run the Project

### Prerequisites
- **Node.js**: Make sure you have Node.js installed (version 14+ recommended).
- **npm**: Ensure you have npm or yarn installed to manage packages.

### Setup
1. **Clone the repository**:  
   `git clone https://github.com/your-username/Doctors-Hub.git`

2. **Navigate to the project directory**:  
   `cd Doctors-Hub`

3. **Install dependencies using npm**:  
   `npm install`

4. **Start the application using npm**:  
   `npm start`

The app will automatically open at [http://localhost:3000](http://localhost:3000) in your default web browser.
