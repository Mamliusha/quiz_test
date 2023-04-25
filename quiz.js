function ToProceed() {
    var selectedOption = document.querySelector('input[name="options"]:checked').parentNode.textContent.trim();
    localStorage.setItem('selectedOption', selectedOption);

    document.getElementById('quiz').innerHTML = `
<div id="cities">
        <div id="questionsNum">
            <p id="question">В каком городе планируете поступать?</p>
            <p id="page_num">Шаг2/9</p>
        </div>
        <div id="citySearchDiv">
        <select name="cities" id="citySearch" onchange="updateCheckbox()" required>
            <option  selected class="cityOption"selected>Город</option>
            <option class="cityOption">Санкт-Петербург</option>
            <option  class="cityOption">Москва</option>
            <option  class="cityOption">Новосибирск</option>
            <option  class="cityOption">Нижний Новгород</option>
            <option  class="cityOption">Ростов-на-Дону</option>
        </select>
    </div>
    </div>
    <div id='checkboxes'></div>
    <div class="buttons">
    <button onclick="goBack()" id="Back1" class='backButton'>< Назад </button>
    <button onclick="ToProceed2()" id="Next1">Далее ></button>
    </div>        
    
    </div>
    `;
}

function goBack(){
    document.getElementById('quiz').innerHTML = `
    <div id="questionsNum">
    <p id="question">Для кого вы ищете учебное заведение?</p>
    <p id="page_num">Шаг1/9</p>
</div>
<div id="options" onclick='Checkme()'>
<div id="option1" class="option">Себе<input type="radio" id="radio1" name="options" checked></div>
<div id="option2" class="option">Супругу/Супруге<input type="radio" id="radio2" name="options"></div>
<div id="option3" class="option">Родственнику<input type="radio" id="radio3" name="options"></div>
<div id="option4" class="option">Коллеге<input type="radio" id="radio4" name="options"></div>
<div id="option5" class="option">Ребенку<input type="radio" id="radio5" name="options"></div>
<div id="option6" class="option">Другое<input type="radio" id="radio6" name="options"></div>
<p id="selectedOption"></p>
</div>
<button onclick="ToProceed()" id="Next1">Далее ></button>
`
let selectedOption = localStorage.getItem("selectedOption");
    console.log(selectedOption);
if (selectedOption !== null) {
  let radioButtons = document.getElementsByClassName("option");
  let allMatch = true;
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].value === selectedOption) {
      radioButtons[i].checked = true;
    } else {
      allMatch = false;
    }
  }
  if (allMatch) {
    console.log("All options match selected option");
  }
}    
}

function updateCheckbox() {
    var selectBox = document.getElementById("citySearch");
    var selectedOptions = [];
    for (var i = 0; i < selectBox.options.length; i++) {
      if (selectBox.options[i].selected) {
        selectedOptions.push(selectBox.options[i].text);
      }
    }
    var checkboxDiv = document.getElementById("checkboxes");
    checkboxDiv.innerHTML = "";
    for (var i = 0; i < selectedOptions.length; i++) {
      var label = document.createElement("label");
      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.name = "cityCheckbox";
      checkbox.value = selectedOptions[i];
      checkbox.checked = true;
      label.appendChild(checkbox);
      label.appendChild(document.createTextNode(selectedOptions[i]));
      checkboxDiv.appendChild(label);
    }
  }
  

function ToProceed2() {
    var selectedCity = document.getElementById("citySearch").value;
    localStorage.setItem("selectedCity", selectedCity);
    document.getElementById('quiz').innerHTML = `
    <div id="questionsNum">
        <p id="question">Какое образование уже есть?</p>
        <p id="page_num">Шаг3/9</p>
    </div>
    <div id="options">
        <div id="option1" class="option">9 классов<input type="radio" id="radio" name="options" checked></div>
        <div id="option1" class="option">Колледж/Техникум<input type="radio" name="options"></div>
        <div id="option1" class="option">11 классов<input type="radio" name="options"></div>
        <div id="option1" class="option">ВУЗ<input type="radio" name="options"></div>
        <div id="option1" class="option">Училище<input type="radio" name="options"></div>
        <div id="option1" class="option">Неоконченное высшее<input type="radio" name="options"></div>
    </div>
    <div class="buttons">
    <button onclick="goBack3()" id="Back1" class='backButton'>< Назад </button>
    <button onclick="ToProceed3()" id="Next1">Далее ></button>
    </div>  `
}

function ToProceed3() {
    var selectedOption = document.querySelector('input[name="options"]:checked').parentNode.textContent.trim();
    localStorage.setItem('CurrentEducation', selectedOption);
    document.getElementById('quiz').innerHTML = `
    <div id="questionsNum">
        <p id="question">Куда планируете поступать?</p>
        <p id="page_num">Шаг4/9</p>
    </div>
    <div class="options4">
        <div id="option2" class="option">ВУЗ<input type="radio" id="radio" name="options" checked></div>
        <div id="option2" class="option">Колледж/Техникум<input type="radio" name="options"></div>
        <div id="option2" class="option">Училище<input type="radio" name="options"></div>
    </div>
    <div class="buttons">
    <button onclick="goBack3()" id="Back1" class='backButton'>< Назад </button>
    <button onclick="ToProceed4()" id="Next1">Далее ></button>
    </div>  `
}

