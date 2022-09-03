import { useState } from "react";

export default function List(data: any) {
  const [filter, setFilter] = useState("");

  const filterUser = (event: any) => {
    setFilter(event.target.value);
  };



  const found = data.data.filter((element: any) => {
    return Object.keys(element).some((key) =>
      element[key].toString().toLowerCase().includes(filter.toLocaleLowerCase())
    );
  });

  return (
    <div>
      <div className="filter" onChange={filterUser}>
        <input placeholder="filter text"></input>
      </div>
      {found.map((element: any, index: number) => {
        return (
          <div key={index} className="element">
            {index+1} - {element.name} - {element.phoneNumber}
          </div>
        );
      })}
    </div>
  );
}
