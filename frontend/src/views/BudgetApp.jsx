import React, { useState } from 'react';
import '../styles/BudgetApp.css'
import FileUpload from '../components/FileUpload';
import DataTable from '../components/DataTable';
import FinancialSummary from '../components/FinancialSummary';

const BudgetApp = () => {
  const [tableData, setTableData] = useState([]);

  const handleUploadSuccess = (data) => {
    setTableData(data);
  };

  const handleClearData = () => {
    setTableData([]);
  };

  return (
    <div className="Budget-App">
      <FileUpload tableData={tableData} onUploadSuccess={handleUploadSuccess} onClearData={handleClearData} />
      <FinancialSummary data={tableData} />
      <DataTable data={tableData} />
    </div>
  );
};

export default BudgetApp;
