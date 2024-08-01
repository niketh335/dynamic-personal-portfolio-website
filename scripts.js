document.addEventListener("DOMContentLoaded", function() {
    let currentFontSize = 16; // Default font size
    const maxFontSize = 20;
    const minFontSize = 12;

    // Function to adjust font size
    const adjustFontSize = (increase) => {
        currentFontSize += increase ? 2 : -2;
        if (currentFontSize >= minFontSize && currentFontSize <= maxFontSize) {
            document.body.style.fontSize = `${currentFontSize}px`;
        }
    };

    // Event listeners for font size adjustment
    document.getElementById('increase-font').addEventListener('click', () => adjustFontSize(true));
    document.getElementById('decrease-font').addEventListener('click', () => adjustFontSize(false));

    // Function to create and animate pie charts
    const createPieCharts = () => {
        const pieCharts = document.querySelectorAll(".pie-chart");

        pieCharts.forEach(chart => {
            const percent = chart.getAttribute("data-percent");
            const skill = chart.getAttribute("data-skill");
            const svgNamespace = "http://www.w3.org/2000/svg";
            const radius = 60;
            const circumference = 2 * Math.PI * radius;
            const progress = circumference * (percent / 100);

            // Create SVG elements
            const circle = document.createElementNS(svgNamespace, "svg");
            circle.setAttribute("width", "150");
            circle.setAttribute("height", "150");
            circle.innerHTML = `
                <circle cx="75" cy="75" r="${radius}" fill="none" stroke="#e6e6e6" stroke-width="20"/>
                <circle cx="75" cy="75" r="${radius}" fill="none" stroke="#4caf50" stroke-width="20" stroke-dasharray="0 ${circumference}" transform="rotate(-90 75 75)" />
                <text x="75" y="75" text-anchor="middle" dy=".3em" font-size="20">${percent}%</text>
                <text x="75" y="140" text-anchor="middle" dy=".3em" font-size="16">${skill}</text>
            `;

            // Append SVG to chart and animate
            chart.appendChild(circle);
            setTimeout(() => {
                circle.querySelector('circle:nth-child(2)').style.strokeDasharray = `${progress} ${circumference}`;
            }, 100);
        });
    };

    // Create pie charts on DOM content load
    createPieCharts();
});
document.addEventListener("DOMContentLoaded", function() {
    const typingText = document.getElementById('typing-text');
    const text = "Hello! My name is k.sai niketh. I am a web developer with a passion for creating beautiful and functional websites. I have a background in B.Tech at SRMAP and have developed skills in various programming languages and frameworks. In my free time, I enjoy travelling and swimming..";
    let index = 0;

    function type() {
        if (index < text.length) {
            typingText.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 100); // Adjust typing speed here
        }
    }

    type(); // Start typing effect
});
