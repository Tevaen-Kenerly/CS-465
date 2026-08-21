# CS 465 Portfolio Reflection

# Architecture

Throughout this project, I worked with multiple frontend development approaches. The Express application used server-side rendered HTML pages, where each request generated a new page from the server. This approach is simple and effective for basic websites but requires the page to reload whenever users navigate or submit information.

Later in the project, I developed an Angular single-page application (SPA) for the administrative side of the project. Unlike the Express application, the SPA dynamically updates content without requiring full page reloads, creating a faster and more responsive user experience. JavaScript provided the interactive functionality that allowed the frontend to communicate with the backend API while Angular organized the application into reusable components.

The backend used MongoDB because the application's travel data naturally fits a document-based database. MongoDB stores information as flexible JSON-like documents, making it easy to represent trips with different properties while integrating seamlessly with the Node.js and Express backend.

# Functionality

Although JavaScript and JSON are closely related, they serve different purposes. JavaScript is a programming language used to create application logic, while JSON is a lightweight format used to store and exchange structured data. In this application, JSON acted as the communication format between the Angular frontend, Express API, and MongoDB database. The frontend sent requests containing JSON, and the backend responded with JSON data that Angular displayed to users.

Throughout development, I refactored several portions of the application to improve readability, organization, and maintainability. I separated API routes from business logic, created reusable Angular components for displaying and editing trip information, and centralized HTTP requests into Angular services. Reusable UI components reduced duplicated code, simplified future updates, and made the application easier to maintain as new features were added.

# Testing

Developing a full stack application required testing both the frontend and backend. I tested API endpoints by sending GET, POST, PUT, and DELETE requests to verify that data was created, retrieved, updated, and removed correctly. I also verified that Angular displayed the returned data properly and handled user interactions without errors.

Adding authentication introduced additional testing requirements. Protected routes had to reject unauthorized requests while allowing authenticated users to access administrative functions. Understanding HTTP methods, RESTful endpoints, authentication tokens, and route protection helped me understand how secure communication occurs between the client and server in a full stack application.

# Reflection

This course significantly strengthened my understanding of modern full stack web development. Before taking this course, I had limited experience connecting frontend interfaces, backend APIs, databases, and authentication into one complete application. Building the Travlr application taught me how each layer of the stack works together to create a secure, responsive, and scalable web application.

The skills I developed—including Angular, Express, Node.js, MongoDB, RESTful APIs, authentication, and debugging—have increased my confidence as a software developer. Learning how to build a complete full stack application from the ground up has provided practical experience that I can showcase in my portfolio and discuss during future interviews. These skills will continue to be valuable as I pursue opportunities in software development and continue growing as a computer scientist.
