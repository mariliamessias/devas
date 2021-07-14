import React, { useState } from "react";
import {useHistory} from 'react-router-dom';
import styled from "styled-components";
import Dropdown, { Option } from 'react-dropdown';

import "react-dropdown/style.css";
import "./styles.css";

type HeaderProps ={
    showDropDown: Boolean;
    indexOption?: number
}

export function Header({ showDropDown, indexOption = 0,  ...props }: HeaderProps) {
    const options = [
        { value: 'trail-fundamentals', label: "Trilha Fundamentos" }, 
        { value: 'trail-frontend', label: "Trilha FrontEnd"}, 
        // { value: 'bootcamps', label: "Bootcamps e mais"}
    ];

    const history = useHistory();
    const defaultOption = options[indexOption];

    function handleOnSelect(e : Option) {
        history.push(`/${e.value}`)
    }

    function handleOnClick() {
        history.push(`/`)
    }

  return (
    <div className="header-content">
      <h1 onClick={handleOnClick}>Devas|</h1>
        {
            showDropDown ? <Dropdown onChange={handleOnSelect} options={options} value={defaultOption} /> : null 
        }
      
     
      {/* <ul className="header-list">
        <li>Trilha Fundamentos</li>
      </ul> */}
    </div>
  );
}
