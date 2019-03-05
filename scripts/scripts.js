/*** HORIZONTAL SCROLL ***/
var contentWrapper = document.getElementById('content_wrap'),
    curSlide = 0,
    qtySlides = contentWrapper.children.length,
    toLeft = undefined,
    isAnimEnded = true,
    footerNav = document.getElementById('footer_nav');

function freezeSliding() {
    isAnimEnded = false;
    setTimeout(function() {
        isAnimEnded = true;
    }, 500);
}

function updateSliderUI(index) {
    for (let i = 0; i < footerNav.children.length; i++){
        footerNav.children[i].classList.remove('active');
    }
    footerNav.children[index].classList.add('active');
}


for (let i = 0; i < footerNav.children.length; i++) {
    footerNav.children[i].onclick = (function(i) {
        return function(event) {
            contentWrapper.style.left = -(document.body.offsetWidth * i) + 'px';
            updateSliderUI(i);
        };
    })(i);
}

window.onmousewheel = function(event) {
    if (isAnimEnded) {
        if (event.wheelDelta > 0) {
            if (curSlide > 0) {
                curSlide--;
                contentWrapper.style.left = -(document.body.offsetWidth * curSlide) + 'px';
                updateSliderUI(curSlide);
            }
        } else {
            if (curSlide < qtySlides - 1) {
                curSlide++;
                contentWrapper.style.left = -(document.body.offsetWidth * curSlide) + 'px';
                updateSliderUI(curSlide);
            }
        }
        freezeSliding();
    }
};

contentWrapper.ontouchstart = function(event) {
    var startPos = event.touches[0].clientX;
    contentWrapper.ontouchmove = function(event) {
        var diff = event.touches[0].clientX - startPos;
        if (diff > 0) {
            if (diff > 20) {
                toLeft = true;
            }
        } else {
            if (diff < -20) {
                toLeft = false;
            }
        }
    };
};

contentWrapper.ontouchend = function() {
    if (typeof toLeft === 'boolean') {
        if (isAnimEnded) {
            if (toLeft) {
                if (curSlide > 0) {
                    curSlide--;
                    contentWrapper.style.left = -(document.body.offsetWidth * curSlide) + 'px';
                    updateSliderUI(curSlide);
                }
            } else {
                if (curSlide < qtySlides - 1) {
                    curSlide++;
                    contentWrapper.style.left = -(document.body.offsetWidth * curSlide) + 'px';
                    updateSliderUI(curSlide);
                }
            }
            freezeSliding();
        }
    }
    contentWrapper.ontouchmove = null;
};

function toLastPage(){
    curSlide = contentWrapper.children.length - 1;
    contentWrapper.style.left = -(document.body.offsetWidth * curSlide) + 'px';
    updateSliderUI(curSlide);
}
/*** SNOW ANIMATION ***/
var canv = document.getElementById('canvas'),
            ctx  = canv.getContext('2d');
    canv.width = window.innerWidth;
    canv.height = window.innerHeight;

