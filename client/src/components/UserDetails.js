import React from "react";
import Box from "@mui/material/Box";
import { useNavigate, useParams } from "react-router-dom";

export default function UserDetails({ users }) {
  const naviagte = useNavigate();
  let { userId } = useParams();
  let parsedUserId = parseInt(userId);
  const user = users.find((item) => item.id === parsedUserId);

  return (
    <Box style={{ width: "90%", margin: "0 auto", marginTop: "2%" }}>
      {user && Object.keys(user).length > 0 ? (
        <React.Fragment>
          <div>
            <p>
              <b style={{ marginRight: 6 }}>Name:</b>
              {user?.name}
            </p>
          </div>
          <div>
            <p>
              <b style={{ marginRight: 6 }}>Email:</b>
              {user?.email}
            </p>
          </div>
          <div>
            <p>
              <b style={{ marginRight: 6 }}>Website:</b>
              {user?.website}
            </p>
          </div>
          <div>
            <p>
              <b style={{ marginRight: 6 }}>Phone:</b>
              {user?.phone}
            </p>
          </div>
        </React.Fragment>
      ) : (
        <h1>No User Found!</h1>
      )}
      <button style={{ marginTop: 20 }} onClick={() => naviagte(-1)}>
        Go Back
      </button>
    </Box>
  );
}
