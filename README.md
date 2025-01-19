# OCR Web Application

## Application Preview

![Application Preview](https://github.com/user-attachments/assets/c1a9af86-6f1c-4fff-8707-38f29a984387)

## Overview

The **OCR Web Application** is a tool that allows users to extract text from images using Optical Character Recognition (OCR). It is built with:

- **Frontend**: Next.js (hosted on Netlify)
- **Backend**: Flask + EasyOCR (hosted on Render)

This project is designed to provide a simple and efficient way to convert images containing text into editable digital text.

## Features

- **Image Upload**: Upload images (JPEG, PNG, etc.) containing text.
- **Text Extraction**: Extract text from images using EasyOCR.
- **Responsive Design**: Works seamlessly on desktop and mobile devices.
- **CORS Support**: Backend configured with CORS for cross-origin requests.
- **Environment Variables**: Dynamic backend URL configuration using environment variables.
- **Error Handling**: Basic error handling for invalid file types and server errors.

## Installation

To run this project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name

   Installation

2. **Set Up the Backend**
   
1. Navigate to the backend folder:
```bash
cd backend
```

2. Create a virtual environment and install dependencies:

```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

3. Start the Flask server:

```bash
python app.py
```

3. **Set Up the Frontend**
   
1. Navigate to the frontend folder:

```bash
cd ../frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the Next.js development server:

```bash
npm run dev
```

4. **Access the Application**
```   
Open your browser and go to http://localhost:3000.
```

## Deployment

**Backend**

1. Deploy the Flask backend to Render or another hosting platform.
2. Set the NEXT_PUBLIC_BACKEND_URL environment variable to the deployed backend URL.

**Frontend**

1. Deploy the Next.js frontend to Netlify.
2. Set the NEXT_PUBLIC_BACKEND_URL environment variable in Netlify.

## Usage

1. Open the application in your browser.
2. Upload an image containing text.
3. Click Extract Text to process the image.
4. View the extracted text displayed on the screen.

## Technologies Used

* Frontend:

    * Next.js
    * React
    * Tailwind CSS (optional, if used)

* Backend:

    * Flask
    * EasyOCR

* Hosting:

    * Netlify (Frontend)
    * Render (Backend)

## Folder Structure

```
your-repo-name/
├── frontend/              # Next.js frontend code
│   ├── pages/
│   ├── public/
│   ├── styles/
│   └── package.json
├── backend/               # Python backend code
│   ├── app.py
│   ├── requirements.txt
│   └── uploads/
└── README.md
```

## License
This project is licensed under the MIT License. See the [LICENSE]() file for details.

## Acknowledgments

* [EasyOCR](https://www.jaided.ai/easyocr/) for the OCR functionality.
* [Next.js](https://nextjs.org/) and Flask for the frontend and backend frameworks.
* [Netlify](https://www.netlify.com/) and [Render](https://render.com/) for hosting.

## Changelog

* v1.0.0: Initial release with image upload, text extraction, and basic error handling.

