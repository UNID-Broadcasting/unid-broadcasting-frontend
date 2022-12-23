import PodcastProvider from "./context/PodcastProvider";
import UserProvider from "./context/UserProvider";
import VideoProvider from "./context/VideoProvider";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <>
      <UserProvider>
        <PodcastProvider>
          <VideoProvider>
            <AppRouter />
          </VideoProvider>
        </PodcastProvider>
      </UserProvider>
    </>
  );
}

export default App;
