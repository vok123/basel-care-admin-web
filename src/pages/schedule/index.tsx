import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./index.less";

import timezone from "dayjs/plugin/timezone";
import { get } from "@/utils/fetch";
import { slotToTime } from "@/utils/time";
dayjs.extend(timezone);

interface EventItem {
  id: number;
  title: string;
  start: Date;
  end: Date;
}

const Schedule = () => {
  const localizer = dayjsLocalizer(dayjs);
  const [events, setEvents] = useState<EventItem[]>([]);

  useEffect(() => {
    get("/clinic/getAppointments", { clinicId: 1 }).then((res) => {
      const list = (res.data || []).map((item: any) => {
        const appointmentDate = dayjs(
          `${item.appointmentDate} ${slotToTime(item.slot)}`,
        );
        const appointmentEndDate = appointmentDate.add(30, "minute");
        return {
          id: item.id,
          title: `${item.patientName} ${appointmentDate.format("HH:mm")}~${appointmentEndDate.format("HH:mm")}`,
          start: appointmentDate.toDate(),
          end: appointmentEndDate.toDate(),
        };
      });
      setEvents(list);
    });
  }, []);

  return (
    <div className="schedule-page h-full">
      <Calendar
        popup
        localizer={localizer}
        events={events}
        className="h-full bg-white pt-3"
      />
    </div>
  );
};

Schedule.displayName = "Schedule";

export default Schedule;
