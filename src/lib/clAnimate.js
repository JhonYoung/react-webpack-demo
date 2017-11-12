/*切页动画js*/

const CLAnimate = {
  inAndOut: function(that) {
    // if (history.length <= parseInt(sessionStorage.getItem("historyLength"))) {
    //   that.setState({
    //     aniType: 'left',
    //     showBlock: true
    //   });
    // } else {
    //    that.setState({showBlock: true});
    // }
    that.setState({showBlock: true});
    sessionStorage.setItem("historyLength", history.length);
  }
}

export default CLAnimate;