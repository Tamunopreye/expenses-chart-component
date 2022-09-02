# Frontend Mentor - Expenses chart component solution

This is my solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt).

### The challenge

Users should be able to:

-   View the bar chart and hover over the individual bars to see the correct amounts for each day
-   See the current day’s bar highlighted in a different colour to the other bars
-   View the optimal layout for the content depending on their device’s screen size
-   See hover states for all interactive elements on the page
-   **Bonus**: Use the JSON data file provided to dynamically size the bars on the chart

### Screenshot

![./screenshot.jpg]("./src/images/screenshot.png")

### Links

-   Solution URL: [Add solution URL here](https://your-solution-url.com)
-   Live Site URL: [https://tamunopreye.github.io/expenses-chart-component](https://your-live-site-url.com)

## My process

### Built with

-   Semantic HTML5 markup
-   CSS custom properties
-   Flexbox
-   Mobile-first workflow
-   [React](https://reactjs.org/) - JS library

### What I learned

What i learned while using this project was that i had to dynamically add a Bar Chart using Chart.js
I downloaded chart.js and chartjs-2 into my react and then imported some of the modules i necessarily needed in other to add the bar chart into my project. Code Snippet of the components i imported are below

```js
import { Bar } from "react-chartjs-2";
import {
	BarElement,
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	Title,
	Tooltip,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip);
```

### Continued development

I want to get better at using REST APIs and APIs and connecting data to my projects.

## Acknowledgments

Well thanks to google, stackoverflow and youtube. And other people's code helped me better understand what i was to do things i needed to download such as chart.js and react-chartjs-2.
