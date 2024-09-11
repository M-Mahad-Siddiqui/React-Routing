import Component3 from "./Component3";
export default function Component2() {

      const divStyle = {
    border      : '2px solid rgb(6, 6, 32)',
    borderRadius: '5px',
    padding     : '10px',
    margin      : '10px 20px'
};

  return (
      <div style = {divStyle}> <h2>Component B</h2>
          <Component3 />
          </div>
  )
}
