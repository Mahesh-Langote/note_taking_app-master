import LeftSidePannel from "../LeftSidePannel/LeftSidePannel";
import RightSidePannel from "../RightSidePannel/RightSidePannel";
import StyleHomeMainPage from "./HomeMainPage.module.css";
import React, { useState} from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Notes from "../Notes/Notes";



const HomeMainPage = () => {
  const [open, setOpen] = React.useState(false);
  const [colorChoice, setColorChoice] = React.useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [colorgroupChoice,setColorgroupChoice]=useState(false);

  
const [userIdClicked,setUserIdClicked] = useState(0);

const handleUserIdClicked = IDnum => {
  setUserIdClicked(IDnum);
};
  
  // Setting stored data as default
  const [createGroup, setCreateGroup] = useState({
    id: 0,
    groupName: "",
    color: "",
    create: false,
  });

  const { id, groupName, color, create } = createGroup;

  const submitCheck = () => {
    if (colorChoice === true && groupName !== "" ) {
      return true;
    } else {
      return false;
    }
  };

  const handleClick = (open) => {
    setOpen(open);
  };

  const handleNotesChange = (e) => {
    setCreateGroup({ ...createGroup, groupName: e.target.value });
    setColorgroupChoice(true);
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log(submitCheck + "submitCheck");
    if (submitCheck() === true) {
      setCreateGroup({ ...createGroup, create: true });
      // {console.log(idChange())}
      setOpen(false);
    }
  };

  // color functions+++++++++++++++++++++++++++++++++++++++++++

  const funColor1 = () => {
    setCreateGroup({ ...createGroup, color: "#B38BFA" });
    setColorChoice(true);
  };

  const funColor2 = () => {
    setCreateGroup({ ...createGroup, color: "#FF79F2" });
    setColorChoice(true);
  };

  const funColor3 = () => {
    setCreateGroup({ ...createGroup, color: "#43E6FC" });
    setColorChoice(true);
  };

  const funColor4 = () => {
    setCreateGroup({ ...createGroup, color: "#F19576" });
    setColorChoice(true);
  };

  const funColor5 = () => {
    setCreateGroup({ ...createGroup, color: "#0047FF" });
    setColorChoice(true);
  };

  const funColor6 = () => {
    setCreateGroup({ ...createGroup, color: "#6691FF" });
    setColorChoice(true);
  };

  return (
    <>
  <div className={StyleHomeMainPage.homeMainPage}>
       {/*  desktop version */}
        {submitCheck() ? (
          <div className={StyleHomeMainPage.hideWhenMobile}>
          <LeftSidePannel
            handleClick={handleClick}
            handleUserIdClicked={handleUserIdClicked}
            id={id}
            groupName={groupName}
            color={color}
            create={create}
          />
          </div>
        ) : (
          <div className={StyleHomeMainPage.hideWhenMobile}>
          <LeftSidePannel handleClick={handleClick}handleUserIdClicked={handleUserIdClicked} />
          </div>
        )}
        {
          (userIdClicked>0) ? (
            <div className={StyleHomeMainPage.hideWhenMobile}>
            <Notes userIdClicked={userIdClicked}/>
            </div>
          ):(
            <div className={StyleHomeMainPage.hideWhenMobile}>
            <RightSidePannel />
          </div>
          )
        }
      {/* mobile version  */}
       { submitCheck() && isVisible ? (
        <div className={StyleHomeMainPage.hideWhenPc}>
          <LeftSidePannel
            handleClick={handleClick}
            handleUserIdClicked={handleUserIdClicked}
            id={id}
            groupName={groupName}
            color={color}
            create={create}
           
          />
          </div>
        ) : (
          (isVisible) ?(
          <div className={StyleHomeMainPage.hideWhenPc} onClick={()=>setIsVisible(false)}>
          <LeftSidePannel handleClick={handleClick} handleUserIdClicked={handleUserIdClicked}/>
          {console.log(isVisible)}
          </div>
          )
        :(null)
        )
        }
        {
          (userIdClicked>0) ? (
            <div className={StyleHomeMainPage.hideWhenPc}>
            <Notes userIdClicked={userIdClicked}/>
            </div>
          ):(
            open > 0 && (
              <div className={StyleHomeMainPage.hideWhenPc}>
                <LeftSidePannel
                  handleClick={handleClick}
                  handleUserIdClicked={handleUserIdClicked}
                  id={id}
                  groupName={groupName}
                  color={color}
                  create={create}
                />
              </div>
            )
          )
        }



       





      </div>
      {/* ?,modal  #################################################################### */}
      <Modal
        open={open}
        onClose={() => {setOpen(false);window.location.reload()}}
        closeOnOverlayClick={true}
        center={true}
        showCloseIcon={false}
      >
        <h2 className={StyleHomeMainPage.Text1}>Create New Notes group</h2>
        <form action="">
          <p>
            <label htmlFor="GroupName">
              <span className={StyleHomeMainPage.Text2}> Group Name</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <input
                type="text"
                placeholder="   Enter your group name...."
                className={StyleHomeMainPage.placeHold}
                onChange={(e) => handleNotesChange(e)}
              />
              {colorgroupChoice === false && groupName === "" ? (
            <p style={{ color: "red" }}>Please Enter Group Name!</p>
          ) : null}
            </label>
          </p>
          <p className={StyleHomeMainPage.Choosecolour}>
            <label htmlFor="Choosecolour">
              <span className={StyleHomeMainPage.Text2}>Choose colour</span>
              <span className="StyleHomeMainPage.ChoosecolourBreak">
                &nbsp;&nbsp;
                <button
                  type="button"
                  className={StyleHomeMainPage.colorButton1}
                  onClick={funColor1}
                ></button>
                &nbsp;&nbsp;
                <button
                  type="button"
                  className={StyleHomeMainPage.colorButton2}
                  onClick={funColor2}
                ></button>
                &nbsp;&nbsp;
                <button
                  type="button"
                  className={StyleHomeMainPage.colorButton3}
                  onClick={funColor3}
                ></button>
                &nbsp;&nbsp;
                <button
                  type="button"
                  className={StyleHomeMainPage.colorButton4}
                  onClick={funColor4}
                ></button>
                &nbsp;&nbsp;
                <button
                  type="button"
                  className={StyleHomeMainPage.colorButton5}
                  onClick={funColor5}
                ></button>
                &nbsp;&nbsp;
                <button
                  type="button"
                  className={StyleHomeMainPage.colorButton6}
                  onClick={funColor6}
                ></button>
                &nbsp;&nbsp;
              </span>
            </label>
          </p>
          {colorChoice === false ? (
            <p style={{ color: "red" }}>Please Choose The Color!</p>
          ) : null}
          <input
            type="submit"
            value="Create"
            className={StyleHomeMainPage.create}
            onClick={handleSubmit}
          />
        </form>
      </Modal>
    </>
  );
};

export default HomeMainPage;
