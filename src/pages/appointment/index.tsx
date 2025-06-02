/* eslint-disable max-nested-callbacks */
import { postClinicSearch } from "@/api";
import { get } from "@/utils/fetch";
import { slotToTime } from "@/utils/time";
import {
  Table,
  Tabs,
  TableProps,
  Button,
  Tag,
  Modal,
  Form,
  Input,
  DatePicker,
  Select,
} from "antd";
import dayjs from "dayjs";
const TableColumn = Table.Column;

interface AppointmentItem {
  id: number;
  patientId?: number;
  patientName?: string;
  doctorId?: number;
  mainHealthConcerns?: string;
  clinicId?: number;
  clinic?: any; // Assuming ClinicResp is defined elsewhere
  appointmentDate?: string; // ISO date string
  appointmentNumber?: string;
  status?: string;
  slot?: number;
  drugAllergies?: string[];
  contactDetails?: string;
  takingMedication?: boolean;
}

const AppointmentTable = memo<TableProps>((props) => {
  const [updateTarget, setUpdateTarget] = useState<AppointmentItem | null>(
    null,
  );
  const [clinicOptions, setClinicOptions] = useState<any[]>([]);

  const initialValues = useMemo(() => {
    if (!updateTarget) return {};
    const time =
      updateTarget?.appointmentDate + " " + slotToTime(updateTarget.slot);

    console.log(
      updateTarget?.appointmentDate + " " + slotToTime(updateTarget.slot),
    );
    return {
      ...updateTarget,
      appointmentDate: dayjs(time),
    };
  }, [updateTarget]);

  const onFinish = useCallback((values: AppointmentItem) => {
    const appointmentData = {
      ...values,
      appointmentDate: dayjs(values.appointmentDate).format("YYYY-MM-DD"),
      slot: values.slot,
    };
    console.log("Submitting appointment data:", appointmentData);
    setUpdateTarget(null);
  }, []);

  useEffect(() => {
    if (updateTarget) {
      postClinicSearch({ pageNo: 1, pageSize: 100 }).then((res) => {
        const options =
          (res?.list || []).map((item) => {
            return {
              label: item.enName,
              value: item.id,
            };
          }) || [];
        setClinicOptions(options);
      });
    }
  }, [updateTarget]);

  return (
    <>
      <Table {...props} size="small" rowKey="id" className="appointment-table">
        <TableColumn title="ID" dataIndex="id" key="id" />
        <TableColumn
          title="Appointment Date"
          render={(row) => {
            return row.appointmentDate + " " + slotToTime(row.slot);
          }}
        />
        <TableColumn
          title="patientName"
          dataIndex="patientName"
          key="patientName"
        />
        <TableColumn title="Email" dataIndex="email" key="patientId" />
        <TableColumn
          title="Phone Number"
          dataIndex="phoneNumber"
          key="phoneNumber"
        />
        <TableColumn
          title="Drug Allergies"
          dataIndex="drugAllergies"
          key="drugAllergies"
          render={(allergies) =>
            allergies
              ? allergies.map((item: string) => (
                  <Tag color="blue" key={item}>
                    {item}
                  </Tag>
                ))
              : "None"
          }
        />
        <TableColumn
          title="Action"
          render={(row) => (
            <>
              <Button
                onClick={() => {
                  setUpdateTarget(row);
                }}
                type="primary"
                size="small"
              >
                Update
              </Button>
            </>
          )}
        />
      </Table>

      <Modal
        footer={null}
        open={!!updateTarget}
        onCancel={() => setUpdateTarget(null)}
      >
        <Form
          initialValues={initialValues || {}}
          onFinish={onFinish}
          layout="vertical"
          autoComplete="off"
        >
          <Form.Item label="Patient Name" name="patientName">
            <Input readOnly />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input readOnly />
          </Form.Item>
          <Form.Item label="Phone Number" name="phoneNumber">
            <Input readOnly />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Please select the clinic!",
              },
            ]}
            label="Clinic"
            name="clinicId"
          >
            <Select options={clinicOptions} />
          </Form.Item>
          <Form.Item
            label="Appointment Date"
            name="appointmentDate"
            rules={[
              {
                required: true,
                message: "Please select the appointment date!",
              },
            ]}
          >
            <DatePicker className="w-full" format="YYYY-MM-DD" />
          </Form.Item>
          <Form.Item
            label="Slots"
            name="slot"
            rules={[
              {
                required: true,
                message: "Please select a time slot!",
              },
            ]}
          >
            <TimeSlots />
          </Form.Item>

          <Form.Item className="flex justify-end">
            <Button type="primary" htmlType="submit">
              Update Appointment
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
});

const AppointmentPage = () => {
  const [appointmentList, setAppointmentList] = useState<AppointmentItem[]>([]);

  const upComingAppointments = useMemo(() => {
    return appointmentList;
  }, [appointmentList]);

  const ongoingAppointments = useMemo(() => {
    return appointmentList;
  }, [appointmentList]);

  useEffect(() => {
    get("/clinic/getAppointments", { clinicId: 1 }).then((res) => {
      setAppointmentList(res.data || []);
    });
  }, []);

  return (
    <div className="appointment-page h-full bg-white pt-3 px-3">
      <Tabs
        defaultActiveKey="1"
        items={[
          {
            key: "1",
            label: "Upcoming",
            children: <AppointmentTable dataSource={upComingAppointments} />,
          },
          {
            key: "2",
            label: "Ongoing",
            children: <AppointmentTable dataSource={ongoingAppointments} />,
          },
        ]}
        className="h-full"
      />
    </div>
  );
};

AppointmentPage.displayName = "AppointmentPage";

export default AppointmentPage;
