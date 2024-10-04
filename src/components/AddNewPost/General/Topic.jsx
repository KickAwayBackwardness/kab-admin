import React from "react";
import { useEffect, useState } from "react";

const Topic = () => {
  const [isShow, setIsShow] = useState(false);
  const [topics, setTopics] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(1);
  useEffect(() => {
    setTopics([
      { topic_id: 1, topic: "Game" },
      { topic_id: 2, topic: "Phim hoạt hình 3D" },
      { topic_id: 3, topic: "Phim điện ảnh" },
      { topic_id: 4, topic: "Code" },
      { topic_id: 5, topic: "Làm đẹp" },
      { topic_id: 6, topic: "Gia đình" },
      { topic_id: 7, topic: "Vật dụng" },
    ]);
  }, []);
  const renderTopic = () => {
    return topics?.map((topic, index) => {
      return (
        <p
          className={`px-[15px] py-[6px] ${
            topic?.topic_id === selectedTopic ? "bg-light_gray_2" : "bg-white"
          } hover:bg-light_gray_2 transition-default cursor-pointer`}
          key={index}
          topic_id={topic?.topic_id}
          onClick={() => setSelectedTopic(topic.topic_id)}
        >
          {topic?.topic}
        </p>
      );
    });
  };
  return (
    <>
      <div className="flex-1">
        <div>
          <label htmlFor="" className="label-text ">
            Chủ đề (*)
          </label>
        </div>
        <div>
          <div
            className="w-full bg-white h-[48px] flex items-center input-default relative cursor-pointer"
            onClick={() => setIsShow(!isShow)}
          >
            {topics?.length && (
              <p>
                {topics?.find((topic) => topic?.topic_id === selectedTopic) &&
                  topics?.find((topic) => topic?.topic_id === selectedTopic)
                    .topic}
              </p>
            )}
            <div className=" absolute right-[16px]">
              {isShow ? (
                <i className="fa fa-chevron-up text-sub_menu_index"></i>
              ) : (
                <i className="fa fa-chevron-down text-sub_menu_index"></i>
              )}
            </div>
            {isShow && (
              <div className=" absolute z-10 w-full top-[49px] left-0 bg-white border-t-0 border-[1px] border-gray">
                {topics?.length && renderTopic()}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Topic;
