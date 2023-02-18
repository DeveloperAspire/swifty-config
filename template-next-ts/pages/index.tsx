import React from "react";
import { Center } from "centa";

export default function Home() {
  return (
    <Center>
      <div className="sc-template-description">
        <h1 style={{ fontSize: "60px", fontWeight: 900 }}>
          Next.js template of ⚡️{" "}
          <span style={{ color: "blue", fontWeight: 900 }}>Swifty-Config</span>
        </h1>
        <p style={{ textAlign: "center", fontSize: "20px", padding: "20px 0" }}>
          edit{" "}
          <code
            style={{
              borderRadius: "2px",
              fontFamily: "ubuntu",
            }}
          >
            /pages/index.tsx
          </code>{" "}
          to get started
        </p>
      </div>
    </Center>
  );
}
