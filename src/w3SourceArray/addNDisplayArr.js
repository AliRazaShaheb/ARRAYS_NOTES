import htmlElement from "./htmlElementClass/htmlElement";

const app = document.getElementById("app");
const arr = ["ali", "raza"];

const cssobj = {
  addButton: {
    backgroundColor: "red",
    color: "white",
    border: "none",
    padding: "0.3rem 0.8rem",
    marginLeft: "1rem"
  },
  inputStyle: {
    padding: "0.2rem"
  }
};

export const addNDisplayArr = () => {
  const input = new htmlElement("input", "", app);
  input.css(cssobj.inputStyle);

  const addBtn = new htmlElement("button", "Add", app);
  addBtn.css(cssobj.addButton);

  const displayBtn = new htmlElement("button", "Display", app);
  displayBtn.css(cssobj.addButton);
  return;
};
