import React from "react";
import "./ListIcon.css";
import { BsSearch } from "react-icons/bs";
import { BsCartCheck } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
import { BsPlusLg } from "react-icons/bs";




function ListIcon({ type, color, onClick, active }) {
  const iconTypes = {
    "cart": color => (
      <BsCartCheck className = "icon--svg icon--svg__cart" color={color}/>
    ),
    "trash": color => (
      <BsTrash className = "icon--svg icon--svg__trash" color={color}/>
    ),
    "search": color => (
      <BsSearch className = "icon--svg icon--svg__search" color={color}/>
    ),
    "cross": color => (
      <BsPlusLg className = "icon--svg icon--svg__cross" color={color}/>
    )
  }
  return (
    <span
      className={`icon--container icon--container__${type} ${!!active && `icon--container__${type}-active`}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  )
}

export { ListIcon }