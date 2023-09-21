const numCircles = 10000;
const circlesContainer = document.querySelector('.moving-circles');

for (let i = 0; i < numCircles; i++) {
    const circle = document.createElement('div');
    circle.classListList.add('circle');
    circlesContainer.appendChild(circle);
}

const circles = document.querySelectorAll('.circle');

circles.forEach((circle, index) => {
    const size = Math.random() * 100 + 20;
    const animationDuration = Math.random() * 6 + 2;

    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.left = `${Math.random() * 100}%`;
    circle.style.animation = `moveCircle ${animationDuration}s linear infinite`;
    circle.style.opacity = `${Math.random()}`;

    circle.style.backgroundColor = `rgb(${Math.random() * 256}, ${Math.random() * 256})`;
});
