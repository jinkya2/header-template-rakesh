import React from "react";

export interface HeaderProps {
  version: number;
  name: string;
}

const style1 = {width: "100%", border: "1px solid gray", padding: "2px", margin: "2px", display: "flex"};
const style2 = { width: "55px", marginRight: "35px", marginTop: "4px"}

const Header1 = (value: any) => {
  console.log(value);
  return (
    <>
      <div style={style1}>
        <div>
          <img style={style2} alt="logo" src="https://bit.ly/3xxLEO7"></img>
        </div>
        <div>
          <p>{value.name}</p>
        </div>
      </div>
    </>
  );
};

const Header2 = (value: any) => {
  console.log(value);
  return (
    <>
      <div style={style1}>
        <div>
          <img style={style2} alt="logo" src="https://bit.ly/3xxzy7x"></img>
        </div>
        <div>
          <p>{value.name}</p>
        </div>
      </div>
    </>
  );
};

const HeaderDefault = () => {
  return (
    <>
      <div>
        <p>version 3</p>
      </div>
    </>
  );
};

const Header = (props: HeaderProps) => {
  console.log(props);
  if (props.version === 1) {
    return <Header1 name={props.name} />;
  } else if (props.version === 2) {
    return <Header2 name={props.name} />;
  } else {
    return <HeaderDefault />;
  }
};

export default Header;
