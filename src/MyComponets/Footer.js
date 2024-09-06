import React from 'react'
import "./style.css"

export const Footer = () => {

  const footerStyle = {
    width : "100%",
    position: 'fixed',
    bottom: 0,
    // border : "2px solid red"
    backGroundColor : "white"
    // To place the scrollbar always in bottom
  }

  return (
    <footer className=' text-light' style={footerStyle}>
      <p className="text-center mb-0">
      Copyright &copy; MyTodosList.com
      </p>
    </footer>
  )
}

export default Footer;