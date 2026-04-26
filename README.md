# cs465-fullstack

Architecture

Compare and contrast the types of frontend development you used, including Express HTML, JavaScript, and the SPA.
The project moved from static HTML pages to Express/Handlebars templates, which made the site more dynamic and easier to maintain. JavaScript connected the frontend to backend data through API calls, while the Angular SPA created a more interactive admin experience where content could update without reloading the full page. The SPA was the most flexible frontend approach because it separated UI behavior into components and services.

Why did the backend use a NoSQL MongoDB database?
The backend used MongoDB because the application data was structured naturally as JSON-like documents. MongoDB also made more sense than reading from static files because it allowed trip data to be stored, retrieved, added, and updated through the application more efficiently.

Functionality

How is JSON different from JavaScript, and how does JSON tie together the frontend and backend?
JavaScript is a programming language, while JSON is a lightweight data format used to structure and transfer information. In this project, JSON tied the frontend and backend together because API responses from Express/MongoDB could be sent as JSON, then parsed and displayed by the frontend.

Provide instances when you refactored code to improve functionality and efficiency, and name the benefits of reusable UI components.
One major refactor was replacing repeated static HTML with Handlebars templates and JSON-driven rendering, which reduced duplicate code. Another was moving trip display logic into an Angular component, such as a trip card, so the UI could be reused instead of rewritten in multiple places. Reusable components improve consistency, reduce errors, and make future updates easier.

Testing

Explain your understanding of methods, endpoints, and security in a full stack application.
API endpoints define where the frontend sends requests, while HTTP methods define the action being requested, such as GET for retrieving data, POST for creating data, PUT for updating data, and DELETE for removing data. Testing these endpoints requires confirming that the request method, URL, body data, and response codes all work correctly. Security adds another layer because protected endpoints should require authentication, such as validating a JWT before allowing users to add or update data.

Reflection

How has this course helped you reach your professional goals?
This course helped me build a stronger understanding of how full stack applications are structured from frontend to backend. I gained practice with Express, MongoDB, RESTful APIs, JSON, Angular components, routing, authentication, and API testing. These skills make me a stronger candidate because they show that I can work across the full application stack and understand how separate pieces of a web application communicate.
