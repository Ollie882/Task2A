// =========================
// 1. SUPABASE SETUP
// =========================
const SUPABASE_URL = "https://pfvwegxnedkvfxicorcs.supabase.co";
const SUPABASE_KEY = "sb_publishable_Z9Q4ujphtUmNQgL2HJPCOg_kqMkb0Xt";
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// =========================
// 2. LOAD ALL TABLES
// =========================
document.addEventListener("DOMContentLoaded", () => {
    loadAll();
});

async function loadAll() {
    await loadUsers();
    await loadRecipes();
    await loadRecipeIngredients();
    await loadOrders();
}

// =========================
// 3. LOAD USERS
// =========================
async function loadUsers() {
    const { data, error } = await supabase.from("Tbl_User").select("*");
    if (error) return console.error("User load error:", error);

    document.getElementById("users-body").innerHTML = data.map(u => `
        <tr>
            <td>${u.user_id}</td>
            <td>${u.user_name}</td>
            <td>${u.surname}</td>
            <td>${u.user_email}</td>
            <td>${u.loyalty_points}</td>
            <td>${u.address}</td>
        </tr>
    `).join("");
}

// =========================
// 4. LOAD RECIPES
// =========================
async function loadRecipes() {
    const { data, error } = await supabase.from("Tbl_Recipe").select("*");
    if (error) return console.error("Recipe load error:", error);

    document.getElementById("recipes-body").innerHTML = data.map(r => `
        <tr>
            <td>${r.recipe_id}</td>
            <td>${r.recipe_name}</td>
            <td>${r.recipe_difficulty}</td>
            <td>£${r.price}</td>
        </tr>
    `).join("");
}

// =========================
// 5. LOAD RECIPE INGREDIENTS
// =========================
async function loadRecipeIngredients() {
    const { data, error } = await supabase.from("Tbl_Recipe_Ingr_ID").select("*");
    if (error) return console.error("Ingredient load error:", error);

    document.getElementById("ri-body").innerHTML = data.map(i => `
        <tr>
            <td>${i.recipe_id}</td>
            <td>${i.ingredient}</td>
            <td>${i.quantity}</td>
        </tr>
    `).join("");
}

// =========================
// 6. LOAD ORDERS
// =========================
async function loadOrders() {
    const { data, error } = await supabase.from("Tbl_Order").select("*");
    if (error) return console.error("Order load error:", error);

    document.getElementById("orders-body").innerHTML = data.map(o => `
        <tr>
            <td>${o.order_id}</td>
            <td>${o.user_id}</td>
            <td>${o.recipe_id}</td>
        </tr>
    `).join("");
}

// =========================
// 7. ADD NEW USER
// =========================
document.getElementById("data-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const user_name = document.getElementById("first").value;
    const surname = document.getElementById("surname").value;
    const user_email = document.getElementById("email").value;
    const loyalty_points = parseInt(document.getElementById("loyalty").value) || 0;
    const address = document.getElementById("address").value;

    const { error } = await supabase.from("Tbl_User").insert([
        { user_name, surname, user_email, loyalty_points, address }
    ]);

    if (error) {
        console.error("Insert user error:", error);
        alert("Insert failed. Check console.");
    } else {
        alert("User added!");
        document.getElementById("data-form").reset();
        loadUsers();
    }
});
