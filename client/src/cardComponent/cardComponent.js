import React from "react"
import "./cardComponent.css"
function cardComponent(props)
{
   return( <div id="main">
    <div
      class="gallery js-flickity"
      data-flickity-options='{ "wrapAround": true,"pageDots":false,"freeScroll":true }'
    >
        {/* can use here loop for th ecard details. I have added multiple cards */}
      <div class="gallery-cell"></div>
      <div class="gallery-cell"></div>
      <div class="gallery-cell"></div>
      <div class="gallery-cell"></div>
      <div class="gallery-cell"></div>
    </div>
  </div>)
}
export default cardComponent