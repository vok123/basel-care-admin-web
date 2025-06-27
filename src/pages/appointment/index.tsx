/* eslint-disable max-nested-callbacks */
import {
  getDoctorGetPatientAppointments,
  IGetDoctorGetPatientAppointmentsRes,
  IPostDoctorGetPatientRes,
  postClinicSearch,
  postDoctorGetPatient,
  postDoctorModifyAppointment,
} from "@/api";
import { slotToTime } from "@/utils/time";
import {
  Table,
  Button,
  Tag,
  Modal,
  Form,
  DatePicker,
  Select,
  message,
  Spin,
} from "antd";
import dayjs from "dayjs";
const TableColumn = Table.Column;

type AppointmentItem = IGetDoctorGetPatientAppointmentsRes[number];

interface AppointmentTableProps {
  dataSource: AppointmentItem[];
  loading?: boolean;
  onRefresh?: () => void;
}

const AppointmentTable = memo<AppointmentTableProps>((props) => {
  const [updateTarget, setUpdateTarget] = useState<AppointmentItem | null>(
    null,
  );
  const [clinicOptions, setClinicOptions] = useState<any[]>([]);
  const [patientInfo, setPatientInfo] = useState<IPostDoctorGetPatientRes>();
  const [updateLoading, setUpdateLoading] = useState(false);
  const [clinicLoading, setClinicLoading] = useState(true);
  const [patientInfoLoading, setPatientInfoLoading] = useState(true);
  const statusMap: Record<string, string> = {
    COMPLETED: "Completed",
    CONFIRMED: "Confirmed",
    PENDING: "Unconfirmed",
    CANCELLED: "Cancelled",
  };

  const initialValues = useMemo(() => {
    if (!updateTarget) return {};
    const time =
      updateTarget?.appointmentDate + " " + slotToTime(updateTarget.slot);

    return {
      ...updateTarget,
      appointmentDate: dayjs(time),
    };
  }, [updateTarget]);

  const getPatientInfo = (patientId?: number) => {
    setPatientInfoLoading(true);
    postDoctorGetPatient({ patientId: String(patientId) })
      .then((data) => {
        setPatientInfo(data);
      })
      .finally(() => {
        setPatientInfoLoading(false);
      });
  };

  const onFinish = useCallback(
    (values: AppointmentItem) => {
      const appointmentData = {
        ...values,
        appointmentDate: dayjs(values.appointmentDate).format("YYYY-MM-DD"),
        slot: values.slot,
      };
      setUpdateLoading(true);
      postDoctorModifyAppointment({
        appointmentId: updateTarget!.id,
        clinicId: values.clinicId,
        ...appointmentData,
      })
        .then(() => {
          message.success("Appointment updated successfully!");
          setUpdateTarget(null);
          props.onRefresh?.();
        })
        .finally(() => {
          setUpdateLoading(false);
        });
    },
    [props, updateTarget],
  );

  useEffect(() => {
    if (updateTarget) {
      postClinicSearch({ pageNo: 1, pageSize: 100 })
        .then((res) => {
          const options =
            (res?.list || []).map((item) => {
              return {
                label: item.enName,
                value: item.id,
              };
            }) || [];
          setClinicOptions(options);
        })
        .finally(() => {
          setClinicLoading(false);
        });
    }
  }, [updateTarget]);

  return (
    <>
      <Table
        dataSource={props.dataSource || []}
        size="small"
        rowKey="id"
        loading={props.loading}
        className="appointment-table"
      >
        <TableColumn title="ID" dataIndex="id" key="id" />
        <TableColumn
          title="Appointment Date"
          render={(row) => {
            return row.appointmentDate + " " + slotToTime(row.slot);
          }}
        />
        <TableColumn
          title="FirstName"
          render={({ patient }) => patient.firstName}
        />
        <TableColumn
          title="LastName"
          render={({ patient }) => patient.lastName}
        />
        <TableColumn
          title="Clinic Name"
          render={({ clinic }) => clinic.enName}
        />
        <TableColumn title="Email" render={({ patient }) => patient.email} />
        <TableColumn
          title="Phone Number"
          render={({ patient }) => patient.phone}
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
          title="Status"
          render={({ status }) => statusMap[status]}
        />
        <TableColumn
          title="Action"
          render={(row) => (
            <div className="flex gap-3">
              {row.status === "PENDING" ? (
                <Button
                  onClick={() => {
                    setUpdateTarget(row);
                    getPatientInfo(row.patientId);
                    setClinicLoading(true);
                  }}
                  size="small"
                  color="geekblue"
                  variant="outlined"
                >
                  Update
                </Button>
              ) : null}
              {row.status === "PENDING" ? (
                <ConfirmAppointment
                  onRefresh={props.onRefresh}
                  appointmentId={row.id}
                />
              ) : null}
              {row.status === "CONFIRMED" ? (
                <CompleteAppointment
                  onRefresh={props.onRefresh}
                  appointmentId={row.id}
                />
              ) : null}
              {["PENDING", "CONFIRMED"].includes(row.status) ? (
                <CanceledAppointment
                  onRefresh={props.onRefresh}
                  appointmentId={row.id}
                />
              ) : null}
            </div>
          )}
        />
      </Table>

      <Modal
        title="Update Appointment"
        footer={null}
        open={!!updateTarget}
        onCancel={() => setUpdateTarget(null)}
      >
        <Form
          initialValues={initialValues || {}}
          onFinish={onFinish}
          layout="vertical"
          autoComplete="off"
          className="mt-8!"
          key={updateTarget?.id || "appointment-form"}
        >
          <Spin spinning={patientInfoLoading}>
            <div className="flex">
              <Form.Item className="flex-1" label="Name">
                <div className="c-gray-5">
                  {patientInfo?.firstName + " " + patientInfo?.lastName}
                </div>
              </Form.Item>
              <Form.Item className="flex-1" label="Email" name="email">
                <div className="c-gray-5">{patientInfo?.email || ""}</div>
              </Form.Item>
              <Form.Item
                className="flex-1"
                label="Phone Number"
                name="phoneNumber"
              >
                <div className="c-gray-5">{patientInfo?.phone || ""}</div>
              </Form.Item>
            </div>
          </Spin>
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
            <Select loading={clinicLoading} options={clinicOptions} />
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
            <Button loading={updateLoading} type="primary" htmlType="submit">
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
  const [loading, setLoading] = useState<boolean>(true);
  const timer = useRef<number>(0);

  const upComingAppointments = useMemo(() => {
    return appointmentList;
  }, [appointmentList]);

  const ongoingAppointments = useMemo(() => {
    return appointmentList;
  }, [appointmentList]);

  const loadData = useCallback(() => {
    clearTimeout(timer.current);
    getDoctorGetPatientAppointments()
      .then((data) => {
        setAppointmentList(data || []);
      })
      .finally(() => {
        setLoading(false);
        timer.current = window.setTimeout(loadData, 3000);
      });
  }, []);

  const refreshData = useCallback(() => {
    setLoading(true);
    loadData();
  }, [loadData]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  return (
    <div className="appointment-page h-full bg-white pt-3 px-3">
      {/* <Tabs
        defaultActiveKey="1"
        items={[
          {
            key: "1",
            label: "Upcoming",
            children: (
              <AppointmentTable
                loading={loading}
                onRefresh={refreshData}
                dataSource={upComingAppointments}
              />
            ),
          },
          {
            key: "2",
            label: "Ongoing",
            children: <AppointmentTable dataSource={ongoingAppointments} />,
          },
        ]}
        className="h-full"
      /> */}
      <AppointmentTable
        loading={loading}
        onRefresh={refreshData}
        dataSource={upComingAppointments}
      />
    </div>
  );
};

AppointmentPage.displayName = "AppointmentPage";

export default AppointmentPage;