function Particle(x, y, dx, dy, opacity, choseForm) {
    this.x          = x;
    this.y          = y;
    this.dx         = dx;
    this.dy         = dy;
    this.opacity    = opacity;
    this.choseForm  = choseForm;

    this.draw = function(){
        ctx.beginPath();
        ctx.moveTo(this.x,this.y)

        if(this.choseForm == 1){
            ctx.quadraticCurveTo(this.x - 6,this.y + 3,this.x - 2,this.y + 2);
        }
        else if(this.choseForm == 2){
            ctx.quadraticCurveTo(this.x,this.y + 2,this.x - 2,this.y + 2);
            ctx.quadraticCurveTo(this.x,this.y + 1,this.x,this.y);
        }

        else if(this.choseForm == 3){
            ctx.quadraticCurveTo(this.x + 2,this.y + 1,this.x - 2,this.y + 2);
        }

        else if(this.choseForm == 4){
            ctx.quadraticCurveTo(this.x + 2,this.y - 1,this.x + 3,this.y - 2);
        }

        else if(this.choseForm == 5){
            ctx.quadraticCurveTo(this.x + 1,this.y + 1,this.x + 2,this.y + 1);
            ctx.quadraticCurveTo(this.x + 2,this.y + 3,this.x + 1,this.y + 3);
            ctx.quadraticCurveTo(this.x - 1,this.y,this.x - 1,this.y + 1);
        }

        else if(this.choseForm == 6){
            ctx.arc(this.x, this.y, 0.9, 0, Math.PI * 2, false);
        }

        else if(this.choseForm == 7){
            ctx.arc(this.x, this.y, 0.5, 0, Math.PI * 2, false);
        }

        else if(this.choseForm == 8){
            ctx.arc(this.x, this.y, 0.2, 0, Math.PI * 2, false);
        }

        else if(this.choseForm == 9){
            ctx.quadraticCurveTo(this.x + 2,this.y + 2,this.x + 4,this.y + 2);
        }

        else if(this.choseForm == 10){
            ctx.quadraticCurveTo(this.x + 2,this.y + 2,this.x + 3,this.y + 1);
            ctx.quadraticCurveTo(this.x - 1,this.y + 1,this.x,this.y);
        }

        else if(this.choseForm == 11){
            ctx.quadraticCurveTo(this.x - 2,this.y + 6,this.x - 4,this.y + 5);
        }

        else if(this.choseForm == 12){
            ctx.quadraticCurveTo(this.x,this.y + 2,this.x + 5,this.y);
        }

        else if(this.choseForm == 13){
            ctx.quadraticCurveTo(this.x,this.y + 2,this.x + 3,this.y + 5);
        }

        else if(this.choseForm == 14){
            ctx.quadraticCurveTo(this.x,this.y + 2,this.x + 3,this.y + 3);
        }

        ctx.strokeStyle = 'rgba(244, 238, 233, ' + this.opacity / 100 + ')';
        ctx.fillStyle = 'rgba(244, 238, 233, ' + this.opacity / 100 + ')';
        ctx.stroke();
        ctx.fill();
    };

    this.update = function(){
        this.x += this.dx;
        this.y += this.dy;
        if (this.opacity < 40) this.opacity++;
        this.draw();
    }
}

var particlesArray = [];

function addParticle() {
    var x       = Math.random() * innerWidth,
        y       = Math.random() * innerHeight,
        dx      = (Math.random()/5)-0.1,
        dy      = Math.random()/2,
        opacity = 1,
        choseForm = Math.floor((Math.random() * 14) + 1);
    particlesArray.push(new Particle(x, y, dx, dy, opacity, choseForm));
}

for(var i=0; i < 300 ; i++) addParticle();

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for (var i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        if (particlesArray[i].x > innerWidth || particlesArray[i].x < 0 || particlesArray[i].y > innerHeight || particlesArray[i].y < 0) {
            particlesArray.splice(i, 1);
            addParticle();
        }
    }
}

animate();
/*** EACH FUNCTION ***/

function isObject(obj) {return Object.prototype.toString.call(obj) === '[object Object]';}

function each(obj, callback) {
    // Если не объект и свойство length установлено, то:
    if (!isObject(obj) && typeof obj.length !== 'undefined') {
        // Перебираем как массив:
        for (let i = 0, length = obj.length; i < length; i++) {
            var value = obj[i];
            // Вызывает коллбэк с параметрами:
            if (callback.call(value, i, value) === false) break;
        }
    // Иначе это объект:
    } else {
        // Перебираем с помощью конструкии for in:
        for (let name in obj) {
            // Если перебираемое свойство не является собственным и, соответственно, наследуется из прототипа, то пропускаем итерацию:
            if (!Object.prototype.hasOwnProperty.call(obj, name)) continue;
            // Если итерация не была пропущена, то вызываем коллбэк с нашими параметрами:
            if (callback.call(obj[name], name, obj[name]) === false) break;
        }
    }
    return obj;
}
/*** HIDE FUNCTION ***/

function hide(hideTarget){
    if(hideTarget.classList.contains('showed')){
        hideTarget.classList.remove('showed');
        hideTarget.classList.add('hidden');
    }
}
/*** SHOW FUNCTION ***/

function show(showTarget){
    if(showTarget.classList.contains('hidden')){
        showTarget.classList.remove('hidden');
        showTarget.classList.add('showed');
    }
}
/*** TOOLTIPS FUNCTION ***/
var controllers = document.getElementsByClassName('form_tip_controller');

