import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./styles.css";
import { Data } from "./Data.js";

export function Accordion() {
  const history = useHistory();

  function handleChangePage(page: string): void {
    history.push(page);
  }

  return (
    <div className="accordion">
      <ul>
        {Data.map((item) => {
          return (
            <li>
              <div>
                {""}
                <div className="accordion-trail-title">
                  <img src={item.image} />
                  <span>{item.titleCard}</span>
                </div>
                <a href="#">
                  <div className="accordion-content">
                    <>
                      <img src={item.image} />
                      <h2>{item.titleContent}</h2>
                      <p>
                        {item.firstParagraph}
                        <br />
                        <br />
                        {item.seccondParagraph}

                        {item.itemList.map((iList) => {
                          return (
                            <>
                              <br />
                              <br />
                              <strong>{iList.text}</strong>
                            </>
                          );
                        })}

                        <br />
                        <br />
                      </p>
                    </>
                    {item.showButton ? (
                      <button
                        onClick={() =>
                          handleChangePage(item.buttonLinkRedirect)
                        }
                      >
                        {item.textButton}
                      </button>
                    ) : null}
                  </div>
                </a>
                {""}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
