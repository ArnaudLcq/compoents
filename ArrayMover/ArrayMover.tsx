import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface ArrayMoverProps {
  initialArray1: string[];
  initialArray2: string[];
}

const ArrayMover: React.FC<ArrayMoverProps> = ({
  initialArray1,
  initialArray2,
}) => {
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
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Database</th>
                <th>Tables</th>
              </tr>
            </thead>
            <tbody>
              {array1.map((item) => (
                <tr
                  key={item}
                  className={selectedItem === item ? "table-primary" : ""}
                  onClick={() => handleItemClick(item)}
                >
                  <td>{item}</td>
                  <td>test2</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Database</th>
                <th>Tables</th>
              </tr>
            </thead>
            <tbody>
              {array2.map((item) => (
                <tr
                  key={item}
                  className={selectedItem === item ? "table-primary" : ""}
                  onClick={() => handleItemClick(item)}
                >
                  <td>{item}</td>
                  <td>test</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="d-flex flex-column align-items-center">
            <button className="btn btn-light" onClick={handleMoveToLeft}>
              Move Left
            </button>
            <button className="btn btn-light" onClick={handleMoveToRight}>
              Move Right
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArrayMover;
