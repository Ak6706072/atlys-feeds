import React from "react";
import { Heart, MessageCircle, Send } from "lucide-react";
import Header from "./Header";
import MessageBox from "./MessageBox";
import { useGlobalContext } from "../../GlobalProvider/hooks";

type FeedCard = {
  feedData: Record<string, string>;
};

enum ActionType {
  LIKE = "like",
  COMMENT = "comment",
  SHARE = "share",
}

function FeedCard(props: FeedCard) {
  const { userInfo, setInGlobalContext, formConfig } = useGlobalContext();
  const { feedData } = props;

  const handleLikes = () => {
    alert("feature is not implemented yet");
  };

  const handleComments = () => {
    alert("feature is not implemented yet");
  };

  const handleShare = () => {
    alert("feature is not implemented yet");
  };

  const handleAction = (type: string) => {
    if (!userInfo?.emailOrUsername) {
      setInGlobalContext({ formConfig: { isLogin: true, isSignUp: false } });
      return;
    }
    if (type === ActionType.LIKE) {
      handleLikes();
    } else if (type === ActionType.COMMENT) {
      handleComments();
    } else if (type === ActionType.SHARE) {
      handleShare();
    }
  };

  return (
    <div className="bg-gray-100 p-[8px] mb-[30px] rounded-2xl">
      <div className="border bg-white rounded-2xl shadow  p-[14px]">
        <Header name={"helema"} time="5 Mintus ago" />
        <MessageBox description={feedData?.body} />
      </div>

      <div className="flex items-center gap-6 ml-[24px] mt-[14px] pb-[12px]">
        <button
          className="text-gray-500 hover:text-gray-800"
          onClick={() => {
            handleAction(ActionType.LIKE);
          }}
        >
          <Heart size={24} />
        </button>
        <button
          onClick={() => {
            handleAction(ActionType.COMMENT);
          }}
          className="text-gray-500 hover:text-gray-800"
        >
          <MessageCircle size={24} />
        </button>
        <button
          onClick={() => {
            handleAction(ActionType.SHARE);
          }}
          className="text-gray-500 hover:text-gray-800"
        >
          <Send size={24} />
        </button>
      </div>
    </div>
  );
}

export default FeedCard;
