import React, { useState } from "react";
import {useHistory} from 'react-router-dom';
import styled from "styled-components";
import Dropdown, { Option } from 'react-dropdown';

import "react-dropdown/style.css";
import "./styles.css";

export function Header() {
    const options = [
        { value: 'trail-fundamentals', label: "Trilha Fundamentos" }, 
        { value: '', label: "Trilha FrontEnd"}, 
        { value: '', label: "Trilha BackEnd"}
      ];
      const history = useHistory();
      const defaultOption = options[0];

      function handleOnSelect(e : Option) {
        console.log(e.value);

        history.push(`/${e.value}`)

      }

      

  return (
    <div className="header-content">
      <h1>Devas|</h1>

      <Dropdown onChange={handleOnSelect} options={options} value={defaultOption} />
     
      {/* <ul className="header-list">
        <li>Trilha Fundamentos</li>
      </ul> */}
    </div>
  );
}
