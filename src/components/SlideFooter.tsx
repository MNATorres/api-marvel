import React, { Component, useState } from "react";
import { render } from "react-dom";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import ContentFooter from "./ContentFooter";
import './../styles/SlideFooter.css';
import { BiChevronDown } from "react-icons/bi";
import { BsXLg } from "react-icons/bs";


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
    <div>
      <div className="buttonFooter">
        <button onClick={() => setState({ isPaneOpenLeft: true })}>
          More Information <BiChevronDown style={{fontSize: "22px"}}/>
        </button>
      </div>
      <SlidingPane
        
        closeIcon={<div ><BsXLg style={{width: "200px"}} /></div>}
        isOpen={state.isPaneOpenLeft}
        title="Learn More"
        from="bottom"
        width="100%"
        onRequestClose={() => setState({ isPaneOpenLeft: false })}
      >
        <ContentFooter />
      </SlidingPane>
    </div>
  );
};

