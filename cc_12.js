/*******************************************************
 * TASK 1: Creating a "Revenue" Metric Card
 * -----------------------------------------------------
 * 1. Select the dashboard container using both getElementById
 *    and querySelector.
 * 2. Create a new <div> element for the metric card.
 * 3. Set class="metric-card" and id="revenueCard".
 * 4. Add a title ("Revenue") and a placeholder value ("$0").
 * 5. Append the metric card to the dashboard container.
 *******************************************************/

// Selecting the dashboard container (two ways)
const dashboardById = document.getElementById("dashboardMetrics");
const dashboardByQuery = document.querySelector("#dashboardMetrics");

// Create a new metric card
const revenueCard = document.createElement("div");
revenueCard.setAttribute("class", "metric-card");
revenueCard.setAttribute("id", "revenueCard");

// Populate the metric card
revenueCard.innerHTML = `
  <h3>Revenue</h3>
  <p>$0</p>
`;

// Append the new card to the dashboard
dashboardById.appendChild(revenueCard);
// (Alternatively) dashboardByQuery.appendChild(revenueCard);

/*******************************************************
 * TASK 2: Updating All Metric Cards
 * -----------------------------------------------------
 * 1. Use querySelectorAll to select all ".metric-card".
 * 2. Convert the NodeList to an array.
 * 3. Use .forEach() to update each card's style or text.
 *******************************************************/

// Select all metric cards
const metricCardsNodeList = document.querySelectorAll(".metric-card");

// Convert NodeList to array
const metricCardsArray = Array.from(metricCardsNodeList);

// Update each card (e.g., add " - Updated" to text or change background)
metricCardsArray.forEach((card) => {
  // Example: change background color
  card.style.backgroundColor = "#f0f0f0";

  // Example: append " - Updated" to the <h3> text
  const heading = card.querySelector("h3");
  if (heading) {
    heading.innerText += " - Updated";
  }
});

/*******************************************************
 * TASK 3: Dynamic Inventory List
 * -----------------------------------------------------
 * HTML structure assumed:
 *   <ul id="inventoryList"></ul>
 *   <button onclick="addItem('Laptop')">Add Laptop</button>
 *   <button onclick="addItem('Smartphone')">Add Smartphone</button>
 *
 * 1. Write a function addItem(productName) that:
 *    - Creates <li class="product-item"> with innerText = productName
 *    - Appends to #inventoryList
 *    - Attaches a click event that removes itself
 * 2. Clicking an item calls removeChild on #inventoryList
 *******************************************************/

// Function to add a new product item
function addItem(productName) {
  const inventoryList = document.getElementById("inventoryList");

  // Create new <li> element
  const li = document.createElement("li");
  li.setAttribute("class", "product-item");
  li.innerText = productName;

  // Attach click event to remove item
  li.addEventListener("click", function () {
    removeItem(li);
  });

  // Append to inventory list
  inventoryList.appendChild(li);
}

// Function to remove a product item
function removeItem(itemElement) {
  const inventoryList = document.getElementById("inventoryList");
  inventoryList.removeChild(itemElement);
}

