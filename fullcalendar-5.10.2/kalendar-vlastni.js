document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      locale: 'cs',
    });

    calendar.render();

//setTimeout(function() {
  //your code to be executed after 1 second
    var calendar2 = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridWeek',
      initialView: 'timeGridWeek', //zobrazeni radku
      locale: 'cs',

      headerToolbar: { center: 'today', end: 'dayGridMonth'},
      dayHeaderFormat: { weekday: 'short', month: 'numeric', day: 'numeric', omitCommas: true },
      titleFormat: { // will produce something like "Tuesday, September 18, 2018"
        month: 'long',
        year: 'numeric',
        day: 'numeric',
        weekday: 'short',
        meridiem: 'narrow',
      },
      dateClick: function() {
        alert('a day has been clicked!');
       },
      events: [
        {
          title:  'My Event',
          start:  '2010-01-01T14:30:00',
          allDay: false
        }
        // other events here...
      ],
      eventTimeFormat: { // like '14:30:00'
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        meridiem: false
      },
      businessHours: [ // specify an array instead
          {
            daysOfWeek: [ 1, 2, 3 ], // Monday, Tuesday, Wednesday
            startTime: '08:00', // 8am
            endTime: '18:00' // 6pm
          },
          {
            daysOfWeek: [ 4, 5 ], // Thursday, Friday
            startTime: '10:00', // 10am
            endTime: '16:00' // 4pm
          }
        ]
    });
    calendar2.render();
// }, 5000);
});