each(controllers, function(controllerIndex, controller) {
    controller.addEventListener('click', function() {
        
        for (var i = 0; i < controllers.length; i++){
            if(!controllers[i].nextElementSibling.classList.contains('hidden')) hide(controllers[i].nextElementSibling);
        }
        show(controllers[controllerIndex].nextElementSibling);
    });
});

/*** INDEX PAGE ***/

var indexPage = document.getElementById('index'),
    assistantPage = document.getElementById('assistant');

var loginForm = document.getElementById('login'),
    signUpForm = document.getElementById('signup'),
    sController = document.getElementById('S_controller'),
    lController = document.getElementById('L_controller');

if(indexPage){
    sController.addEventListener('click', function(){
        toLastPage();
        hide(loginForm);
        show(signUpForm);
    });

    lController.addEventListener('click', function(){
        toLastPage();
        hide(signUpForm);
        show(loginForm);
    });
    
    signUpForm.addEventListener('submit', function(event){
        event.preventDefault();
        var xhr = new XMLHttpRequest();
        var formData = new FormData(document.forms.signup_form);
        formData.append('method_name', 'sign_up');
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
//                console.log('Response: ' + xhr.responseText);
            }
        };
        xhr.open("POST", "server/server.php", true);
        xhr.send(formData);
    });

    loginForm.addEventListener('submit', function(event){
        event.preventDefault();
        var xhr = new XMLHttpRequest();
        var formData = new FormData(document.forms.login_form);
        formData.append('method_name', 'login');
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
//                console.log('Response: ' + xhr.responseText);
            }
        };
        xhr.open("POST", "server/server.php", true);
        xhr.send(formData);
        location.href = "../assistant.php"
    });
}



/*** ASSISTANT PAGE ***/

