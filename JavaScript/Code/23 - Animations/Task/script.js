anime({
    targets: '.animate-me',
    loop: true,
    duration: 5000,
    width: 200,
    height: 200,
    easing: 'easeInSine',
});

anime({
    targets: '.animate-me-2',
    loop: true,
    duration: 1000,
    translateX: [50, 250],
    rotate: '1turn',
})