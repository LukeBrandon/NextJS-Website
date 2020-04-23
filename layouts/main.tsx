import React from "react";

interface IProps {
    children: React.ReactNode;
  }

export default function Page({children}: IProps){
    return (
        <div>
            <h1>Luke Brandon's Website</h1>
            <div id="body">
                {children}
            </div>
        </div>
    );
}