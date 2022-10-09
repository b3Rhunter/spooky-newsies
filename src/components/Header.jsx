import React from "react";
import { Typography } from "antd";

const { Title, Text } = Typography;

// displays a page header

export default function Header({ link, title, subTitle, ...props }) {
  return (
    <div align="middle" style={{ display: "flex", justifyContent: "space-between", padding: "24px", borderBottom: "1px solid #fff", position: "fixed", top: "0px", width: "100%", backgroundColor: "#121212", height: "75px", zIndex: "20" }}>
      <div style={{ display: "flex", flexDirection: "column", flex: 1, alignItems: "start" }}>

          <Title level={4} >
            <p id="title" style={{fontFamily: "horror", lineHeight: "0.75"}}>Spooky Newsies</p>
          </Title>
     
      </div>
      {props.children}
    </div>
  );
}

Header.defaultProps = {
  link: "https://github.com/scaffold-eth/scaffold-eth",
  title: "🏗 Scaffold-Eth",
  subTitle: "Forkable Ethereum dev stack focused on fast product iteration",
};
