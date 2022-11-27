import React, { useEffect, useState } from "react";

function NavBar() {
    return (
        <div className="NavBar">
            <nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">ATLA API</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Random ATLA Character</a></li>
      <li><a href="#">Bending</a></li>
      <li><a href="#">Locations</a></li>
      <li><a href="#">Avatars</a></li>
    </ul>
  </div>
</nav>
        </div>

    );
}

export default NavBar;