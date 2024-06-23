import { getConversationById, getMessages } from "@/app/actions";
import { EmptyState } from "@/app/components";
import Header from "./components/Header";
import Body from "./components/Body";
import Form from "./components/Form";

type ParamsType = {
  conversationId: string;
};

const ConversationPage = async ({ params }: { params: ParamsType }) => {
  const conversation = await getConversationById(params.conversationId);
  const messages = await getMessages(params.conversationId);

  if (!conversation) {
    return (
      <div className="lg:pl-80 h-gull">
        <div className="h-full flex flex-col">
          <EmptyState />
        </div>
      </div>
    );
  }

  return (
    <div className="lg:pl-80 h-full">
      <div className="h-full flex flex-col">
        <Header conversation={conversation}/>
        <Body initialMessages={messages}/>
        <Form/>
      </div>
    </div>
  );
};

export default ConversationPage;
