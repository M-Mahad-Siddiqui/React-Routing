import Component4 from "./Component4";
export default function Component3() {
  const divStyle = {
    border      : '2px solid rgb(6, 6, 32)',
    borderRadius: '5px',
    padding     : '10px',
    margin      : '10px 20px'
};

  return (
      <div style={divStyle}> <h2>Component C</h2>
          <Component4 />
          </div>
  )
}
