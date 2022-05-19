import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Table } from "react-bootstrap";
import "../CssHooks/AdminHeader.css";

const RegesteredUsers = () => {
  return (
    <div>
      <div className="admin-header">
        <h3 className="admin-title">Donner register list</h3>
      </div>
      <div className="admin-body">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Registating date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>Otto</td>
              <td>
                <Button className="btn-danger">
                  <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                </Button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>
                <Button className="btn-danger">X</Button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>
                <Button className="btn-danger">X</Button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>
                <Button className="btn-danger">X</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default RegesteredUsers;
