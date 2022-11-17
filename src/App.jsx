import { useState } from "react";
import { AppBar } from "./components";
import { Routes, Route } from "react-router-dom";
import { PageWrapper } from "./components";
import { TTTAncientGreecePage } from "./pages";
import { TimelinePage, Home, BrowseGamesPage, LoginPage, Register, UserHome, LogoutPage } from "./pages";


import { ThemeProvider } from '@mui/material';
import lightTheme from "./theme/lightTheme"
import darkTheme from "./theme/darkTheme"

function App() {

  const [themeMode, setThemeMode] = useState(false)

  const bg_light = {backgroundColor: '#bfdbfe', backgroundImage: "url('src/assets/bgImgLight.png')", backgroundSize: 'cover'}
  const bg_dark = {backgroundColor: '#2C373F', backgroundImage: "url('src/assets/bgImg.png')", backgroundSize: 'cover'}

  return (
    <ThemeProvider theme={themeMode ? darkTheme : lightTheme}>
      <div className="App" style={themeMode ? bg_dark : bg_light}>
        <Routes>
          <Route path="/" element={<PageWrapper themeMode={themeMode} setThemeMode={setThemeMode} />}>
            <Route index element={<Home themeMode={themeMode} />} />
            <Route path="/games" element={<BrowseGamesPage themeMode={themeMode} />} />
            <Route path="/games/TTTAncientGreece" element={<TTTAncientGreecePage />} />
            <Route path="/games/timeline/:id" element={<TimelinePage />} />
            <Route path="/login" element={<LoginPage themeMode={themeMode} /> }/>
            <Route path="/register" element={<Register themeMode={themeMode} /> }/>
            <Route path="/user" element={<UserHome themeMode={themeMode} /> }/>
            <Route path="/logout" element={<LogoutPage themeMode={themeMode} /> }/>
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;