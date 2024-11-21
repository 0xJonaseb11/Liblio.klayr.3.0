import React from "react";
import Dashboard from "../components/Dashboard";
import BookTable from "../components/BookTable";

const App: React.FC = () => {
    return (
        <div>
            <h1>Library Management System</h1>
            <Dashboard />
            <BookTable />
        </div>
    );
};

export default App;
