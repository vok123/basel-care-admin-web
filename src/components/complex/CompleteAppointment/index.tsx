import { postDoctorCompletedAppointment } from "@/api";
import { Button, message, Popconfirm, PopconfirmProps } from "antd";

interface CompleteAppointmentProps {
  appointmentId?: string;
  onRefresh?: () => void;
}

export const CompleteAppointment = memo<CompleteAppointmentProps>((props) => {
  const confirm: PopconfirmProps["onConfirm"] = () => {
    return postDoctorCompletedAppointment({
      appointmentId: props.appointmentId!,
    }).then(() => {
      props.onRefresh?.();
      message.success("Appointment completed successfully!");
    });
  };
  return (
    <>
      <Popconfirm
        title="Complete the appointment?"
        description="Mark the appointment as completed?"
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button color="geekblue" size="small" variant="solid">
          Complete
        </Button>
      </Popconfirm>
    </>
  );
});
