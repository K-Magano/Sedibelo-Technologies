# Sedibelo Technologies Front-End Developer Test - Response

This document details the code and instructions for running the web pages that fulfill the requirements of the Sedibelo Technologies Front-End Developer test.

### Technologies Used:

Vue.js
Chart.js

**Provided Files:**

pieChart.json
barGraph.json
users.json

### Instructions:

**Clone or download this repository.**

Install dependencies: Run npm install (or yarn install) in the project directory to install the required dependencies (Vue.js and Chart.js).

**Run the application:** Use npm run serve (or yarn serve) to start the development server.

**Access the webpages:** Open http://localhost:8080 (or the port specified by your development server) in your web browser.

### Code Structure:

The code for each web page **(PieChart.vue, BarChart.vue, DataTable.vue)** resides in separate Vue components within the src directory. They share a common main.js file for setting up the Vue application and any global styling.

**Pie Chart (PieChart.vue):**

This component utilizes Chart.js to render a pie chart based on the data provided in pieChart.json. The chart is configured with labels, datasets, and additional styling options.

**Bar Graph (BarChart.vue):**

Similar to the Pie Chart, this component uses Chart.js to create a dynamic bar graph using the data in barGraph.json. The chart provides labels and datasets for each data point, ensuring proper visualization.

**Data Table (DataTable.vue):**

This component features a data table populated with user information from users.json. It implements:

**Pagination:** Users can navigate through large datasets using page buttons.

**Search:** A search bar allows users to filter the table based on user data.

**Designation Filter:** A dropdown menu displays user designations from the JSON file. Selecting a designation filters the table accordingly.

### Responsiveness:

All components are designed to be responsive and adjust their layout based on the screen size.

By utilizing Vue.js, this solution fulfills the bonus point requirement of using a framework like Vue.js or Quasar.

### Disclaimer:

This code provides a basic implementation of the required functionalities.
