# MediHealth Digital Solution — Appointment Booking Module
 
This repository contains a core part of the digital solution being developed for **MediHealth**, a company offering basic healthcare services, online appointment scheduling, and health advice. The project is part of a wider initiative to modernise their platform and improve the experience of their users.
 
## Project Context
 
MediHealth carried out market research with existing customers to determine which features would most improve their digital experience. The findings highlighted the need for a smoother appointment process, clearer health guidance, and simpler navigation. This module focuses on building the appointment-booking element while following those broader objectives.
 
## Purpose of This Module
 
The files in this repository implement a web-based appointment form intended to act as the foundation for MediHealth’s improved scheduling system. The page allows staff or users to enter basic patient and appointment details, which are then sent to a backend service for storage.
 
Although this module currently handles booking only, it is structured in a way that can be extended to include rescheduling, cancellations, and integration with the wider MediHealth platform.
 
## Company Services
 
MediHealth provides:
 
- Basic medical check-ups  
- Online appointment scheduling  
- Health advice and tips through their website  
 
## Project Objectives
 
The overall aims of the digital solution include:
 
- Making appointment scheduling easier and quicker  
- Presenting health advice in a more interactive and personalised way  
- Improving the overall user experience with clearer structure and smoother navigation  
 
## Planned Key Features
 
This module contributes to the following platform-wide features:
 
### 1. Online Appointment Booking  
A user can submit appointment details through a clean and accessible form. In the full system, this will expand to managing rescheduling and cancellations as well.
 
### 2. Interactive Health Tips  
Although not included directly here, the structure of the project allows for additional panels or widgets that provide tailored health guidance based on user data.
 
### 3. Enhanced Navigation  
The layout and markup follow accessible, logical patterns that will integrate into a broader navigation system designed to help users move smoothly between services.
 
## Technology Stack
 
The current implementation uses:
 
- **HTML** for structure  
- **CSS** for styling with attention to readability, contrast, and accessibility  
- **JavaScript** for input handling and communication with the backend  
- **Supabase** (REST API) as the data layer  
 
This structure is modular, making it simple to expand the project as new features are added.
 
## File Structure
 
Typical files included:
 
- `index.html` — Main interface for booking appointments  
- `static/style.css` — Styling with accessibility considerations  
- `static/app.js` — Form validation and data submission to Supabase  
- `README.md` — Documentation for developers  
 
## Configuration Requirements
 
Before using the system, developers must provide:
 
- A Supabase project URL  
- A Supabase API key  
- A table named `appointments` with the expected column names  
 
These values should ideally be stored securely (for example, environment variables or a server-side proxy).
 
## Running the Module
 
To run the web page:
 
1. Open the `index.html` file in a browser.  
2. Ensure Supabase configuration values are correctly set in `app.js`.  
3. Test form submission by entering appointment details.  
 
Appointments will be added to the Supabase table if the database is correctly configured.
 
## Accessibility Notes
 
The form is written with accessibility guidelines in mind, including:
 
- Clear labels  
- Logical field grouping  
- Keyboard-friendly navigation  
- High-contrast and dyslexia-friendly styling options  
 
Further enhancements can be added based on WCAG and W3C recommendations.
 
## Future Development
 
Planned expansions for the full MediHealth platform include:
 
- Appointment rescheduling and cancellation  
- A dashboard to display upcoming and past bookings  
- Interactive health tips with tailored recommendations  
- A unified navigation system across all digital services  
 
## Licence
 
This project may be adapted and used for learning or development purposes. A formal licence can be added if required by MediHealth or future contributors.
 
 