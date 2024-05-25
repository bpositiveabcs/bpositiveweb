// utils.js

export const w3_open = () => {
    const mySidebar = document.getElementById('mySidebar');
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
    } else {
        mySidebar.style.display = 'block';
    }
};

export const w3_close = () => {
    const mySidebar = document.getElementById('mySidebar');
    mySidebar.style.display = 'none';
};
