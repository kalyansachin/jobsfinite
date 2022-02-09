import "./navigationBar.scss";
import AssignmentIcon from '@mui/icons-material/Assignment';
import EventNoteIcon from '@mui/icons-material/EventNote';
import MoodIcon from '@mui/icons-material/Mood';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import TwitterIcon from '@mui/icons-material/Twitter';
// import { withRouter } from "react-router";

function CustomNavigation(){

    return(
        <div >
            <div id="wrapper">
  <ul>
    <li>
      <a href="#">
            <AssignmentIcon/>
        <div>
          Type
        </div>
      </a>
    </li>
    <li>
      <a href="#">
        <EventNoteIcon/>
        <div>
          Basic Settings
        </div>
      </a>
    </li>
    <li>
      <a href="#">
        <MoodIcon/>
        <div>
          Geo
        </div>
      </a>
    </li>
    <li>
      <a href="#">
      <TipsAndUpdatesIcon/>
        <div>
          Target Groups
        </div>
      </a>
    </li>
    <li>
      <a href="#">
        <RocketLaunchIcon/>
        <div>
          Creatives
        </div>
      </a>
    </li>
    <li>
      <a href="#">
        <TwitterIcon/>
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

export default (CustomNavigation);