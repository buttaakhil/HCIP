# 🏥 Health Care Insurance Prediction

A full-stack web application that predicts monthly health insurance charges based on user inputs such as age, gender, BMI, smoking status, and region. Built using FastAPI for the backend and React for the frontend.

## Features

### Frontend

- **User Input Form:** Collects details like age, gender, BMI, smoking status, and region.
- **Real-Time Predictions:** Sends form data to the backend and displays the predicted insurance price.
- **Responsive UI:** Optimized layout for both desktop and mobile devices.
- **API Integration:** Communicates with the FastAPI backend using Axios.

### Backend

- **REST API Endpoint:** Receives user input and returns predicted insurance charges.
- **Machine Learning Model:** Trained regression model for insurance price prediction.
- **FastAPI Server:** Lightweight and fast Python web server for handling prediction requests.
- **CORS Configuration:** Allows frontend-backend communication during development.

## Tech Stack

### Frontend

- React
- React Hooks
- Axios
- Tailwind CSS (or your chosen CSS framework)

### Backend

- Python
- FastAPI
- Scikit-learn (for ML model)
- Uvicorn (ASGI server)
- Pandas & NumPy
- Joblib (for loading the trained model)

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Python 3.8+
- Node.js & npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/buttaakhil/HCIP.git
   cd HCIP
