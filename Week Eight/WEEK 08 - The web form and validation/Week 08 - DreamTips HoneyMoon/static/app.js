/* =========================================================
   WK7 JavaScript Starter
   LEARN AREA: Fully working validation playground
   APPLY AREA: Prompts only (students build their own)
   ========================================================= */

/* -------------------------
   LEARN AREA: Elements
   ------------------------- */
function initializeLearnElements() {
  try {
    return {
      presenceInput: document.getElementById("learnPresence"),
      presenceError: document.getElementById("learnPresenceError"),
      btnPresence: document.getElementById("btnLearnPresence"),

      digitsInput: document.getElementById("learnDigits"),
      digitsError: document.getElementById("learnDigitsError"),
      btnDigits: document.getElementById("btnLearnDigits"),

      formatInput: document.getElementById("learnFormat"),
      formatError: document.getElementById("learnFormatError"),
      btnFormat: document.getElementById("btnLearnFormat"),

      rangeInput: document.getElementById("learnRange"),
      rangeError: document.getElementById("learnRangeError"),
      btnRange: document.getElementById("btnLearnRange"),

      lengthInput: document.getElementById("learnLength"),
      lengthError: document.getElementById("learnLengthError"),
      btnLength: document.getElementById("btnLearnLength")
    };
  } catch (error) {
    console.error('Error initializing learn elements:', error);
    return {};
  }
}

const learn = initializeLearnElements();

// Check if all required elements exist
function checkLearnElements() {
  const requiredElements = Object.values(learn);
  const missingElements = requiredElements.filter(element => !element);
  
  if (missingElements.length > 0) {
    console.warn('Some Learn Area elements are missing from the DOM');
    return false;
  }
  return true;
}

/* -------------------------
   Shared helper functions
   These are real examples you can reuse later.
   ------------------------- */

