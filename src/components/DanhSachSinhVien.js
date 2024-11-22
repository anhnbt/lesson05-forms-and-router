import { Form, Formik } from "formik";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const students = [
  {
    id: 1,
    ten: "Tuấn",
    sdt: "0123456789",
    email: "tuan@codegym.vn",
  },
  {
    id: 2,
    ten: "Huy",
    sdt: "0123456789",
    email: "huy@codegym.vn",
  },
];

function DanhSachSinhVien() {
  const [studentList, setStudentList] = useState(students);
  const [form, setForm] = useState({
    ten: "",
    sdt: "",
    email: "",
  });

  const themMoiSinhVien = (sinhVien) => {
    if (sinhVien.id) {
      setStudentList([
        ...studentList.map((item) => {
          return item.id === sinhVien.id ? { ...sinhVien } : item;
        }),
      ]);
      setForm({
        ten: "",
        sdt: "",
        email: "",
      });
    } else {
      setStudentList([
        ...studentList,
        {
          id: uuidv4(),
          ...sinhVien,
        },
      ]);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc chắc muốn xóa không?")) {
      setStudentList([...studentList.filter((item) => item.id !== id)]);
    }
  };

  const handleEdit = (id) => {
    const student = studentList.find((item) => item.id === id);
    setForm({ ...student });
  };

  return (
    <div className="container">
      <h1>Danh sách sinh viên</h1>
      <Formik
        enableReinitialize={true}
        initialValues={form}
        validate={(values) => {
          const errors = {};
          if (!values.ten) {
            errors.ten = "Vui lòng nhập tên";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Vui lòng nhập đúng địa chỉ email";
          } else if (
            !/(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})$/i.test(values.sdt)
          ) {
            errors.sdt = "Vui lòng nhập đúng số điện thoại";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          themMoiSinhVien(values);
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input type="hidden" name="id" value={values.id || ""} />
            <div className="row mb-1">
              <label className="col-3" htmlFor="ten">
                Tên:{" "}
              </label>
              <div className="col-9">
                <input
                  type="text"
                  name="ten"
                  id="ten"
                  value={values.ten}
                  onChange={handleChange}
                />
                {errors.ten && touched.ten && <span className="ms-2 text-danger">{errors.ten}</span>}
              </div>
            </div>
            <div className="row mb-1">
              <label className="col-3" htmlFor="email">
                Email:{" "}
              </label>
              <div className="col-9">
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && touched.email && <span className="ms-2 text-danger">{errors.email}</span>}
              </div>
            </div>
            <div className="row mb-1">
              <label className="col-3" htmlFor="sdt">
                Số điện thoại
              </label>
              <div className="col-9">
                <input
                  type="text"
                  name="sdt"
                  id="sdt"
                  value={values.sdt}
                  onChange={handleChange}
                />
                {errors.sdt && touched.sdt && <span className="ms-2 text-danger">{errors.sdt}</span>}
              </div>
            </div>
            <button className="btn btn-primary">
              {form.id ? "Cập nhật" : "Thêm mới"}
            </button>
          </form>
        )}
      </Formik>
      {studentList.length === 0 ? (
        <div className="alert alert-warning">Không có dữ liệu</div>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <td>Tên</td>
              <td>Email</td>
              <td>Số điện thoại</td>
              <td>Hành động</td>
            </tr>
          </thead>
          <tbody>
            {studentList.map((item) => (
              <tr key={item.id}>
                <td>{item.ten}</td>
                <td>{item.email}</td>
                <td>{item.sdt}</td>
                <td>
                  <button
                    onClick={() => handleEdit(item.id)}
                    className="btn btn-info"
                  >
                    Sửa
                  </button>{" "}
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="btn btn-danger"
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default DanhSachSinhVien;
