class htmlElement {
  constructor(ele, text, root) {
    this.ele = ele;
    this.text = text;
    this.root = root;
  }

  style(ele, styleobj) {
    for (const css_property in styleobj) {
      ele.style[css_property] = styleobj[css_property];
    }
  }

  css(styleObj) {
    const tag = document.createElement(this.ele);
    tag.innerText = this.text;
    this.root.appendChild(tag);
    return this.style(tag, styleObj);
  }
}
export default htmlElement;

// functional approach
// its beautiful but trying constructor way for better
// const element = (ele, text, root)=>{
//   const tag = document.createElement(ele);
//   tag.innerText = text;
//   return root.appendChild(tag);
// }

// const style = (ele, styleobj)=>{
//   for(const css_property in styleobj){
//     ele.style[css_property] = styleobj[css_property]
//   }
// }
