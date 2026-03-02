const API_KEY = "sb_publishable__zv1UMpTyJVMEumEPZ3liQ_yJS5YxIt";
const API_URL = "https://svugashtzpnqoqzfhgeq.supabase.co";
const TABLE_NAME = "itinerary_items";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("itinerary-form");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    await addItineraryItem();
  });

  loadItinerary();
});

async function addItineraryItem() {
  const destination = document.getElementById("destination").value.trim();
  const day_number = document.getElementById("day_number").value;
  const activity = document.getElementById("activity").value.trim();
  const accommodation = document.getElementById("accommodation").value.trim();
  const notes = document.getElementById("notes").value.trim();
  const message = document.getElementById("formMessage");

  // Validation
  if (!destination || !day_number || !activity || !accommodation) {
    message.textContent = "Please fill in all required fields.";
    return;
  }

  if (notes.length < 10) {
    message.textContent = "Notes must be at least 10 characters long.";
    return;
  }

  const body = {
    destination,
    day_number,
    activity,
    accommodation,
    notes
  };

  try {
    const response = await fetch(`${API_URL}/rest/v1/${TABLE_NAME}`, {
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
      message.textContent = "Could not add itinerary item.";
      return;
    }

    message.textContent = "Itinerary item added successfully!";
    document.getElementById("itinerary-form").reset();
    loadItinerary();

  } catch (error) {
    console.error(error);
    message.textContent = "Something went wrong.";
  }
}

async function loadItinerary() {
  const list = document.getElementById("itinerary-list");
  list.innerHTML = "";

  const response = await fetch(`${API_URL}/rest/v1/${TABLE_NAME}`, {
    headers: {
      "apikey": API_KEY,
      "Authorization": `Bearer ${API_KEY}`
    }
  });

  const data = await response.json();

  data.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `Day ${item.day_number}: ${item.destination} – ${item.activity}`;
    list.appendChild(li);
  });
}
