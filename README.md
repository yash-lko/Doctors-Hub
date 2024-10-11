# Doctor Management Application

A responsive web application for managing doctors, filtering by specialty and location, and adding new doctors using modals. The app includes search functionality and intuitive UI interactions for better user experience.

## Approach

### 1. **Components & Design:**
   - **Header Component**: The header contains a branding icon, application name, and a button to add new doctors. The button opens a modal for adding a doctor.
   - **SearchBar Component**: Provides a search input field to filter doctors by name. The input includes a search icon for better UX.
   - **Filters Component**: Allows users to filter doctors based on their specialties and locations, which are dynamically populated from the doctor data.
   - **DoctorCard Component**: Displays detailed information about a doctor, such as name, specialty, location, and rating. Each card has a hover effect to provide a dynamic and modern feel.
   
   The project leverages **React Bootstrap** for a responsive layout and consistent styling across components.

### 2. **State Management:**
   - **useState** is used for managing local component state, such as showing/hiding the add doctor modal, loading states, and selected filter options.
   - **useContext (DoctorContext)**: The doctor data is managed globally using React's `Context API`, which allows easy access to the doctors' list throughout the app.

### 3. **Asynchronous Logic:**
   - For loading filter options (specialty and location), we introduced a `useEffect` with a loading simulation. This demonstrates how to handle asynchronous data fetching in a real-world scenario.
   - Doctors are dynamically filtered and displayed as per the selected filters (specialty and location).

### 4. **Styling:**
   - The application uses a combination of **custom CSS** and **Bootstrap classes**. Each component has unique class names, and common elements like buttons, inputs, and cards are styled for a consistent UI.

## How to Run the Project

### Prerequisites

- **Node.js**: Make sure you have [Node.js](https://nodejs.org/) installed (version 14+ recommended).
- **npm** or **yarn**: Ensure you have either npm or yarn installed to manage packages.

### Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/doctor-management-app.git
