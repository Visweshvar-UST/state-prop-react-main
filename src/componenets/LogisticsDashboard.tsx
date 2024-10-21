import React, { useState } from 'react';

import '../App.css';
import WarehouseInventory from './WarehouseInventory';
import DeliveryStatus from './DeliveryStatus';

const LogisticsDashboard: React.FC = () => {
  const [warehouseItems, setWarehouseItems] = useState<number>(100);
  const [isTruckLeft, setIsTruckLeft] = useState<boolean>(false);
  const [NumTruckLeft, setNumTruckLeft] = useState<number>(0);

  const handleTruckDeparture = () => {
    setIsTruckLeft(true);
  };

  return (
    <div className="dashboard">
      <h1>Logistics Dashboard</h1>
      <div className="dashboard-content">
        <WarehouseInventory itemCount={warehouseItems} />
        <DeliveryStatus isTruckLeft={isTruckLeft} NumTruckLeft={NumTruckLeft} onTruckDeparture={handleTruckDeparture} />
      </div>
    </div>
  );
};

export default LogisticsDashboard;