// Presence check
function hasValue(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

// Digit check (digits only)
function isDigitsOnly(value) {
  return typeof value === 'string' && /^[0-9]+$/.test(value);
}

// Format check (simple email check)
function isValidEmail(value) {
  // sensible beginner pattern: something@something.something
  return typeof value === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

// Range check
function isInRange(num, min, max) {
  return Number.isFinite(num) && num >= min && num <= max;
}

// Length check
function isLengthOk(value, maxLength) {
  return value != null && value.length <= maxLength;
}

function setLearnMessage(target, message) {
  if (target) {
    target.textContent = message;
  }
}

function clearLearnMessage(target) {
  if (target) {
    target.textContent = "";
  }
}

/* -------------------------
   LEARN AREA: Handlers
   Each handler:
   - Reads input
   - Runs one check
   - Writes an accessible message near the input
   ------------------------- */

// A) Presence check example
if (learn.btnPresence && learn.presenceInput && learn.presenceError) {
  learn.btnPresence.addEventListener("click", () => {
    const value = learn.presenceInput.value;

    if (!hasValue(value)) {
      setLearnMessage(learn.presenceError, "Please enter a value. This field cannot be blank.");
      return;
    }

    setLearnMessage(learn.presenceError, "PASS: A value has been entered.");
  });
}

// B) Digit check example
if (learn.btnDigits && learn.digitsInput && learn.digitsError) {
  learn.btnDigits.addEventListener("click", () => {
    const value = learn.digitsInput.value;

    if (!hasValue(value)) {
      setLearnMessage(learn.digitsError, "Please enter a phone number first.");
      return;
    }

    if (!isDigitsOnly(value)) {
      setLearnMessage(learn.digitsError, "FAIL: Digits only. Remove spaces, letters, or symbols.");
      return;
    }

    setLearnMessage(learn.digitsError, "PASS: Digits only.");
  });
}

// C) Format check example (email)
if (learn.btnFormat && learn.formatInput && learn.formatError) {
  learn.btnFormat.addEventListener("click", () => {
    const value = learn.formatInput.value;

    if (!hasValue(value)) {
      setLearnMessage(learn.formatError, "Please enter an email address first.");
      return;
    }

    if (!isValidEmail(value)) {
      setLearnMessage(learn.formatError, "FAIL: Enter an email in the format name@example.com.");
      return;
    }

    setLearnMessage(learn.formatError, "PASS: Email format looks valid.");
  });
}

// D) Range check example (1 to 5)
if (learn.btnRange && learn.rangeInput && learn.rangeError) {
  learn.btnRange.addEventListener("click", () => {
    const value = learn.rangeInput.value;

    if (!hasValue(value)) {
      setLearnMessage(learn.rangeError, "Please enter a number first.");
      return;
    }

    const num = Number(value);

    if (!Number.isFinite(num)) {
      setLearnMessage(learn.rangeError, "FAIL: Please enter a valid number.");
      return;
    }

    if (!isInRange(num, 1, 5)) {
      setLearnMessage(learn.rangeError, "FAIL: Number must be between 1 and 5.");
      return;
    }

    setLearnMessage(learn.rangeError, "PASS: Number is within the range 1 to 5.");
  });
}

// E) Length check example (max 20)
if (learn.btnLength && learn.lengthInput && learn.lengthError) {
  learn.btnLength.addEventListener("click", () => {
    const value = learn.lengthInput.value;

    if (!hasValue(value)) {
      setLearnMessage(learn.lengthError, "Please enter a message first.");
      return;
    }

    if (!isLengthOk(value, 20)) {
      setLearnMessage(learn.lengthError, "FAIL: Keep your message to 20 characters or fewer.");
      return;
    }

    setLearnMessage(learn.lengthError, "PASS: Message length is within the limit.");
  });
}

/* Optional: Clear learn messages when user types (helps usability) */
if (learn.presenceInput && learn.presenceError) {
  learn.presenceInput.addEventListener("input", () => clearLearnMessage(learn.presenceError));
}
if (learn.digitsInput && learn.digitsError) {
  learn.digitsInput.addEventListener("input", () => clearLearnMessage(learn.digitsError));
}
if (learn.formatInput && learn.formatError) {
  learn.formatInput.addEventListener("input", () => clearLearnMessage(learn.formatError));
}
if (learn.rangeInput && learn.rangeError) {
  learn.rangeInput.addEventListener("input", () => clearLearnMessage(learn.rangeError));
}
if (learn.lengthInput && learn.lengthError) {
  learn.lengthInput.addEventListener("input", () => clearLearnMessage(learn.lengthError));
}

/* =========================================================
   APPLY AREA: Students build from scratch
   ========================================================= */

/*
  The form below is intentionally NOT completed for students.

  They must:
  1) Decide their fields based on their 3NF design
  2) Add IDs and error <p> elements in HTML near each input
  3) Create their own validation rules and messages
  4) Ensure validation runs on submit
  5) Ensure at least TWO checks run live (input/change events)
*/

/* APPLY AREA: Hook the form (this will exist in the HTML) */
const enquiryForm = document.getElementById("enquiryForm");

/* TODO: Create objects to store your form inputs and error areas
   Example pattern (do not copy directly, adapt to your own fields):
   const fields = { customerId: ..., email: ..., destinationId: ... }
   const errors = { customerId: ..., email: ..., destinationId: ... }
*/

/* TODO: Write helper functions you will reuse
   - setError(fieldKey, message)
   - clearError(fieldKey)
   - clearAllErrors()
*/

/* TODO: Write your own validateAll() function
   It should:
   - run your chosen checks for each field
   - set clear messages near the correct field
   - return true if everything is valid, otherwise false
*/

/* TODO: Submit handler
   - preventDefault()
   - run validateAll()
   - show a user-friendly message in #formStatus
*/
if (enquiryForm) {
  enquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // TODO: Replace this placeholder with your own validation logic
    // const valid = validateAll();
    // if (!valid) { ... } else { ... }

    const status = document.getElementById("formStatus");
    if (status) {
      status.textContent = "TODO: Add your own submit validation for the Apply Area form.";
    }
  });
}

/* TODO: Live validation
   You must add at least TWO live checks, for example:
   - email format check on input
   - phone digits check on input
   - destination presence check on change
   - rating range check on change
*/

/* Optional challenge prompt:
   If you include a rating field, update #dynamicSummary or #reviewSummary
   based on the rating value. Make it update when the value changes.
*/
