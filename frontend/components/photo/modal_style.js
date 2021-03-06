const ModalStyle = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(53, 41, 17, 0.74902)',
    // z-index         : 10
  },
  content : {
    position        : 'fixed',
    top             : '57px',
    left            : '150px',
    right           : '150px',
    bottom          : '7px',
    padding         : '20px',
    opacity         : '0',
    transition      : 'opacity 0.25s'
    // z-index: 11
  }
}

export default ModalStyle;
