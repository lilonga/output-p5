Basic

```js
<OutputP5
  input={`
    function setup(){
      createCanvas(400,400)
      line(0,0,width,height)
    }
  `}
/>
```

Sierpinski triangle (converted to p5 from Processing.js version https://www.khanacademy.org/computer-programming/sierpinski-triangle/5008171647467520)

```js
<OutputP5
  input={`
      // The Lightning Programmer 2019 Sierpinski Triangle
      // Credit to this learning thing for teaching me how to code recursions!

      var depth = 6; // change this!

      var drawTriangle = function(depth, x1, y1, x2, y2, x3, y3) {
          triangle(x1, y1, x2, y2, x3, y3);
          if (depth > 0) {
              var x12 = (x1 + x2) / 2;
              var x13 = (x1 + x3) / 2;
              var x23 = (x2 + x3) / 2;
              var y12 = (y1 + y2) / 2;
              var y13 = (y1 + y3) / 2;
              var y23 = (y2 + y3) / 2;
              depth--;
              drawTriangle(depth, x1, y1, x12, y12, x13, y13);
              drawTriangle(depth, x2, y2, x12, y12, x23, y23);
              drawTriangle(depth, x3, y3, x13, y13, x23, y23);
          }
      };
      function setup(){
        createCanvas(400,400)
        background(0);
        stroke(0);
        strokeWeight(1);
        drawTriangle(depth, 200,10, 10,390, 390,390);
      }
    `}
/>
```
