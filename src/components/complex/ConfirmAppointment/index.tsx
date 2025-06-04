import { postDoctorConfirmAppointment } from "@/api";
import { Button, message, Popconfirm, PopconfirmProps } from "antd";

interface ConfirmAppointmentProps {
  appointmentId?: string;
  onRefresh?: () => void;
}

export const ConfirmAppointment = memo<ConfirmAppointmentProps>((props) => {
  const confirm: PopconfirmProps["onConfirm"] = () => {
    return postDoctorConfirmAppointment({
      appointmentId: props.appointmentId!,
    }).then(() => {
      message.success("Appointment confirmed successfully!");
      props.onRefresh?.();
    });
  };
  return (
    <>
      <Popconfirm
        title="Confirm the appointment?"
        description="Confirm the appointment to notify the patient."
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button color="geekblue" size="small" variant="dashed">
          Confirm
        </Button>
      </Popconfirm>
    </>
  );
});
