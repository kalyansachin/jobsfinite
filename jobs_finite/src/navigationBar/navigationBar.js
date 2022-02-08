import "./navigationBar.scss";

function CustomNavigation(){

    return(
        <div style={{color:"green"}}>
            <div id="wrapper">
  <ul>
    <li>
      <a href="#">
        <i class="icon-list-alt">
        </i>
        <div>
          Type
        </div>
      </a>
    </li>
    <li>
      <a href="#">
        <i class="icon-calendar">
        </i>
        <div>
          Basic Settings
        </div>
      </a>
    </li>
    <li>
      <a href="#">
        <i class="icon-globe">
        </i>
        <div>
          Geo
        </div>
      </a>
    </li>
    <li>
      <a href="#">
        <i class="icon-bullseye">
        </i>
        <div>
          Target Groups
        </div>
      </a>
    </li>
    <li>
      <a href="#">
        <i class="icon-picture">
        </i>
        <div>
          Creatives
        </div>
      </a>
    </li>
    <li>
      <a href="#">
        <i class="icon-list-alt">
        </i>
        <div>
          Summary
        </div>
      </a>
    </li>
  </ul>
</div>
        </div>
    )
}

export default CustomNavigation;