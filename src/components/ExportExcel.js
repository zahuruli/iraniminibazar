import * as FileSaver from "file-saver";
import XLSX from "sheetjs-style";
import { Tooltip } from "@mui/material";
import Sheet from "../image/excel.webp";
import React from "react";
import PropTypes from "prop-types"; // Import PropTypes

const ExportExcel = ({ excelData, fileName }) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";
  const exportToExcel = async () => {
    const ws = XLSX.utils.json_to_sheet(excelData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <Tooltip title="Excel Export">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1vw",
          fontWeight: "bold",
        }}
      >
        <button
          style={{
            width: "2.8vw",
            backgroundColor: "#F5F5DC",
            outline: "none",
            border: "none",
            borderRadius: ".2vw",
            boxShadow: "0 5px #999",
            cursor: "pointer",
          }}
          type="submit"
          onClick={() => exportToExcel(fileName)}
        >
          <img src={Sheet} alt="" style={{ width: "3vw" }} />
        </button>
        <div style={{ paddingTop: "0.4vw" }}>Excel</div>
      </div>
    </Tooltip>
  );
};

// Define propTypes for the component
ExportExcel.propTypes = {
  excelData: PropTypes.array.isRequired, // Assuming excelData is an array, adjust as needed
  fileName: PropTypes.string.isRequired,
};

export default ExportExcel;
