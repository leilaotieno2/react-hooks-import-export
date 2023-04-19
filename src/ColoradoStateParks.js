import React from "react";
import Hogwarts from "./Hogwarts";
import howManyParks from "./parks/howManyParks";

export default ColoradoStateParks;

function ColoradoStateParks() {
howManyParks(); // => "42 parks!"

  return (<div>
<h1>Colorado State Parks!</h1>

<Hogwarts />
  </div>)
  }



