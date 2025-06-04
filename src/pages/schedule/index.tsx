import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./index.less";

import timezone from "dayjs/plugin/timezone";
import { slotToTime } from "@/utils/time";
import { getDoctorGetPatientAppointments } from "@/api";

dayjs.extend(timezone);

interface EventItem {
  id: number;
  title: string;
  start: Date;
  end: Date;
  patientId?: number;
}

const Schedule = () => {
  const localizer = dayjsLocalizer(dayjs);
  const [events, setEvents] = useState<EventItem[]>([]);
  const components = useMemo(() => {
    return {
      event: ({ event }: { event: EventItem }) => (
        <PatientInfo patientId={event.patientId}>{event.title}</PatientInfo>
      ),
    };
  }, []);

  useEffect(() => {
    getDoctorGetPatientAppointments().then((data) => {
      const list = (data || []).map((item: any) => {
        const appointmentDate = dayjs(
          `${item.appointmentDate} ${slotToTime(item.slot)}`,
        );
        const appointmentEndDate = appointmentDate.add(30, "minute");
        const fullName = `${item.patient.firstName} ${item.patient.lastName}`;

        return {
          id: item.id,
          patientId: item.patientId,
          title: `${fullName} ${appointmentDate.format("HH:mm")}~${appointmentEndDate.format("HH:mm")}`,
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
        components={components}
        localizer={localizer}
        events={events}
        className="h-full bg-white pt-3"
      />
    </div>
  );
};

Schedule.displayName = "Schedule";

export default Schedule;
