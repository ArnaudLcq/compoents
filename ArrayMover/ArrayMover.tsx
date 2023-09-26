import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface ArrayMoverProps {
  initialArray1: string[];
  initialArray2: string[];
}

const ArrayMover: React.FC<ArrayMoverProps> = ({ initialArray1, initialArray2 }) => {
  const [array1, setArray1] = useState<string[]>(initialArray1);
  const [array2, setArray2] = useState<string[]>(initialArray2);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  const handleMoveToLeft = () => {
    if (selectedItem) {
      setArray1([...array1, selectedItem]);
      setArray2(array2.filter((item) => item !== selectedItem));
      setSelectedItem(null);
    }
  };

  const handleMoveToRight = () => {
    if (selectedItem) {
      setArray2([...array2, selectedItem]);
      setArray1(array1.filter((item) => item !== selectedItem));
      setSelectedItem(null);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Array 1</h2>
          <ul className="list-group">
            {array1.map((item) => (
              <li
                key={item}
                className={`list-group-item ${selectedItem === item ? 'active' : ''}`}
                onClick={() => handleItemClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="col">
          <div className="d-flex flex-column align-items-center">
            <button className="btn btn-primary mt-2" onClick={handleMoveToLeft}>
              &lt; Move Left
            </button>
            <button className="btn btn-primary mt-2" onClick={handleMoveToRight}>
              Move Right &gt;
            </button>
          </div>
        </div>
        <div className="col">
          <h2>Array 2</h2>
          <ul className="list-group">
            {array2.map((item) => (
              <li
                key={item}
                className={`list-group-item ${selectedItem === item ? 'active' : ''}`}
                onClick={() => handleItemClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ArrayMover;
