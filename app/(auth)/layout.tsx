import React from "react";

export default function RootLayout({
    children,
  }:{
    children: React.ReactNode;
  }) {
    return (
          <div>
            <h2>20% off</h2>
            {children}
          </div>
    )
}