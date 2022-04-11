import "./datatable.scss";

import { Link } from "react-router-dom";


const Datatable = () => {
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <p>Alvi</p>
    </div>
  );
};

export default Datatable;
