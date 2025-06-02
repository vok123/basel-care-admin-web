import { timeToSlot } from "@/utils/time";
import { Select, SelectProps } from "antd";

const slots = [
  { time: "08:30", formattedTime: "8:30", period: "AM" },
  { time: "09:00", formattedTime: "9:00", period: "AM" },
  { time: "09:30", formattedTime: "9:30", period: "AM" },
  { time: "10:00", formattedTime: "10:00", period: "AM" },
  { time: "10:30", formattedTime: "10:30", period: "AM" },
  { time: "11:00", formattedTime: "11:00", period: "AM" },
  { time: "11:30", formattedTime: "11:30", period: "AM" },
  { time: "12:00", formattedTime: "12:00", period: "AM" },
  { time: "12:30", formattedTime: "12:30", period: "PM" },
  { time: "14:00", formattedTime: "2:00", period: "PM" },
  { time: "14:30", formattedTime: "2:30", period: "PM" },
  { time: "15:00", formattedTime: "3:00", period: "PM" },
  { time: "15:30", formattedTime: "3:30", period: "PM" },
  { time: "16:00", formattedTime: "4:00", period: "PM" },
  { time: "16:30", formattedTime: "4:30", period: "PM" },
  { time: "17:00", formattedTime: "5:00", period: "PM" },
];

export const TimeSlots = memo<SelectProps>((props) => {
  const options = slots.map((slot) => ({
    label: `${slot.formattedTime} ${slot.period}`,
    value: timeToSlot(slot.time),
  }));
  return <Select {...props} options={options} />;
});
