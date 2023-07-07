import React from "react";

// não é html, e jsx. Não tem como colocar html dentro de 
// um bloco de codigos javaScript
// permite adicionar codigos javaScript no jsx
const HelloWolrd = () => {
  return (
    <div>
      <h1>Conte comigo 1, 2, {1 + 2}</h1>
    </div>
  )
}

export default HelloWolrd;