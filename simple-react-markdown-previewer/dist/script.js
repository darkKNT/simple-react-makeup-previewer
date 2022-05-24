class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '# A header (H1 size),\n## A sub header (H2 size), \n [a link](www.example.com),\n `inline code`,\n\n       a code block, \n\n - a list item, \n\n> a blockquote, \n\n ![an image](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg), \n\n **and bolded text**' };

    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {
    this.setState({
      text: event.target.value });

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "vh-auto  container-fluid d-flex flex-column bg-primary align-items-center" }, /*#__PURE__*/
      React.createElement("h1", null, "Markdown Previewer"), /*#__PURE__*/
      React.createElement("div", { className: " rounded d-flex flex-column mt-3 mb-3 w-50  border border-danger p-0" }, /*#__PURE__*/


      React.createElement("div", { className: "rounded border border-info" }, /*#__PURE__*/
      React.createElement("i", { class: "fas fa-fire" }), "Editor", /*#__PURE__*/

      React.createElement("i", { className: "fas fa-expand-arrows-alt" })), /*#__PURE__*/



      React.createElement("textarea", { className: "rounded overflow-scroll w-100 align-self-stretch mb-0", id: "editor", value: this.state.text, onChange: this.handleChange })), /*#__PURE__*/




      React.createElement("div", { className: "vh-auto rounded d-flex flex-column mt-1 w-75 border border-info" }, /*#__PURE__*/

      React.createElement("div", { className: " border border-info" }, /*#__PURE__*/
      React.createElement("i", { class: "fas fa-fire" }), "Previewer", /*#__PURE__*/

      React.createElement("i", { className: " fas fa-expand-arrows-alt  justify-self-end" })), /*#__PURE__*/



      React.createElement("div", { className: "bg-light w-100 overflow-scroll", id: "preview", dangerouslySetInnerHTML: { __html: marked(this.state.text, { breaks: true }) } }))));




  }}



ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));