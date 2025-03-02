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

