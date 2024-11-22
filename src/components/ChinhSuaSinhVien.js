import { Form, Formik } from "formik";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaPlus } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { FaSave } from "react-icons/fa";
import { useParams } from "react-router-dom";

const ChinhSuaSinhVien = ({ themMoiSinhVien }) => {
  const [form, setForm] = useState({
    ten: "",
    sdt: "",
    email: "",
  });
  const { id } = useParams();
  console.log(id);

  return (
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
              {errors.ten && touched.ten && (
                <span className="ms-2 text-danger">{errors.ten}</span>
              )}
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
              {errors.email && touched.email && (
                <span className="ms-2 text-danger">{errors.email}</span>
              )}
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
              {errors.sdt && touched.sdt && (
                <span className="ms-2 text-danger">{errors.sdt}</span>
              )}
            </div>
          </div>
          <button className="btn btn-primary">
            {form.id ? (
              <>
                <FaSave /> Cập nhật
              </>
            ) : (
              <>
                <FaPlus /> Thêm mới
              </>
            )}
          </button>
        </form>
      )}
    </Formik>
  );
};

export default ChinhSuaSinhVien;
