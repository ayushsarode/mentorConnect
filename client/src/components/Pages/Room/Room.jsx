import React, { useEffect, useRef } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";

const Room = () => {
  const { roomId } = useParams();
  const meetingRef = useRef(null);

  useEffect(() => {
    const initializeMeeting = async () => {
      const appID = 1322683436;
      const serverSecret = import.meta.env.VITE_API_URL;
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomId,
        Date.now().toString(),
        "Ayush"
      );
      const zp = ZegoUIKitPrebuilt.create(kitToken);

      try {
        zp.joinRoom({
          container: meetingRef.current,
          scenario: {
            mode: ZegoUIKitPrebuilt.VideoConference
          }
        });
      } catch (error) {
        console.error("Failed to join the room:", error);
      }
    };

    initializeMeeting();
  }, [roomId]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div ref={meetingRef} style={{ width: "90%", height: "70%" }} />
    </div>
  );
};

export default Room;
