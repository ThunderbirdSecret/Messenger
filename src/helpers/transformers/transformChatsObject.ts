import { ChatFromServer } from "api/typesAPI";


export const transformChatsObject = (data: ChatFromServer): ChatType => {
  return {
    id: data.id,
    title: data.title,
    avatar: data.avatar,
    //@ts-ignore
    unreadCount: data.unread_count,
    lastMessage: {
      user: data.last_message.user,
      time: data.last_message.time,
      content: data.last_message.content,
    }
  };
};
