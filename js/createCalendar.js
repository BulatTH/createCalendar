;const getWeekName = (weekNumber) => {
  const weekArr = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  return weekArr[weekNumber].toUpperCase();
};

const countDaysInMonth = (year, month) => new Date(year, month, 0).getDate();

const getWeekFirstDay = date => ((date.getDay() !== 0) ? date.getDay() : 7);

const createCalendarHeader = (tr) => {
  for (let a = 0; a < 7; a += 1) {
    const th = document.createElement('th');
    th.setAttribute('class', 'bg-danger text-white');
    th.textContent = getWeekName(a);
    tr.appendChild(th);
  }
};

const getMonthName = (date) => {
  const monthNamesArr = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  return monthNamesArr[date.getMonth()];
};

const createCalendar = ({
  id = 'cal', year = new Date().getFullYear(), month = new Date().getMonth() + 1, container = 'body',
} = {}) => {
  let div = document.createElement('div'),
    now = new Date(year, month - 1, 1);


  div.setAttribute('id', id);
  div.setAttribute('class', 'border px-3 pb-2');
  div.innerHTML = `<h2 class='text-center my-2'> Календарь на ${getMonthName(now)} ${year}</h2>`;

  const table = document.createElement('table');

  table.setAttribute('class', 'table text-center table-bordered');

  const tr = document.createElement('tr');
  table.appendChild(tr);

  createCalendarHeader(tr);

  table.appendChild(tr);

  let c = 0;

  for (let a = 1; a <= 5; a+=1) {
    const tr = document.createElement('tr');

    for (let b = 1; b <= 7; b+=1) {
      const td = document.createElement('td');
      td.innerHTML = (a == 1 && b >= getWeekFirstDay(now)) ? ++c :
        (a > 1 && c < countDaysInMonth(year, month)) ? ++c : '';

      if (year == new Date().getFullYear() && month == new Date().getMonth() + 1 && c == new Date().getDate()) {
        td.setAttribute('class', 'text-danger');
        td.setAttribute('style', 'font-weight: bold');
      }

      tr.appendChild(td);
    }

    table.appendChild(tr);
  }


  div.appendChild(table);
  document.querySelector(container).appendChild(div);
};
