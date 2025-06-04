import { timeToSlot } from "@/utils/time";
import { Select, SelectProps } from "antd";

const slots = [
  { time: "08:30", formattedTime: "8:30" },
  { time: "09:00", formattedTime: "9:00" },
  { time: "09:30", formattedTime: "9:30" },
  { time: "10:00", formattedTime: "10:00" },
  { time: "10:30", formattedTime: "10:30" },
  { time: "11:00", formattedTime: "11:00" },
  { time: "11:30", formattedTime: "11:30" },
  { time: "12:00", formattedTime: "12:00" },
  { time: "12:30", formattedTime: "12:30" },
  { time: "14:00", formattedTime: "14:00" },
  { time: "14:30", formattedTime: "14:30" },
  { time: "15:00", formattedTime: "15:00" },
  { time: "15:30", formattedTime: "15:30" },
  { time: "16:00", formattedTime: "16:00" },
  { time: "16:30", formattedTime: "16:30" },
  { time: "17:00", formattedTime: "17:00" },
];

export const TimeSlots = memo<SelectProps>((props) => {
  const options = slots.map((slot) => ({
    label: `${slot.formattedTime}`,
    value: timeToSlot(slot.time),
  }));
  return <Select {...props} options={options} />;
});
