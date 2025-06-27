import { postDoctorCancelAppointment } from "@/api";
import { Button, message, Popconfirm, PopconfirmProps } from "antd";

interface CanceledAppointmentProps {
  appointmentId?: string;
  onRefresh?: () => void;
}

export const CanceledAppointment = memo<CanceledAppointmentProps>((props) => {
  const confirm: PopconfirmProps["onConfirm"] = () => {
    return postDoctorCancelAppointment({
      appointmentId: props.appointmentId!,
    }).then(() => {
      message.success("Appointment cancelled successfully!");
      props.onRefresh?.();
    });
  };
  return (
    <>
      <Popconfirm
        title="Cancelled the appointment?"
        description="Cancelled the appointment."
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button color="red" size="small" variant="outlined">
          Cancel
        </Button>
      </Popconfirm>
    </>
  );
});
