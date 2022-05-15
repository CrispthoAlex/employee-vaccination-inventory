import React from 'react'

const Message = ({errorMsg, bgColor}) => {
  // Adding inline styles to the Error message
  let stylesMsg = {
    padding: "1rem",
    marginBottom: "1.5rem",
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: bgColor,
  };
  return (
    <div style={stylesMsg}>
      <p>{errorMsg}</p>
    </div>
  )
}

export default Message