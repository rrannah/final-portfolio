// Targeting video elements
const videoClassNames = [
    ".vid1", ".vid2", ".vid3", ".vid5", ".vid6", ".vid7",
    ".vid8", ".vid10", ".vid11", ".vid12", ".vid13", ".vid14",
    ".vid16", ".vid17", ".vid18"
];

videoClassNames.forEach(className => {
    const video = document.querySelector(className);

    video.addEventListener("mouseover", function(e) {
        video.play();
    });

    video.addEventListener("mouseout", function(e) {
        setTimeout(() => {
            video.pause();
        }, 5000);
    });
});
