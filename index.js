document.addEventListener('DOMContentLoaded', function () { 
    const hamerburgerIcon = document.getElementById('hamerburgerIcon');
    const closeIcon = document.getElementById('closeIcon');
    const navigationMenu = document.querySelector('ul');


    hamerburgerIcon.addEventListener('click', function(){ 
        navigationMenu.style.display = 'flex';
        hamerburgerIcon.style.display = 'none';
        closeIcon.style.display = 'block';

    })

    closeIcon.addEventListener('click', function(){ 
        navigationMenu.style.display = 'none';
        hamerburgerIcon.style.display = 'block';
        closeIcon.style.display = 'none';

    })
})