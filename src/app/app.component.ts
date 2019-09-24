import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular';
  events: any[];
  options: any;

  ngOnInit() {
      console.log('Le composant a fini son initialisation');
      this.events = [
          {
              "title": "All Day Event",
              "start": "2016-01-01"
          },
          {
              "title": "Long Event",
              "start": "2016-01-07",
              "end": "2016-01-10"
          },
          {
              "title": "Repeating Event",
              "start": "2016-01-09T16:00:00"
          },
          {
              "title": "Repeating Event",
              "start": "2016-01-16T16:00:00"
          },
          {
              "title": "Conference",
              "start": "2016-01-11",
              "end": "2016-01-13"
          }
      ];

      this.options = {
            plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
            defaultDate: '2019-11-01',
            header: {
                left: 'prev,next',
                center: 'Planning utilisateur',
                right: 'month,agendaWeek'
            }
      };
    }
}
