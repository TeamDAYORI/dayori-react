import React, { useEffect, useRef, useState } from "react";
import styles from "./Page.module.css";
import Text from "components/Text";
import EmojiPicker, { Emoji, EmojiClickData, EmojiStyle } from "emoji-picker-react";

const PageWrite = () => {
  const searchRef = useRef(null);
  const [showPicker, setShowPicker] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState("");

  const onPickerClick = (emojiData: EmojiClickData) => {
    setSelectedEmoji(emojiData.unified);
  };

  const onEmojiClick = () => {
    setShowPicker(!showPicker);
  };

  useEffect(() => {
    // 특정 영역 외 클릭 시 발생하는 이벤트
    const handleFocus = (e: any) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        // Picker 닫기
        setShowPicker(false);
      }
    };
    // 이벤트 리스너에 handleFocus 함수 등록
    document.addEventListener("mouseup", handleFocus);
    return () => {
      document.removeEventListener("mouseup", handleFocus);
    };
  }, [searchRef]);

  return (
    <div className={styles.postWrite_container}>
      <div className={styles.postWrite_contents}>
        <Text value="KIKI" type="text" />
        <Text value="2023년 4월 10일" type="text" />
        <div className={styles.postWrite_title}>
          <span onClick={onEmojiClick}>
            {selectedEmoji ? (
              <Emoji unified={selectedEmoji} emojiStyle={EmojiStyle.APPLE} size={24} />
            ) : (
              <Emoji unified="1f600" emojiStyle={EmojiStyle.APPLE} size={24} />
            )}
          </span>
          {showPicker && (
            <div ref={searchRef} className={styles.postWrite_emoji}>
              <EmojiPicker onEmojiClick={onPickerClick} searchDisabled skinTonesDisabled />
            </div>
          )}
          <div className={styles.postWrite_input}>
            <input type="text" placeholder="제목을 입력하세요." />
          </div>
        </div>
        <textarea />
      </div>
    </div>
  );
};

export default PageWrite;
