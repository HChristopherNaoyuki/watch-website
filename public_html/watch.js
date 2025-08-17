function updateClock() 
{
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();

    // Fallback to UTC if local time is unavailable
    if (isNaN(hours) || isNaN(minutes)) 
    {
        const utcNow = new Date(Date.now());
        hours = utcNow.getUTCHours();
        minutes = utcNow.getUTCMinutes();
    }

    // Format with leading zeros
    hours = hours < 10 ? '0' + hours : hours.toString();
    minutes = minutes < 10 ? '0' + minutes : minutes.toString();

    // Update display
    document.querySelector('.hours').textContent = hours;
    document.querySelector('.minutes').textContent = minutes;
}

// Update immediately and then every second
function initClock() 
{
    updateClock();
    setInterval(updateClock, 1000);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initClock);