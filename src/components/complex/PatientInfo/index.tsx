import {
  getDoctorGetAppointments,
  IGetDoctorGetAppointmentsRes,
  IPostDoctorGetPatientRes,
  postDoctorGetPatient,
} from "@/api";
import { slotToTime } from "@/utils/time";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Descriptions, Modal, Spin } from "antd";

interface PatientInfoProps {
  patientId?: number;
  children?: React.ReactNode;
}

export const PatientInfo = memo<PatientInfoProps>((props) => {
  const [open, setOpen] = useState(false);
  const [patientInfo, setPatientInfo] = useState<IPostDoctorGetPatientRes>();
  const [appointments, setAppointments] =
    useState<IGetDoctorGetAppointmentsRes>([]);

  const handleClick = useCallback(() => {
    setOpen(true);
    postDoctorGetPatient({ patientId: String(props.patientId) }).then(
      (data) => {
        setPatientInfo(data);
      },
    );

    getDoctorGetAppointments({ patientId: String(props.patientId!) }).then(
      (list) => {
        if (!list) return;
        setAppointments(list);
      },
    );
  }, [props.patientId]);

  return (
    <>
      {props.children ? (
        <div className="cursor-pointer" onClick={handleClick}>
          {props.children}
        </div>
      ) : (
        <div
          className="flex items-center gap-1 cursor-pointer"
          onClick={handleClick}
        >
          <InfoCircleOutlined onClick={handleClick} />
          <span className="text-xs c-gray-5 font-400">Patient Info</span>
        </div>
      )}
      <Modal
        width={700}
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
      >
        <Spin spinning={!patientInfo}>
          <Descriptions title="Patient Info" column={2}>
            <Descriptions.Item label="First Name">
              {patientInfo?.firstName || ""}
            </Descriptions.Item>
            <Descriptions.Item label="Last Name">
              {patientInfo?.lastName || ""}
            </Descriptions.Item>
            <Descriptions.Item label="Gender">
              {patientInfo?.gender || "unknown"}
            </Descriptions.Item>
            <Descriptions.Item label="Email">
              {patientInfo?.email || ""}
            </Descriptions.Item>
            <Descriptions.Item label="Phone Number">
              {patientInfo?.phone || ""}
            </Descriptions.Item>
          </Descriptions>
          <Descriptions
            className="mt-8!"
            title={`Appointments (${appointments.length || 0})`}
            column={2}
          >
            {appointments.map((appointment) => {
              return (
                <>
                  <Descriptions.Item label="">
                    {appointment.clinic?.enName || ""}
                  </Descriptions.Item>
                  <Descriptions.Item label="">
                    {`${appointment.appointmentDate} ${slotToTime(appointment.slot)}`}
                  </Descriptions.Item>
                </>
              );
            })}
            {appointments.length === 0 && (
              <Descriptions.Item span={2} className="text-center">
                <span className="c-gray-5 font-400 pl-2">No Appointments</span>
              </Descriptions.Item>
            )}
          </Descriptions>
        </Spin>
      </Modal>
    </>
  );
});
