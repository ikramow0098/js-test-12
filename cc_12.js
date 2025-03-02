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

