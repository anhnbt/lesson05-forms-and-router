import { Form, Formik } from "formik";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaPlus } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { FaSave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc chắc muốn xóa không?")) {
      setStudentList([...studentList.filter((item) => item.id !== id)]);
    }
  };

  const handleEdit = (id) => {
    navigate('/students/' + id);
  }

  return (
    <div className="">
      <h1>Danh sách sinh viên</h1>
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
                    <FaPencilAlt /> Sửa
                  </button>{" "}
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="btn btn-danger"
                  >
                    <FaTrash /> Xóa
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
