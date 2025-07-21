import React, { useCallback, useEffect, useState } from "react";
import FeedCard from "../Feed/Feed";
import Editor from "../Editor/Editor";
import Modal from "../Modal/Modal";
import { useGlobalContext } from "../../GlobalProvider/hooks";
import SignInSignUp from "../SignInSignUp/SignInSignUp";

type Feeds = {};

function Feeds(props: Feeds) {
  const [text, setText] = useState("");
  const [feedsData, setFeedsData] = useState<
    { body: string; id: number; name: string }[]
  >([]);
  const { formConfig, setInGlobalContext, userInfo } = useGlobalContext();

  const handleChange = useCallback(
    (value: string) => {
      setText(value);
    },
    [text]
  );

  const handleAdd = () => {
    if (!userInfo?.emailOrUsername) {
      alert("Plese log in to post");
      return;
    }
    if (!text) {
      alert("Please write something before posting.");
      return;
    }
    setFeedsData((prev) => [
      ...prev,
      { body: text, id: prev.length + 1, name: "New User" },
    ]);
    setText("");
  };

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();

      setFeedsData(data.slice(0, 5));
    })();
  }, []);

  return (
    <div className="max-w-[60%] m-auto">
      <div className="post-editor w-full">
        <Editor
          value={text}
          onChange={(value) => handleChange(value)}
          handleAdd={handleAdd}
        />
      </div>
      <div className="feeds-wrapper pt-[20px]">
        {feedsData.map((data, index) => (
          <FeedCard key={index} feedData={data} />
        ))}
      </div>

      <Modal
        isOpen={formConfig?.isLogin || formConfig?.isSignUp}
        onClose={() => {
          setInGlobalContext({
            formConfig: { isLogin: false, isSignUp: false },
          });
        }}
        className="rounded-3xl"
      >
        <SignInSignUp />
      </Modal>
    </div>
  );
}

export default Feeds;
