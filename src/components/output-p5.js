import React from "react";
import PropTypes from "prop-types";
import raw from "raw.macro";
const p5Min = raw("../p5.min.js");

const defaultInput = `
  function draw(){
    line(0,0,400,400)
  }
`;
export default class OutputP5 extends React.Component {
  static defaultProps = {
    width: 400,
    height: 400,
    input: defaultInput
  };
  static propTypes = {
    /** Width of canvas */
    width: PropTypes.number,
    /** Height of canvas */
    height: PropTypes.number,
    /** Processing.js code in string format */
    input: PropTypes.string
  };
  render() {
    let { input } = this.props;
    let sketchString = `
      ${input}
    `;

    const srcDoc = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <style>
            html, body {
              margin: 0;
              padding: 0;
            }
            canvas {
              display: block;
            }
          </style>
        </head>
        <body>
          <script>
          ${p5Min}
          </script>
          <script>
            ${sketchString}
          </script>
        </body>
      </html>
    `;
    let iframeStyle = {
      border: "none",
      minWidth: "100%",
      minHeight: "100%"
    };
    return (
      <iframe
        {...this.props}
        style={iframeStyle}
        srcDoc={srcDoc}
        title="OutputP5"
      />
    );
  }
}
