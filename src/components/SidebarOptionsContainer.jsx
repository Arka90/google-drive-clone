import SidebarItem from "./SidebarItem";
import { Home } from "@mui/icons-material";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import DevicesIcon from "@mui/icons-material/Devices";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import ScheduleIcon from "@mui/icons-material/Schedule";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import { TreeView } from "@mui/x-tree-view";
import { List } from "@mui/material";

const SidebarOptionsContainer = () => {
  return (
    <TreeView>
      <List>
        <SidebarItem nodeId="1" labelText="Home" labelIcon={Home} url="/home" />
        <SidebarItem
          nodeId="2"
          labelText="My Drive"
          labelIcon={BackupTableIcon}
          url="/myDrive"
        />
        <SidebarItem
          nodeId="3"
          labelText="Computers"
          labelIcon={DevicesIcon}
          url="/computers"
        />
      </List>

      <List>
        <SidebarItem
          nodeId="4"
          labelText="Shared with me"
          labelIcon={FolderSharedIcon}
          url="/sharedWithMe"
        />
        <SidebarItem
          nodeId="5"
          labelText="Recent"
          labelIcon={ScheduleIcon}
          url="/recent"
        />
        <SidebarItem
          nodeId="6"
          labelText="Starred"
          labelIcon={StarBorderIcon}
          url="/stared"
        />
      </List>

      <List>
        <SidebarItem
          nodeId="7"
          labelText="Spam"
          labelIcon={ReportGmailerrorredIcon}
          url="/spam"
        />
        <SidebarItem
          nodeId="8"
          labelText="Bin"
          labelIcon={DeleteOutlineIcon}
          url="/bin"
        />
        <SidebarItem
          nodeId="9"
          labelText="Storage"
          labelIcon={CloudQueueIcon}
          url="/storage"
        />
      </List>
    </TreeView>
  );
};

export default SidebarOptionsContainer;
