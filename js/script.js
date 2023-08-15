

$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('#content').toggleClass('active');
    });
    
     $('.more-button,.body-overlay').on('click', function () {
        $('#sidebar,.body-overlay').toggleClass('show-nav');
    });
    
});   


$(function() {
    $('.chart1').easyPieChart({
      size: 160,
      barColor: "rgba(137, 88, 248, 1)",
      scaleLength: 0,
      lineWidth: 15,
      trackColor: "rgba(245, 245, 245, 1)",
      lineCap: "circle",
      animate: 2000,
    });
  });


  $(function() {
    $('.chart2').easyPieChart({
      size: 160,
      barColor: "rgba(66, 204, 197, 1)",
      scaleLength: 0,
      lineWidth: 15,
      trackColor: "rgba(245, 245, 245, 1)",
      lineCap: "circle",
      animate: 2000,
    });
  });


  $(function() {
    $('.chart3').easyPieChart({
      size: 160,
      barColor: "rgba(61, 156, 252, 1)",
      scaleLength: 0,
      lineWidth: 15,
      trackColor: "rgba(245, 245, 245, 1)",
      lineCap: "circle",
      animate: 2000,
    });
  });


  $(function() {
    $('.chart4').easyPieChart({
      size: 160,
      barColor: "rgba(253, 172, 53, 1)",
      scaleLength: 0,
      lineWidth: 15,
      trackColor: "rgba(245, 245, 245, 1)",
      lineCap: "circle",
      animate: 2000,
    });
  });

  // const showPopupButton = document.getElementById('showPopupButton');
  // const closePopupButton = document.getElementById('closePopupButton');
  // const popupContainer = document.getElementById('popupContainer');
  // const popupContainer1 = document.getElementById('popupContainer1');
  
  // showPopupButton.addEventListener('click', () => {
  //     popupContainer.classList.add('show');
  // });
  
  // closePopupButton.addEventListener('click', () => {
  //     popupContainer.classList.remove('show');
  // });
  
  // const openPopupButton = document.getElementById('openPopupButton');
  // const closePopupButton1 = document.getElementById('closePopupButton1');
  
  // openPopupButton.addEventListener('click', () => {
  //     popupContainer.classList.remove('show'); // Hide the first popup
  //     popupContainer1.classList.add('show');   // Show the second popup
  //     document.body.classList.add('popup-active');
  // });
  
  // closePopupButton1.addEventListener('click', () => {
  //     popupContainer1.classList.remove('show');
  //     document.body.classList.remove('popup-active');
  // });
  

  // const showPopupButton = document.getElementById('showPopupButton');
  // const closePopupButton = document.getElementById('closePopupButton');
  // const popupContainer = document.getElementById('popupContainer');
  // const popupContainer1 = document.getElementById('popupContainer1');
  
  // showPopupButton.addEventListener('click', () => {
  //     popupContainer.classList.add('show');
  //     document.body.classList.add('popup-active'); // Apply blur effect
  // });
  
  // closePopupButton.addEventListener('click', () => {
  //     popupContainer.classList.remove('show');
  //     document.body.classList.remove('popup-active'); // Remove blur effect
  // });
  
  // const openPopupButton = document.getElementById('openPopupButton');
  // const closePopupButton1 = document.getElementById('closePopupButton1');
  
  // openPopupButton.addEventListener('click', () => {
  //     popupContainer.classList.remove('show'); // Hide the first popup
  //     popupContainer1.classList.add('show');   // Show the second popup
  //     document.body.classList.add('popup-active'); // Apply blur effect
  // });
  
  // closePopupButton1.addEventListener('click', () => {
  //     popupContainer1.classList.remove('show');
  //     document.body.classList.remove('popup-active'); // Remove blur effect
  // });
  const showPopupButton = document.getElementById('showPopupButton');
const closePopupButton = document.getElementById('closePopupButton');
const popupContainer = document.getElementById('popupContainer');
const popupContainer1 = document.getElementById('popupContainer1');

showPopupButton.addEventListener('click', () => {
    popupContainer.classList.add('show');
    document.body.classList.add('popup-active'); // Apply background blur
});

closePopupButton.addEventListener('click', () => {
    popupContainer.classList.remove('show');
    document.body.classList.remove('popup-active'); // Remove background blur
});

const openPopupButton = document.getElementById('openPopupButton');
const closePopupButton1 = document.getElementById('closePopupButton1');

openPopupButton.addEventListener('click', () => {
    popupContainer.classList.remove('show'); // Hide the first popup
    popupContainer1.classList.add('show');   // Show the second popup
    document.body.classList.add('popup-active'); // Apply background blur
});

closePopupButton1.addEventListener('click', () => {
    popupContainer1.classList.remove('show');
    document.body.classList.remove('popup-active'); // Remove background blur
});

// Get all the item containers
const itemContainers = document.querySelectorAll('.boxEdit');

// Add event listeners to each item container
itemContainers.forEach(container => {
    container.addEventListener('click', () => {
        // Hide check icons from all items
        document.querySelectorAll('.check-icon').forEach(icon => {
            icon.style.display = 'none';
        });

        // Show check icon on the clicked item
        const checkIcon = container.querySelector('.check-icon');
        checkIcon.style.display = 'block';

        // You can perform additional actions here based on the selected item
    });
});
