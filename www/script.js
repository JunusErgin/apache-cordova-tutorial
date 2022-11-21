myWorkingHours.innerHTML = localStorage.getItem('html');

function addWorktime(){

    let currentDate = myDate.value;
    let startTime = myStartTime.value;
    let endTime = myEndTime.value;



    myWorkingHours.innerHTML += `
    <div class="list-item">
        <img class="small-img" src="img/clock.png">
        ${currentDate} ${startTime} - ${endTime}
    </div>`;

    localStorage.setItem('html', myWorkingHours.innerHTML);
}

