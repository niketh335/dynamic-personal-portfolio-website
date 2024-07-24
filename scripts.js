// Adjust font size for better readability
const adjustFontSize = (size) => {
    document.querySelectorAll('.container, .container *').forEach(element => {
        element.style.fontSize = size;
    });
};

const increaseFontButton = document.createElement('button');
increaseFontButton.innerText = 'Increase Font Size';
increaseFontButton.classList.add('font-button');
document.querySelector('.header').appendChild(increaseFontButton);

const decreaseFontButton = document.createElement('button');
decreaseFontButton.innerText = 'Decrease Font Size';
decreaseFontButton.classList.add('font-button');
document.querySelector('.header').appendChild(decreaseFontButton);

increaseFontButton.addEventListener('click', () => {
    adjustFontSize('larger');
});

decreaseFontButton.addEventListener('click', () => {
    adjustFontSize('smaller');
});

// Change layout for desktop and mobile views
function changeLayout(view) {
    const container = document.querySelector('.container');
    const profilePicture = document.querySelector('.profile-picture img');
    const aboutMeInfo = document.querySelector('.about-me-info');

    if (view === 'desktop') {
        container.style.gridTemplateColumns = '1fr 5fr 1fr';
        container.style.gridTemplateRows = '120px auto 3fr auto';

        profilePicture.style.width = '200px';
        profilePicture.style.float = 'left';
        profilePicture.style.marginRight = '20px';

        aboutMeInfo.style.display = 'block';

        // Additional desktop specific styles
        document.querySelector('.nav-bar').style.display = 'flex';
        document.querySelector('.nav-bar').style.flexDirection = 'row';
        toggleNavButton.style.display = 'none';
        document.querySelector('.header').style.flexDirection = 'row';
    } else  {
        container.style.gridTemplateColumns = '1fr';
        container.style.gridTemplateRows = '100px 1fr 3fr 1fr';

        profilePicture.style.width = '100px';
        profilePicture.style.float = 'none';
        profilePicture.style.margin = '0 auto';

        aboutMeInfo.style.display = 'block';
        aboutMeInfo.style.textAlign = 'center';

        // Additional mobile specific styles
        document.querySelector('.nav-bar').style.display = 'none';
        document.querySelector('.nav-bar').style.flexDirection = 'column';
        toggleNavButton.style.display = 'block';
        document.querySelector('.header').style.flexDirection = 'column';
    }
}
document.addEventListener("DOMContentLoaded", function() {
    const increaseFontButton = document.getElementById("increase-font");
    const decreaseFontButton = document.getElementById("decrease-font");
    let currentFontSize = 16; // Initial font size

    increaseFontButton.addEventListener("click", function() {
        currentFontSize += 2;
        document.body.style.fontSize = currentFontSize + "px";
    });

    decreaseFontButton.addEventListener("click", function() {
        currentFontSize -= 2;
        document.body.style.fontSize = currentFontSize + "px";
    });

    // Skill Chart Animation
    const pieCharts = document.querySelectorAll('.pie-chart');
    pieCharts.forEach(chart => {
        const percent = chart.getAttribute('data-percent');
        chart.style.backgroundImage = `conic-gradient(#4caf50 0% ${percent}%, #e0e0e0 ${percent}% 100%)`;
    });
});
