const API_KEY = "sb_publishable_ieZKfNbd_cDQ83q4FfH5hg_42vmHFzw";
const API_URL = "https://bdhuqacjqqtzkgpygimb.supabase.co";

// Table name
const APPOINTMENTS_TABLE = "Customer_appointments";

console.log("JavaScript loaded");
console.log("Using Supabase:", API_URL);


// Run this code when page is ready
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("appointment-form");

    form.addEventListener("submit", async (event) => {
    event.preventDefault();
    await addAppointment();
    });
});


async function addAppointment() {
  // 1. Read values
    const patient_name = document.getElementById("patient_name").value.trim();
    const Information_needed = document.getElementById("Information_needed").value.trim();
    const date_of_birth = document.getElementById("date_of_birth").value;
    const date_of_appointment = document.getElementById("date_of_appointment").value;
    const address = document.getElementById("address").value.trim();
    const phone_number = document.getElementById("phone_number").value.trim();
    const gp = document.getElementById("gp").value.trim();

  // 2. Build body object for Supabase
    const body = {
    patient_name,
    Information_needed,
    date_of_birth,
    date_of_appointment,
    address,
    phone_number,
    gp
    };

    console.log("Sending to Supabase:", body);

  // 3. Send to Supabase
    try {
    const response = await fetch(`${API_URL}/rest/v1/${APPOINTMENTS_TABLE}`, {
        method: "POST",
        headers: {
        "apikey": API_KEY,
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
        "Prefer": "return=minimal"
        },
        body: JSON.stringify(body)
    });

    if (!response.ok) {
        const err = await response.text();
        console.error("Supabase error:", err);
        alert("Could not add appointment.");
        return;
    }

    alert("Appointment booked successfully!");

    // 4. Clear form
    document.getElementById("patient_name").value = "";
    document.getElementById("Information_needed").value = "";
    document.getElementById("date_of_birth").value = "";
    document.getElementById("date_of_appointment").value = "";
    document.getElementById("address").value = "";
    document.getElementById("phone_number").value = "";
    document.getElementById("gp").value = "";

    // 5. Optional:
    // loadAppointments();

    } catch (error) {
    console.error(error);
    alert("Something went wrong. Check the console.");
    }
}