if(assistantPage){
    var date = new Date,
        currentYear = date.getFullYear(),
        currentMonth = date.getMonth(),
        currentDay = date.getDate();

    var deadline = 10; //будет изменяться

    var calendar = document.getElementById('calendar'),
        calendarH = document.getElementById('calendar_h');

    function clearCalendar(){
        calendar.innerHTML = '';
    }

    function buildCalendar(currentYear, currentMonth, currentDay){

        var mounthName = ["January","February","March","April","May","June","July","August","September","October","November","December"],
            weekDayName = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

        calendar.setAttribute('data-year', currentYear);

        calendarH.innerHTML = '<span class="calendar_cur_date">' + mounthName[currentMonth] + ', ' + currentDay + '</span><span class="calendar_deadline">' + 'For nearest deadline ' + deadline + ' days</span>';

        var serviceDate = new Date(currentYear, currentMonth);

        for(var i = 0; i < serviceDate.getDay(); i++){
            calendar.innerHTML += '<div class="calendar_cell"></div>';
        }

        while (serviceDate.getMonth() == currentMonth){

            calendar.innerHTML += '<div class="calendar_cell" data-day="' + serviceDate.getDate() +'" data-month="'+ serviceDate.getMonth() +'" data-year="'+ serviceDate.getFullYear() +'"><div class="c_date"><span class="c_date_n">' + serviceDate.getDate() + ' </span><span class="c_date_m">' + mounthName[serviceDate.getMonth()].substr(0,3) + '</span></div><div class="c_week_day">' + weekDayName[serviceDate.getDay()] + '</div></div>';

            serviceDate.setDate(serviceDate.getDate() + 1);
        }

        if (serviceDate.getDay() != 0) {
            for (var i = serviceDate.getDay(); i < 7; i++) { //7?
                calendar.innerHTML += '<div class="calendar_cell"></div>';
            }
        }

    }

    buildCalendar(currentYear, currentMonth, currentDay);

    var calendarControlLeft = document.getElementById('calendar_control_left'),
        calendarControlRight = document.getElementById('calendar_control_right');

    calendarControlLeft.addEventListener('click', function(){
        if(currentMonth == 0){
            currentYear--;
            currentMonth = 11;
        }
        else{
            currentMonth--;
        }
        clearCalendar();
        buildCalendar(currentYear, currentMonth, currentDay);
        each(calendarDays, function(calendarDayIndex, calendarDay) {
        calendarDay.addEventListener('click', function(event) {
                var target = event.currentTarget;
                activateDay(calendarDays, target);
            });

        });
    })

    calendarControlRight.addEventListener('click', function(){
        if(currentMonth == 11){
            currentYear++;
            currentMonth = 0;
        }
        else{
            currentMonth++;
        }
        clearCalendar();
        buildCalendar(currentYear, currentMonth, currentDay);
        each(calendarDays, function(calendarDayIndex, calendarDay) {
        calendarDay.addEventListener('click', function(event) {
                var target = event.currentTarget;
                activateDay(calendarDays, target);
            });

        });
    });
    
    var selectedDate = {
        day: "",
        month:"",
        year:"",
        firstTS:"",
        secondTS:""
    }
    
    var calendarDays = document.getElementsByClassName('calendar_cell'),
        todoList = document.getElementById('todo_tasks');
    
    function toDoOutput(firstTS, secondTS){
            var xhr = new XMLHttpRequest();
            var formData = new FormData();
            formData.append('firstTS', firstTS);
            formData.append('secondTS', secondTS);
            formData.append('method_name', 'todo_output');
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
//                        console.log('Response: ' + xhr.responseText);
                    var outputData = JSON.parse(this.responseText);
                    if(outputData.length == 0){
                        todoList.innerHTML = '<div class="todo_empty">List is empty.</div>'
                    }
                    else{
                        todoList.innerHTML = '';
                        for(let i = 0; i < outputData.length; i++){
                            todoList.innerHTML += '<div class="todo_task">' + outputData[i].text + '<div class="complete_btn"></div></div>'
                        }
                    }
                }
            };
            xhr.open("POST", "server/server.php", true);
            xhr.send(formData);
        }
    
    function activateDay(daysAll, daysTarget){
        for(let i = 0; i<daysAll.length; i++){
            if(daysAll[i].classList.contains('active')){
                daysAll[i].classList.remove('active')
            }
        }
        daysTarget.classList.add('active');
        
        if (daysTarget !== null){
            if (daysTarget.hasAttribute('data-day')) {
                selectedDate.day = daysTarget.getAttribute("data-day");
            }
            if (daysTarget.hasAttribute('data-month')) {
                selectedDate.month = daysTarget.getAttribute("data-month");
            }
            if (daysTarget.hasAttribute('data-year')) {
                selectedDate.year = daysTarget.getAttribute("data-year");
            }
        }
        
        selectedDate.firstTS = new Date(selectedDate.year, selectedDate.month, selectedDate.day).getTime()/1000;
        selectedDate.secondTS = new Date(selectedDate.year, selectedDate.month, selectedDate.day * 1 + 1).getTime()/1000;
        
        toDoOutput(selectedDate.firstTS, selectedDate.secondTS);
    }

    each(calendarDays, function(calendarDayIndex, calendarDay) {
        calendarDay.addEventListener('click', function(event) {
            var target = event.currentTarget;
            activateDay(calendarDays, target);
        });
        
    });
    
    function getToday(calendarDays){
        for(let i = 0; i<calendarDays.length; i++){
            if(calendarDays[i].getAttribute('data-year') == currentYear && calendarDays[i].getAttribute('data-month') == currentMonth && calendarDays[i].getAttribute('data-day') == currentDay){
                var today = calendarDays[i]
            }
        }
        return today;
    }
    
    activateDay(calendarDays, getToday(calendarDays));
    
    var todoForm = document.getElementById('todoForm');
    var todoInput = document.getElementById('todo_input');
    
    todoForm.addEventListener('submit', function(event){
        event.preventDefault();
        var xhr = new XMLHttpRequest();
        var formData = new FormData(document.forms.todo_add_form);
        formData.append('firstTS', selectedDate.firstTS);
        formData.append('method_name', 'todo_add');
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
//                console.log('Response: ' + xhr.responseText);
            }
        };
        xhr.open("POST", "server/server.php", true);
        xhr.send(formData);
        todoInput.value = "";
        toDoOutput(selectedDate.firstTS, selectedDate.secondTS);
    });
}
