function updateClock()
{
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();

    // If the location time is unavailable, use UTC
    if (isNaN(hours) || isNaN(minutes))
    {
        now = new Date(Date.now());
        hours = now.getUTCHours();
        minutes = now.getUTCMinutes();
    }

    // Format time with leading zeros
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    // Update the clock display
    document.querySelector('.text div:nth-child(1)').textContent = hours;
    document.querySelector('.text div:nth-child(2)').textContent = minutes;
}

// Update the clock every minute
setInterval(updateClock, 60000);

// Initialize the clock when the page loads
window.onload = function()
{
    updateClock();
};
