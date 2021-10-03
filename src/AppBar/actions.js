import { setChats } from "../Chat/chatSlice";
import { db } from "../App";

const getPayloadFromSnapshot = (snapshot) => {

  console.log(snapshot.val(), "VAL");

  return { [snapshot.key]: snapshot.val() };
};

export const addChatToThunk = (message) => async (dispatch, getState) => {
  const { chat } = getState();
  const chatId = message.chatId;
  const messages = chat.messages[chatId] || [];

};

const generateChatId = (uidA, uidB) => {
  if (uidA > uidB) {
    return `${uidA}-${uidB}`;
  }
  return `${uidB}-${uidA}`;
};

export const addChatToFirebase = async (myUid, targetUid) => {
  const profile = db.ref("profiles").child(targetUid).get();
  console.log("PROFILE", profile);
  if (profile) {
    await db
        .ref("chats")
        .child(myUid)
        .child(targetUid)
        .set({ chatId: generateChatId(myUid, targetUid) });
  }
};

export const initChatsTracking = (myUid) => (dispatch) => {
  db.ref("chats")
      .child(myUid)
      .on("child_changed", (snapshot) => {
        const payload = getPayloadFromSnapshot(snapshot);
        //   console.log(payload, "Payload1");
        dispatch(setChats(payload));
      });

  db.ref("chats")
      .child(myUid)
      .on("child_added", (snapshot) => {
        const payload = getPayloadFromSnapshot(snapshot);
        //   console.log(payload, "Payload2");
        dispatch(setChats(payload));
      });
};