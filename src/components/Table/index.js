function Table(props) {

  return (
    <table className="table table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Gender</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Date of birth</th>
        </tr>
      </thead>
      <tbody>
        {props.data ? props.data.map((item, idx) => {
          return (<tr>
            <td>{idx + 1}</td>
            <td>{item.gender}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.dob}</td>
          </tr>)}) : ""}
      </tbody>
    </table>
  );
}

export default Table;