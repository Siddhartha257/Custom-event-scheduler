import React, { useState, useEffect } from 'react';
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';

import { scheduleData } from '../data/dummy';
import { Header } from '../components';

// eslint-disable-next-line react/destructuring-assignment
const PropertyPane = (props) => <div className="mt-5">{props.children}</div>;

const Scheduler = () => {
  const [scheduleObj, setScheduleObj] = useState();

  const change = (args) => {
    scheduleObj.selectedDate = args.value;
    scheduleObj.dataBind();
  };

  const onDragStart = (arg) => {
    arg.navigation.enable = true;
  };

  const checkOverlappingEvents = () => {
    if (!scheduleObj) return;
    
    const events = scheduleObj.getEvents();
    const overlappingEvents = new Set();

    for (let i = 0; i < events.length; i++) {
      for (let j = i + 1; j < events.length; j++) {
        const event1 = events[i];
        const event2 = events[j];
        
        if (event1.StartTime < event2.EndTime && event2.StartTime < event1.EndTime) {
          overlappingEvents.add(event1.Id);
          overlappingEvents.add(event2.Id);
        }
      }
    }

    // Remove all overlap classes first
    document.querySelectorAll('.e-appointment').forEach(el => {
      el.classList.remove('e-overlap');
    });

    // Add overlap class to overlapping events
    overlappingEvents.forEach(id => {
      const element = document.querySelector(`[data-id="${id}"]`);
      if (element) {
        element.classList.add('e-overlap');
      }
    });
  };

  useEffect(() => {
    if (scheduleObj) {
      checkOverlappingEvents();
    }
  }, [scheduleObj]);

  const onActionComplete = (args) => {
    if (args.requestType === 'eventCreated' || args.requestType === 'eventChanged' || args.requestType === 'eventDeleted') {
      setTimeout(checkOverlappingEvents, 100); // Small delay to ensure DOM is updated
    }
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Calendar" />
      <ScheduleComponent
        height="650px"
        ref={(schedule) => setScheduleObj(schedule)}
        selectedDate={new Date(2025, 3, 1)}
        eventSettings={{ dataSource: scheduleData }}
        dragStart={onDragStart}
        actionComplete={onActionComplete}
      >
        <ViewsDirective>
          { ['Day', 'Week', 'WorkWeek', 'Month', 'Agenda'].map((item) => <ViewDirective key={item} option={item} />)}
        </ViewsDirective>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>
      <PropertyPane>
        <table
          style={{ width: '100%', background: 'white' }}
        >
          <tbody>
            <tr style={{ height: '50px' }}>
              <td style={{ width: '100%' }}>
                <DatePickerComponent
                  value={new Date(2025, 3, 1)}
                  showClearButton={false}
                  placeholder="Current Date"
                  floatLabelType="Always"
                  change={change}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </PropertyPane>
    </div>
  );
};

export default Scheduler;
