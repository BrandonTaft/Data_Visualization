import { Provider, ClapButton, UpdownButton } from "@lyket/react";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

export function Clappy() {
    return(
    <label className='like-it'>
        Did you find this helpful?
        <Provider
            apiKey="pt_9631f43a75cbdb23263b1a4942d68b"
            theme={{
                colors: {
                    background: "ghostwhite",
                    text: "ghostwhite",
                    primary: "white"
                }
            }}
        >
            <ClapButton
                namespace="like-me"
                id="applause"
            />
        </Provider>
    </label>
    )
}

export function UpDown() {
    return(
    <label className='like-it' aria-label="like-buttons">
       <p className="helpful">Did you find this helpful?</p>
        <Provider
            apiKey="pt_9631f43a75cbdb23263b1a4942d68b"
            theme={{
                colors: {
                    background: "#f06c07",
                    text: "#f06c07",
                    primary: "white",
                    icon: "white",
                    ariaLabel: "like"
                }
            }}
        >
            <UpdownButton
                namespace="helpful"
                id="helpful-or-nah"
            >
               {({
          handlePressUp,
          handlePressDown,
          totalScore,
          isLoading,
        }) => (
          <>
            <button className="feedback" onClick={handlePressUp} disabled={isLoading} aria-label="like-button">
              <ThumbUpIcon sx={{color:"white"}}/>
            </button>
            <span className="score">{totalScore}</span>
            <button className="feedback" onClick={handlePressDown} disabled={isLoading} aria-label="dislike-button">
              <ThumbDownIcon sx={{color:"white"}} />
            </button>
            
            <div>
            </div>
          </>
        )}
            </UpdownButton>
        </Provider>
    </label>
    )
}
