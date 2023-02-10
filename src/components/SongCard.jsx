import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import PlayPause from "./PlayPause";

const SongCard = ({song , i, activeSong , isPlaying, data}) => {
  console.log('songs==>',song);
  const dispatch = useDispatch();
  // const activeSong = 'Test'; 
  const handlePauseClick = () =>{
  dispatch(playPause(false));
  }
  const handlePlayClick = () =>{
  dispatch(setActiveSong({ song , i , data}))
  dispatch(playPause(true));
  }

  return(

    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointers">
    <div className="relative w-full h-56 group">
      <div
        className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
          activeSong?.title === song.title
            ? "flex bg-black bg-opacity-70"
            : "hidden"
        }`}
      >
        <PlayPause song={song}
        handlePause={handlePauseClick}
        handlePlay={handlePlayClick}
        isPlaying={isPlaying}
        activeSong={activeSong}
         />
      </div>
      <img  alt="song_img" src={song.images?.coverart} />
    </div>
    <div className="mt-4 flex flex-col">
      <p className="font-semibold text-lg text-white truncate">
        <Link to={`/songs/${song.key}`}>
        {song.title} 
        </Link>
      </p>
      <p className="text-sm truncate text-gray-300 mt-1/">
        <Link to={song.artist? `/artists/${song.artist[0]?.adamid}`:`/top-artists`}>
        {song.subtitle}
        </Link>
      </p>

    </div>
  </div>
)
      };

export default SongCard;
