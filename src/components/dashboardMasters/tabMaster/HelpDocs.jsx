import React, { useState } from "react";
import InputField from "../../commons/InputField";
import InputSelect from "../../commons/InputSelect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

const HelpDocs = () => {
  const [rows, setRows] = useState([]);
  const [newRow, setNewRow] = useState({ fileName: "", displayName: "", downloadName: "" });
  const [isEditing, setIsEditing] = useState(null);

  const handleInputChange = (field, value) => {
    setNewRow({ ...newRow, [field]: value });
  };

  const handleAddRow = () => {
    if (isEditing !== null) {
      const updatedRows = [...rows];
      updatedRows[isEditing] = newRow;
      setRows(updatedRows);
      setIsEditing(null);
    } else {
      setRows([...rows, newRow]);
    }
    setNewRow({ fileName: "", displayName: "", downloadName: "" });
  };

  const handleEditRow = (index) => {
    setIsEditing(index);
    setNewRow(rows[index]);
  };

  const handleRemoveRow = (index) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    setRows(updatedRows);
  };

  return (
    <div>
      <b>
        <h6 className="header-devider my-1">Attach Help Docs</h6>
      </b>

      {/* SECTION DIVIDER */}
      <div className="table-responsive row my-1 mx-0">
        <table className="table table-borderless mb-0">
          <thead className="text-white">
            <tr className="table-row-form">
              <th className="p-0" style={{ width: "25%", fontSize: "smaller" }}>
                Help Doc. File Name
              </th>
              <th className="p-0" style={{ width: "25%", fontSize: "smaller" }}>
                Display Name For Manual Document
              </th>
              <th className="p-0" style={{ width: "25%", fontSize: "smaller" }}>
                Download File Name
              </th>
              <th className="p-0"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <InputSelect
                  className="backcolorinput"
                  name="fileName"
                  id="fileName"
                  placeholder={"Select File"}
                  options={[{ value: 1, label: "pdf file" }]}
                  onChange={(e) => handleInputChange("fileName", e.target.value)}
                  value={newRow.fileName}
                />
              </td>
              <td>
                <InputField
                  type="text"
                  className="backcolorinput"
                  name="displayName"
                  id="displayName"
                  onChange={(e) => handleInputChange("displayName", e.target.value)}
                  value={newRow.displayName}
                />
              </td>
              <td>
                <InputField
                  type="text"
                  className="backcolorinput"
                  name="downloadName"
                  id="downloadName"
                  onChange={(e) => handleInputChange("downloadName", e.target.value)}
                  value={newRow.downloadName}
                />
              </td>
              <td className="px-0 action-buttons text-center">
                <button
                  className="btn btn-sm me-1 py-0 px-0"
                  style={{ background: "#34495e", color: "white" }}
                  onClick={handleAddRow}
                >
                  <FontAwesomeIcon icon={faAdd} className="dropdown-gear-icon" size="sm" />{" "}
                  {isEditing !== null ? "Save" : "Add"}
                </button>
              </td>
            </tr>
            {rows.map((row, index) => (
              <tr className="table-row-form text-start" key={index}>
                <td>{row.fileName || "---"}</td>
                <td>{row.displayName || "---"}</td>
                <td>{row.downloadName || "---"}</td>
                <td className="">
                  <div className="text-center">
                    <button
                      className="btn btn-outline-secondary btn-sm me-1 py-0 px-1"
                      onClick={() => handleEditRow(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-outline-secondary btn-sm ms-1 py-0 px-1"
                      onClick={() => handleRemoveRow(index)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HelpDocs;
