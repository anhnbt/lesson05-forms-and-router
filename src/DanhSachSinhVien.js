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
    ten: "WanBi",
    sdt: "",
    email: "",
  });

  const handleChange = (e) => {
    console.log(e.target.name);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setStudentList([
      ...studentList,
      {
        id: uuidv4(),
        ...form,
      },
    ]);
  };

  const handleDelete = (id) => {
    setStudentList([...studentList.filter((item) => item.id !== id)]);
  };

  return (
    <div className="container">
      <h1>Danh sách sinh viên</h1>
      <form className="mb-2" onSubmit={handleSubmit}>
        <div className="row mb-1">
          <label className="col-3" htmlFor="ten">
            Tên:{" "}
          </label>
          <div className="col-9">
            <input
              type="text"
              name="ten"
              id="ten"
              value={form.ten}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-1">
          <label className="col-3" htmlFor="email">
            Email:{" "}
          </label>
          <div className="col-9">
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-1">
          <label className="col-3" htmlFor="sdt">
            Số điện thoại
          </label>
          <div className="col-9">
            <input
              type="number"
              name="sdt"
              id="sdt"
              value={form.sdt}
              onChange={handleChange}
            />
          </div>
        </div>
        <button className="btn btn-primary">Thêm mới</button>
      </form>
      {studentList.length < 10 && (
        <div className="alert alert-warning">Không có dữ liệu</div>
      )}
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
          {/* () => {} */}
          {/* (item) => {} */}
          {studentList.map((item) => (
            <tr key={item.id}>
              <td>{item.ten}</td>
              <td>{item.email}</td>
              <td>{item.sdt}</td>
              <td>
                <button className="btn btn-info">Sửa</button>{" "}
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
    </div>
  );
}

export default DanhSachSinhVien;
