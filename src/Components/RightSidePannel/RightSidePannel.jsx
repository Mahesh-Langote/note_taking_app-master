import StyleRightSidePannel from "./RightSidePannel.module.css";

const RightSidePannel = () => {
  return (
    <>
      <div className={StyleRightSidePannel.rightSidePannel}>
        <div className={StyleRightSidePannel.image}>
          <img
            src="assets/NoteDefaultImageOnPageLoad.svg"
            alt="NoteDefaultImageOnPageLoad"
            style={{ width: "50vw" }}
          />
          <div>
            <div className={StyleRightSidePannel.imageText1}>Pocket Notes</div>
            <div className={StyleRightSidePannel.imageText2}>
            Send and receive messages without keeping your phone online.
              <br />
              
Use Pocket Notes on up to 4 linked devices and 1 mobile phone
            </div>
          </div>
          <div className={StyleRightSidePannel.endToEnd}><img src="assets/endToEndEncryptedImage.svg" alt="endToEndEncryptedImage"/> end-to-end encrypted</div>
        </div>
          </div>
    </>
  );
};

export default RightSidePannel;
  