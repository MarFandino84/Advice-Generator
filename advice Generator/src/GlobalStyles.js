import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

/*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
     box-sizing: border-box;
   }
   /*
     2. Remove default margin
   */
   * {
     margin: 0;
   }
   /*
     Typographic tweaks!
     3. Add accessible line-height
     4. Improve text rendering
   */
   body {
     line-height: 1.5;
     -webkit-font-smoothing: antialiased;
     background-color: var(--DarkBlue);
     width: 100vw;
     min-height: 100vh;
     font-family: Manrope, sans-serif;
     display: flex;
     justify-content: center;
     align-items: center;
    }
   /*
     5. Improve media defaults
   */
   img, picture, video, canvas, svg {
     display: block;
     max-width: 100%;
     
   }
   /*
     6. Remove built-in form typography styles
   */
   input, button, textarea, select {
     font: inherit;
   }
   /*
     7. Avoid text overflows
   */
   p, h1, h2, h3, h4, h5, h6 {
     overflow-wrap: break-word;
   }
   /*
     8. Create a root stacking context
   */
   #root, #__next {
     isolation: isolate;
   }

/*
     -Never use height on Elements that contains text.
     -Try avoid IDs (specifity,maintainance,no reusability)
     -Try avoid using em (padding, button,inputs ) related to font size
     -Use rem tags related with text
     -Dont use px in font-size, use ems
     -Avoid using background-image ( affects performance, by fetching) use picture instead
*/
   
   
:root {
     --LightCyan: hsl(193, 38%, 86%);
     --NeonGreen: hsl(150, 100%, 66%);
     --GrayishBlue: hsl(217, 19%, 38%);
     --DarkGrayishBlue: hsl(217, 19%, 24%);
     --DarkBlue: hsl(218, 23%, 16%);
}



`