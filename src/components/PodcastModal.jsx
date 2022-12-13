import React from "react";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";

const styles = {
  modal: {
    width: "500px",
    height: "500px",
    background: "#fff",
    borderRadius: "5px",
    padding: "20px",
    zIndex: "1000",
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};

const PodcastModal = (props) => {
  return (
    <PureModal
      header={props.name}
      footer="Modal Footer"
      isOpen={props.modal}
      onClose={() => props.setModal(false)}
      className={styles.modal}
    >
      <p>Modal Content</p>
    </PureModal>
  );
};

export default PodcastModal;
