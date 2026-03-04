const SUPABASE_URL = "YOUR_SUPABASE_URL";
const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY";
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// PAGE NAVIGATION
function show(page){
  document.querySelectorAll("section").forEach(s => s.classList.remove("active"));
  document.getElementById(page).classList.add("active");
}

// LOAD PRODUCTS
async function loadProducts(){
  const {data} = await supabaseClient.from("products").select("*");
  renderProductList(data);
}

// RENDER PRODUCTS
function renderProductList(products){
  const container = document.getElementById("productList");
  container.innerHTML = "";
  products.forEach(p=>{
    container.innerHTML += `
      <div class="card">
        <h3>${p.name}</h3>
        <p>£${p.price}</p>
        <p>Category: ${p.category}</p>
        <button onclick="addToCart('${p.id}')">Add to Cart</button>
      </div>`;
  });
}

// FEATURED PRODUCTS FOR HOME
async function loadFeaturedProducts(){
  const {data} = await supabaseClient.from("products").select("*").limit(4).order('created_at',{ascending:false});
  const container = document.getElementById("featuredProducts");
  container.innerHTML = "";
  data.forEach(p=>{
    container.innerHTML += `
      <div class="card">
        <h3>${p.name}</h3>
        <p>£${p.price}</p>
        <button onclick="addToCart('${p.id}')">Add to Cart</button>
      </div>`;
  });
}

// LOYALTY POINTS
async function loadLoyalty(){
  const {data} = await supabaseClient.from("loyalty").select("*").limit(1);
  const points = data.length ? data[0].points : 0;
  document.getElementById("loyaltyPoints").innerText = `Points: ${points}`;
  document.getElementById("progressBar").style.width = Math.min(points,100) + "%";
}

// FILTER & SORT PRODUCTS
function filterProducts(){
  const search = document.getElementById("searchBar").value.toLowerCase();
  const category = document.getElementById("categoryFilter").value;
  const sort = document.getElementById("sortFilter").value;
  
  supabaseClient.from("products").select("*").then(({data})=>{
    let filtered = data.filter(p => (p.name.toLowerCase().includes(search)) && (category ? p.category===category : true));
    if(sort==='priceAsc') filtered.sort((a,b)=>a.price-b.price);
    if(sort==='priceDesc') filtered.sort((a,b)=>b.price-a.price);
    renderProductList(filtered);
  });
}

// ADMIN: ADD PRODUCT
async function addProduct(){
  const name = document.getElementById("pname").value;
  const price = parseFloat(document.getElementById("price").value);
  const category = document.getElementById("category").value;
  await supabaseClient.from("products").insert([{name,price,category}]);
  alert("Product added!");
  loadProducts();
  loadFeaturedProducts();
}

// DUMMY CART
function addToCart(id){
  alert("Added to cart: " + id);
}

// INITIAL LOAD
loadProducts();
loadFeaturedProducts();
loadLoyalty();