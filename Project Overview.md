  
## Project Overview  
This project was developed to create a web-based system that allows users to access information, interact with features, and manage stored data through a clear user interface.  
The primary users are **customers**, **staff**, or **administrators**, depending on the system purpose.  
The system uses **HTML** to create the structure and layout of the web pages, **JavaScript** to handle user interaction and functionality, and **SQL** to create, store, and manage data in a database.  
A cloud-hosted database was selected because it allows data to be stored securely online and accessed from different devices.  
   
⸻  
   
## Use of Programming Languages  
I used **SQL** to create the database tables because SQL is designed for storing and managing structured data.  
```
CREATE TABLE users (
    user_id INT PRIMARY KEY,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    role VARCHAR(30) NOT NULL
);

```
This code creates a users table and uses constraints such as PRIMARY KEY, UNIQUE, and NOT NULL to protect data integrity.  
```
async function addUser(user) {
    try {
        const response = await fetch("/users", {
            method: "POST",
            body: JSON.stringify(user)
        });

        if (!response.ok) {
            throw new Error("User could not be added");
        }

        alert("User added successfully");
    } catch (error) {
        alert("Something went wrong");
    }
}

```
This JavaScript function sends user data to the database. I wrote it this way because try/catch helps handle errors if the request fails.  
   
⸻  
   
## Functionality: CRUD  
**Create**  
```
INSERT INTO users (user_id, email, password, role)
VALUES (1, 'user@email.com', 'password123', 'customer');

```
This adds a new user to the database.  
On success, the UI shows a confirmation message. If it fails, the user receives an error message.  
**Read**  
```
SELECT * FROM users;

```
This gets data from the database so it can be displayed on the page.  
**Update**  
```
UPDATE users
SET role = 'admin'
WHERE user_id = 1;

```
This updates an existing user record.  
**Delete**  
```
DELETE FROM users
WHERE user_id = 1;

```
This removes a user from the database.  
This supports the client brief because it allows the system to create, view, update, and remove records.  
   
⸻  
   
## Validation  
Validation is performed using JavaScript before data is submitted.  
```
if (email === "" || password === "") {
    alert("Please fill in all fields");
    return;
}

if (password.length < 8) {
    alert("Password must be at least 8 characters");
    return;
}

```
This prevents empty or weak data from being sent to the database.  
On success, the UI displays a success message or updates the page. If an error occurs, the user is shown a clear message.  
   
⸻  
   
## Code Organisation and Maintainability  
Functions are structured to complete one clear task at a time.  
```
function getFormData() {
    return {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };
}

```
This improves maintainability because the code is easier to read, test, and update.  
An improvement made during development was splitting repeated code into reusable functions.  
   
⸻  
   
## Defensive Programming and Robustness  
Client-side validation prevents incomplete forms from being submitted.  
Database constraints enforce correct data rules.  
All asynchronous calls were wrapped in try/catch to prevent the system from crashing if a network request fails.  
Testing revealed that empty fields, incorrect passwords, and failed database connections needed clearer error handling.  
   
⸻  
   
## User Experience  
**Useful**  
The system is useful because it allows users to complete tasks quickly, such as creating accounts, viewing data, or managing records.  
**Usable**  
Usability is improved through clear navigation, buttons, forms, and feedback messages.  
**Accessible**  
Accessibility is supported using clear headings, readable text, and correctly linked form labels.  
```
<label for="email">Email address</label>
<input id="email" type="email">

```
This helps users and screen readers understand what each input is for.  
   
⸻  
   
## Legal and Regulatory Standards  
In line with GDPR, only necessary user data is collected and stored.  
User confidentiality is protected by limiting access to sensitive data.  
The CIA model was considered:  
* **Confidentiality:** protects user data  
* **Integrity:** keeps data accurate  
* **Availability:** allows users to access the system when needed  
WCAG was applied through readable text, labelled inputs, and clear navigation.  
W3C standards were followed by writing valid HTML structure.  
   
⸻  
   
## Testing  
Testing was recorded in a test log.  
A boundary test was completed on password length.  
The test failed because passwords under 8 characters were accepted.  
The code was improved so passwords must now be at least 8 characters long.  
   
⸻  
   
## Iterative Development  
Iteration 1 focused on creating the main page structure.  
Testing revealed that some buttons did not work correctly.  
A conscious trade-off was using a simpler design to make the system easier to use and complete within the project time.  
   
⸻  
   
## Prompt Engineering and Responsible Use of AI  
AI was used to support planning, code explanation, debugging, and improving written documentation.  
One suggestion that was rejected involved adding advanced features that were outside the client brief.  
All AI outputs were manually verified and tested before being used.  
   
⸻  
   
## Final Evaluation  
Overall, the solution successfully meets the main client requirements by allowing users to interact with the system and manage data.  
Efficiency is demonstrated through reusable functions and clear code structure.  
One limitation of the prototype is that it may not include advanced security features such as full authentication or encrypted passwords. This is acceptable because the project is a prototype, but it would need improving before real-world use.  
