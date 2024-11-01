const currTimeElement = document.querySelector('.current-time');
const countDownAll = document.querySelectorAll('.countdown-value');
console.log(countDownAll);

setInterval(countDown, 1000);



function countDown() {
    const today  = new Date();
    // console.log(today);
    currTimeElement.innerHTML = `It is currently: ${today.toLocaleDateString()}, ${today.toLocaleTimeString()}`;
    
    const newYear = new Date('January 1, 2024');
    newYear.setFullYear(today.getFullYear() + 1);
    // console.log(newYear);

    const diff = newYear - today;

    const daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24));

    const hoursLeft = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));


    const minutesLeft = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    const secondsLeft = Math.floor((diff % (1000 * 60)) / 1000);


    countDownAll.forEach( countDown => {
        // console.dir(countDown);
        const data = countDown.dataset.left;
        // console.log(data);

        switch (data) {
            case 'days':
                countDown.innerHTML = daysLeft;
                break;
            case 'hrs':
                countDown.innerHTML = hoursLeft;
                break;
            case 'min':
                countDown.innerHTML = minutesLeft;
                break;
            case 'sec':
                countDown.innerHTML = secondsLeft;
                break;
            default:
                break;
        }
        
    });
    
    if(daysLeft === 0 && hoursLeft === 0 && minutesLeft === 0 && secondsLeft === 0) {
        alert('Happy New Year!');
    }

}


