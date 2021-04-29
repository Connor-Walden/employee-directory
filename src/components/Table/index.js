function Table(props) {

  return (
    <table className="table table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Gender</th>
          <th scope="col"><button onClick={() => props.sortData()}>Name</button></th>
          <th scope="col">Email</th>
          <th scope="col">Age</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((item, idx) => {
          return (
            <tr>
              <td>{idx + 1}</td>
              <td>{item.gender}</td>
              <td>{item.name.first + " " + item.name.last}</td>
              <td>{item.email}</td>
              <td>{item.dob.age}</td>
            </tr>
          )})}
      </tbody>
    </table>
  );
}

export default Table;