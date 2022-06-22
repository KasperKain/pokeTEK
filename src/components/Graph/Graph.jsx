import './Graph.css';

export default function Graph(props) {
  let details = props.details;
  if (details) {
    // Lazy double loop for math
    let highNum = 0;
    for (let i = 0; i < details.length; i++) {
      highNum = details[i].val > highNum ? props.details[i].val : highNum;
    }

    for (let j = 0; j < details.length; j++) {
      details[j].per = (details[j].val / highNum) * 100;
    }
  }

  function graphBar(name, val, per) {
    this.name = name;
    this.val = val;
    this.html = (
      <div key={this.val} className='graph-bar' style={{ height: `${per}%` }}>
        <span>
          <p>{this.name}</p>
        </span>
        <span></span>
        <span>
          <p>{this.val}</p>
        </span>
      </div>
    );
  }

  return (
    <div className='Graph'>
      {details.map(
        (detail) =>
          new graphBar(`${detail.val}`, `${detail.name}`, `${detail.per}`).html
      )}
    </div>
  );
}
