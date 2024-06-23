import { ReactNode } from "react";
import SideBar from "../components/sidebar/SideBar";
import { getUsers } from "../actions";
import UserList from "./components/UserList";

const UsersLayout = async ({ children }: { children: ReactNode }) => {
  const users = await getUsers();

  return (
    <SideBar>
      <div className="h-full">
        <UserList users={users} />
        {children}
      </div>
    </SideBar>
  );
};

export default UsersLayout;
