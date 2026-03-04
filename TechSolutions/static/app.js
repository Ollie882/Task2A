// Initialize Supabase
const SUPABASE_URL = "YOUR_SUPABASE_URL";
const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY";
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// PAGE NAVIGATION
function show(page){
  document.querySelectorAll("section").forEach(s => s.classList.remove("active"));
  document.getElementById(page).classList.add("active");
}

// LOAD MAINTENANCE LOG
async function loadMaintenance(){
  const {data} = await supabaseClient.from("maintenance").select("*");
  renderMaintenance(data);
  updateDashboard(data);
}

// RENDER MAINTENANCE LOG CARDS
function renderMaintenance(data){
  const container = document.getElementById("maintenanceList");
  container.innerHTML = "";
  data.forEach(d => {
    container.innerHTML += `
      <div class="card">
        <h3>${d.equipment_id} - ${d.service_type}</h3>
        <p>Date: ${d.date}</p>
        <p>${d.tech_notes}</p>
        <p>Status: ${d.status}</p>
      </div>`;
  });
}

// SEARCH / FILTER LOG
function filterLog(){
  const term = document.getElementById("searchEquip").value.toLowerCase();
  supabaseClient.from("maintenance").select("*").then(({data})=>{
    const filtered = data.filter(d => 
      d.equipment_id.toLowerCase().includes(term) || 
      d.service_type.toLowerCase().includes(term)
    );
    renderMaintenance(filtered);
  });
}

// ADD NEW MAINTENANCE ENTRY
async function addMaintenance(){
  const equipment_id = document.getElementById("equipId").value;
  const service_type = document.getElementById("serviceType").value;
  const tech_notes = document.getElementById("techNotes").value;
  const date = new Date().toISOString().split("T")[0];
  await supabaseClient.from("maintenance").insert([{equipment_id, service_type, tech_notes, date, status:"pending"}]);
  alert("Maintenance entry added!");
  loadMaintenance();
}

// DASHBOARD COUNTS
function updateDashboard(data){
  const pending = data.filter(d => d.status === "pending").length;
  const completed = data.filter(d => d.status === "completed").length;
  const overdue = data.filter(d => d.status === "overdue").length;
  document.getElementById("pendingCount").innerText = pending;
  document.getElementById("completedCount").innerText = completed;
  document.getElementById("overdueCount").innerText = overdue;
}

// SIMPLE CALENDAR
function loadCalendar(){
  const container = document.getElementById("calendar");
  container.innerHTML = "";
  for(let i=1; i<=30; i++){
    const day = document.createElement("div");
    day.className = "calendar-day upcoming";
    day.innerText = i;
    container.appendChild(day);
  }
}

// LOAD NOTIFICATIONS
async function loadNotifications(){
  const {data} = await supabaseClient.from("maintenance").select("*");
  const container = document.getElementById("notificationList");
  container.innerHTML = "";
  data.forEach(d => {
    const overdueClass = d.status === "overdue" ? "overdue" : "";
    container.innerHTML += `<div class="notification ${overdueClass}">${d.equipment_id} - ${d.service_type} (${d.status})</div>`;
  });
}

// INITIAL LOAD
loadMaintenance();
loadCalendar();
loadNotifications();