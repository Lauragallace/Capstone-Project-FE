import { Outlet, useNavigate } from "react-router-dom";

export default function AreaAdmin() {
  const navigate = useNavigate();
  return (
    <>
      <div className="d-flex justify-content-center my-3">
        <button
          className="btn btn-primary mx-3"
          onClick={() => {
            navigate("airports");
          }}
        >
          Aeroporti
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            navigate("flights");
          }}
        >
          Voli
        </button>
      </div>
      <Outlet />
    </>
  );
}