function ToProceed4() {
    var selectedOption = document.querySelector('input[name="options"]:checked').parentNode.textContent.trim();
    localStorage.setItem('FutureEducation', selectedOption);
    document.getElementById('quiz').innerHTML = `
    <div id="questionsNum">
        <p id="question">Какую форму обучения предпочитаете?</p>
        <p id="page_num">Шаг5/9</p>
    </div>
    <div class="options4">
        <div id="option2" class="option">Очную<input type="radio" id="radio" name="options" checked></div>
        <div id="option2" class="option">Заочную<input type="radio" name="options"></div>
        <div id="option2" class="option">Техникум<input type="radio" name="options"></div>
    </div>
    <div class="buttons">
    <button onclick="goBack3()" id="Back1" class='backButton'>< Назад </button>
    <button onclick="ToProceed5()" id="Next1">Далее ></button>
    </div>  `

}

function ToProceed5() {
    var selectedOption = document.querySelector('input[name="options"]:checked').parentNode.textContent.trim();
    localStorage.setItem('EducationForm', selectedOption);
    document.getElementById('quiz').innerHTML = `
    <div id="questionsNum">
        <p id="question">Рассматриваете платное обучение?</p>
        <p id="page_num">Шаг6/9</p>
    </div>
    <div class="options4">
        <div id="option2" class="option">Нет, только бюджет<input type="radio" id="radio" name="options" checked></div>
        <div id="option2" class="option">Да, планирую учиться платно<input type="radio" name="options"></div>
        <div id="option2" class="option">Возможны оба варианта<input type="radio" name="options"></div>
    </div>
    <div class="buttons">
    <button onclick="goBack3()" id="Back1" class='backButton'>< Назад </button>
    <button onclick="ToProceed6()" id="Next1">Далее ></button>
    </div>  `
}

function ToProceed6() {
    var selectedOption = document.querySelector('input[name="options"]:checked').parentNode.textContent.trim();
    localStorage.setItem('FreeorPaid', selectedOption);
    document.getElementById('quiz').innerHTML = `
<div id="cities">
        <div id="questionsNum">
            <p id="question">Какая специальность интересует?</p>
            <p id="page_num">Шаг7/9</p>
        </div>
        <div id="citySearchDiv">
        <select name="cities" id="citySearch" onchange="updateCheckbox()" required>
            <option  selected class="cityOption"selected>Специальность</option>
            <option class="cityOption">Экономика</option>
            <option  class="cityOption">Философия</option>
            <option  class="cityOption">Юриспруденция</option>
            <option  class="cityOption">Журналистика</option>
            <option  class="cityOption"></option>Международные отношения
        </select>
    </div>
    </div>
    <p id="SelectedCity"></p>
    <div class="buttons">
    <button onclick="goBack()" id="Back1" class='backButton'>< Назад </button>
    <button onclick="ToProceed7()" id="Next1">Далее ></button>
    </div>        
    </div>
    `;
}

function ToProceed7() {
    var selectedOption = document.getElementById("citySearch").value;
    localStorage.setItem("Faculty", selectedOption);
    document.getElementById('quiz').innerHTML = `
    <div id="questionsNum">
        <p id="question">Как скоро планируете поступать?</p>
        <p id="page_num">Шаг8/9</p>
    </div>
    <div id="options">
        <div id="option1" class="option">Как можно быстрее<input type="radio" id="radio" name="options" checked></div>
        <div id="option1" class="option">Месяц<input type="radio" name="options"></div>
        <div id="option1" class="option">Квартал<input type="radio" name="options"></div>
        <div id="option1" class="option">Полгода<input type="radio" name="options"></div>
        <div id="option1" class="option">Год<input type="radio" name="options"></div>
    </div>
    <div class="buttons">
    <button onclick="goBack3()" id="Back1" class='backButton'>< Назад </button>
    <button onclick="ToProceed8()" id="Next1">Далее ></button>
    </div>  `
}

function ToProceed8() {
    var selectedOption = document.querySelector('input[name="options"]:checked').parentNode.textContent.trim();
    localStorage.setItem('Application', selectedOption);
    document.getElementById('quiz').innerHTML = `
    <div id="questionsNum">
        <p id="question">Ваша подборка готова! 🥳 Куда нам отправить её?</p>
        <p id="page_num">Шаг9/9</p>
    </div>
    <form class="options4">
<input type="text" name="name" id="name_input" placeholder="Как вас зовут?">
<input type="tel" name="tel" id="tel_input" placeholder="Номер телефона" required>
<input type="email" name="email" id="email_input" placeholder="Email" required>
    </form>
    <div class="buttons">
    <button onclick="submit()" id="submit" type="submit">Получить подборку</button>
    </div>  `
}

function submit() {
    var name = document.getElementById("name_input").value;
    var tel = document.getElementById("tel_input").value;
    var email = document.getElementById("email_input").value;
    var formData = {
        name: name,
        tel: tel,
        email: email
    };
    localStorage.setItem("formData", JSON.stringify(formData));
}
