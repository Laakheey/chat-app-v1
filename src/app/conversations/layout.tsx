import React from "react";
import SideBar from "../components/sidebar/SideBar";
import ConversationList from "./component/ConversationList";
import { getConversations, getUsers } from "../actions";

export default async function ConversationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getConversations();
  const users = await getUsers();
  return (
    <SideBar>
      <div className="h-full">
        <ConversationList initialItems={conversations} users={users}/>
        {children}
      </div>
    </SideBar>
  );
}
