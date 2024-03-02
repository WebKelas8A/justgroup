export default function Card(props) {
  return (
    <div className="card">
      <div className="main">
        <img className="tokenImage" src={props.img} alt={props.nama} />
        <h2>{props.nama}</h2>
        <p className="description"> {props.desc} </p>
        <hr />
        <div className="creator">
          <div className="wrapper">
            <img src="/logo.jpeg" alt="Logo Grup" />
          </div>
          <p>
            <ins>{props.role}</ins> of <ins>Just Group</ins>
          </p>
        </div>
      </div>
    </div>
  );
}
