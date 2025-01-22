// Show "Click here to open" after 5 seconds
setTimeout(() => {
    document.querySelector('.click-to-open').style.display = 'block';
}, 2000);

function openEnvelope() {
    const envelope = document.querySelector('.envelope');
    const papers = document.querySelector('.papers');
    const clickText = document.querySelector('.click-to-open');
    const fadeOutElements = document.querySelectorAll('.fade-out');

    envelope.style.display = 'none';
    papers.classList.remove('hidden');

    fadeOutElements.forEach(el => el.classList.add('hidden'));

    const paper1 = document.querySelector('.paper1');
    const paper2 = document.querySelector('.paper2');
    const paper3 = document.querySelector('.paper3');

    setTimeout(() => {
        paper1.style.opacity = '1';
        paper1.style.transform = 'scale(1) rotate(-10deg)';
    }, 200);

    setTimeout(() => {
        paper2.style.opacity = '1';
        paper2.style.transform = 'scale(1) rotate(10deg)';
    }, 2200);

    setTimeout(() => {
        paper3.style.opacity = '1';
        paper3.style.transform = 'scale(1) rotate(-5deg)';
        clickText.style.display = 'none';
    }, 4200);
}