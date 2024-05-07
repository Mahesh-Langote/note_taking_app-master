import StyleNotesGroup from "./NotesGroup.module.css";
import React from "react";

const NotesGroup = ({ id,groupName, color,buttonColorId }) => {

    const imageText = groupName.length;
  const NotesImage = {
    backgroundColor: `${color}`,
    borderRadius: "50%",
    minWidth: "61px",
    minHeight: "61px",

    // text
    color: "#FFF",
    fontFamily: "Roboto",
    fontSize: "1.50719rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "97.688%" /* 1.47238rem */,
    letterSpacing: "0.03013rem",

    // center
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    // UpperCase
    textTransform: "uppercase"
  };

  return (
    <>
    {
(buttonColorId===id)?(
<div className={StyleNotesGroup.NotesGroup} style={{backgroundColor: "#F7ECDC"}}>
        <div style={NotesImage}>
          {
          
           groupName[0]}
          { groupName[imageText-1]
          
          }
        </div>
        <div className={StyleNotesGroup.NotesName}>{groupName}</div>
      </div>
):(
  <div className={StyleNotesGroup.NotesGroup} >
        <div style={NotesImage}>
          {
          
           groupName[0]}
          { groupName[imageText-1]
          
          }
        </div>
        <div className={StyleNotesGroup.NotesName}>{groupName}</div>
      </div>
)

    }
      
    </>
  );
};

export default NotesGroup;
