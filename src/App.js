import PodcastProvider from "./context/PodcastProvider";
import UserProvider from "./context/UserProvider";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <>
      <UserProvider>
        <PodcastProvider>
          <AppRouter />
        </PodcastProvider>
      </UserProvider>
    </>
  );
}

export default App;
