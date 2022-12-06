function Car(props) {
  return <li className="alert alert-success">I am {props.company} Car</li>;
}

function Garage() {
  const cars = [
    { id: 1, brand: "Ford" },
    { id: 2, brand: "Toyota" },
    { id: 3, brand: "Sedan" },
    { id: 4, brand: "BMW" },
  ];

  return (
    <div className="col-sm-8">
      <ul type="none">
        {cars.map((x) => (
          <Car key={x.id} company={x.brand} />
        ))}
      </ul>
    </div>
  );
}

export default Garage;
