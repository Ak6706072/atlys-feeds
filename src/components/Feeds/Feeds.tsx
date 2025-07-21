import React, { useCallback, useEffect, useState } from "react";
import FeedCard from "../Feed/Feed";
import Editor from "../Editor/Editor";
import Modal from "../Modal/Modal";
import { useGlobalContext } from "../../GlobalProvider/hooks";
import SignInSignUp from "../SignInSignUp/SignInSignUp";

type Feeds = {};

function Feeds(props: Feeds) {
  const [text, setText] = useState("");
  const [feedsData, setFeedsData] = useState([]);
  const { formConfig, setInGlobalContext } = useGlobalContext();

  const handleChange = useCallback(
    (value: string) => {
      setText(value);
    },
    [text]
  );

  const handleAdd = () => {

  };

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setFeedsData(data);
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
          <FeedCard key={index} feedData={data?.body || ""} />
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
