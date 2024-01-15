
document.addEventListener('DOMContentLoaded', function() {

    // Countdown Timer
    const startTime = new Date("2023-01-16 00:00:00").getTime(); // Replace with your start date

    function updateTimer() {
        const now = new Date().getTime();
        const distance = now - startTime;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('timer').innerHTML = days + ' Days ' + hours + ' Hours '
        + minutes + ' Minutes ' + seconds + ' Seconds';

        // Update the countdown every second
        setTimeout(updateTimer, 1000);
    }
    // function updateTimer() {
    //     const now = new Date().getTime();
    //     const distance = now - startTime;
    
    //     // Calculate years, approximating a year as 365.25 days to account for leap years
    //     const years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365.25));
    
    //     // Calculate months, approximating a month as 30.44 days
    //     const months = Math.floor((distance % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
    
    //     const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    //     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    //     const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    //     document.getElementById('timer').innerHTML = years + ' Years ' + months + ' Months ' + days + ' Days ' 
    //     + hours + ' Hours ' + minutes + ' Minutes ' + seconds + ' Seconds';
    
    //     // Update the countdown every second
    //     setTimeout(updateTimer, 1000);
    // }
    


    updateTimer();
});
