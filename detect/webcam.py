import streamlit as st
from streamlit_webrtc import webrtc_streamer, VideoTransformerBase, WebRtcMode
from PIL import Image

class VideoTransformer(VideoTransformerBase):
    def __init__(self):
        super().__init__()
        self._is_capturing = False

    def transform(self, frame):
        if self._is_capturing:
            self._is_capturing = False
            return frame
        else:
            return frame

def main():
    st.title("Webcam Picture Capture")

    # Create a flag to indicate whether to capture the picture
    capture = st.button("Capture Picture")

    # Set up the webcam streamer
    webrtc_ctx = webrtc_streamer(
        key="example",
        mode=WebRtcMode.SENDRECV,
        video_transformer_factory=VideoTransformer,
        async_transform=True,
    )

    # If the user clicks the capture button and we have a video receiver
    if capture and webrtc_ctx.video_receiver:
        # Set the capturing flag to True
        webrtc_ctx.video_transformer._is_capturing = True

        # Get the latest frame from the video receiver
        frame = webrtc_ctx.video_receiver.get_frame(timeout=1)

        # Convert the frame to an Image
        if frame is not None:
            image = Image.fromarray(frame.to_ndarray(format="rgb24"))

            # Display the captured image
            st.image(image, caption="Captured Picture")

            # Stop the video stream
            webrtc_ctx.stop()

if __name__ == "__main__":
    main()
