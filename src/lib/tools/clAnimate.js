/*切页动画js*/

const CLAnimate = {
  inAndOut: function(that) {
    that.setState({showBlock: true});
    sessionStorage.setItem("historyLength", history.length);
  }
}

export default CLAnimate;