import ProgressProvider from "./notes/ProgressProvider.js"
import NoteState from "./notes/NoteState.js"
import AlertProvider from "./notes/AlertProvider.js"
import ThemeProvider from "./notes/ThemeProvider.js"

const AppProvider = ( {
  children
}) => {

  return (
    <ThemeProvider>
      <ProgressProvider>
        <AlertProvider>
          <NoteState>
            {children}
          </NoteState>
        </AlertProvider>
      </ProgressProvider>
    </ThemeProvider>
  );
};

export default AppProvider;