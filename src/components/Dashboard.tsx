import React, { useEffect, useState } from 'react';
import { fetchBookStatus } from "../services/blockchainServices";

const Dashboard: React.FC = () => {
    const [bookStatus, setBookStatus] = useState<any>({});

    useEffect(() => {
        async function loadStatus() {
            const statusData = await fetchBookStatus();
            setBookStatus(statusData);
        }
        loadStatus();
    }, []);

    return (
        <div>
            <h2>Library Dashboard</h2>
            <div>
                <p>Borrowed Books: {bookStatus.borrowed || 0}</p>
                <p>Available Books: {bookStatus.available || 0}</p>
                <p>Missed Books: {bookStatus.missed || 0}</p>
            </div>
        </div>
    );
};

export default Dashboard;
