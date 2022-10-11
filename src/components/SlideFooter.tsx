import React, { Component, useState } from "react";
import { render } from "react-dom";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import ContentFooter from "./ContentFooter";
import './../styles/SlideFooter.css';

type SlideF = { 
        isPaneOpen: boolean;
        isPaneOpenLeft: boolean;
}

export default function SlideFooter () {
  const [state, setState] = useState<SlideF | any>({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  });

  return (
    <div style={{position: "absolute"}}>
      <div style={{ marginTop: "32px"}}>
        <button onClick={() => setState({ isPaneOpenLeft: true })}>
          More Information
        </button>
      </div>
      <SlidingPane
        
        closeIcon={<div>Information</div>}
        isOpen={state.isPaneOpenLeft}
        title="Conozca mas sobre los proyectos"
        from="bottom"
        width="100%"
        onRequestClose={() => setState({ isPaneOpenLeft: false })}
      >
        <ContentFooter />
      </SlidingPane>
    </div>
  );
};

