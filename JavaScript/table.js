document.addEventListener("DOMContentLoaded", function() {
    createTable(buildings, 'list');

    let searchButton = document.getElementById("filterButton");
    searchButton.addEventListener("click", function() {filterTable(buildings, 'list', searchButton.form)}) //фильтр по клику

})

//выводим таблицу на страницу
let createTable = (data, idTable) => {
    // находим таблицу
    let table = document.getElementById(idTable);

    // формируем заголовочную строку
    let tr = document.createElement('tr');

    //создаются заголовки
    for(key in data[0]) {
        let th = document.createElement('th');
        th.innerHTML = key;
        tr.append(th);
    }
    table.append(tr);

    // самостоятельно сформировать строки таблицы на основе массива data
    data.forEach((item, ind) => {
        let tr = document.createElement('tr');
        for (let key in item) {
            let th = document.createElement('td');
            th.innerHTML = item[key];
            tr.append(th);
        }
        table.append(tr);
    });
}

//очистка таблы
let clearTable = (idTable) => {
    let table = document.getElementById(idTable);
    table.innerHTML = "";
}