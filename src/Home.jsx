// src/Home.jsx
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; // For toggle buttons
import { useState, useRef } from 'react';
import mamPhoto from './assets/images/placeholder-mam.jpg'; // Adjust path to your placeholder
import mam1 from './assets/images/mam1.PNG';
import mam2 from './assets/images/mam2.PNG';

function Home() {
  const [showVideo, setShowVideo] = useState(false);
  const [showEulogy, setShowEulogy] = useState(false);
  const [showSurvivedBy, setShowSurvivedBy] = useState(false);
  const [showObituary, setShowObituary] = useState(false);
  const [showServiceDetails, setShowServiceDetails] = useState(false);
  const iframeRef = useRef(null);

  const handleToggleVideo = () => {
    const newShowVideo = !showVideo;
    setShowVideo(newShowVideo);
    if (newShowVideo && iframeRef.current) {
      // Attempt to autoplay by appending autoplay param after show
      let src = "https://drive.google.com/file/d/1oK_M2H54R9f-qlcmbPFF9ad4pXKwDZYJ/preview";
      src += (src.includes('?') ? '&' : '?') + 'autoplay=1';
      iframeRef.current.src = src;
    }
  };

  return (
    <div className="text-center max-w-md w-full mx-auto flex flex-col items-center bg-white/30 backdrop-blur-sm p-6 rounded-xl shadow-lg">
      <img 
        src={mam2}
        alt="Placeholder for Mam" 
        className="w-24 h-24 rounded-full mb-4 shadow-md border-2 border-teal-400 object-cover object-[calc(50%+10px)_calc(50%+25px)]"
        loading="lazy"
      />
      
      <h1 className="text-2xl font-serif text-indigo-800 mb-1 font-bold text-shadow-md">In Loving Memory of Theresa Heffington</h1>
      <h1 className="text-3xl font-serif text-indigo-800 mb-2 font-bold italic text-shadow-sm">"Mam"</h1> {/* Added italic and lighter shadow */}

      <p className="text-base font-serif text-indigo-700 mb-6 font-semibold text-shadow-sm">Born: [Birth Date] - Passed: [Death Date]</p>
      
      {/* Celebration of Life Video Button */}
      <button 
        onClick={handleToggleVideo} // Toggle for expand/collapse and play
        className="bg-teal-600 text-white px-4 py-2 rounded-full flex items-center justify-center mx-auto hover:bg-teal-700 transition text-sm shadow-md mb-4 w-full max-w-xs"
      >
        <PlayArrowIcon className="mr-1" fontSize="small" />
        {showVideo ? 'Hide' : 'Play'} Celebration of Life Video
        <ExpandMoreIcon className={`ml-auto transition-transform ${showVideo ? 'rotate-180' : ''}`} fontSize="small" />
      </button>
      
      {showVideo && (
        <div className="mt-2 w-full mb-6 relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-md">
          <iframe 
            ref={iframeRef}
            src="https://drive.google.com/file/d/1oK_M2H54R9f-qlcmbPFF9ad4pXKwDZYJ/preview" 
            title="Celebration of Life" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen 
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
      )}
      
      {/* Eulogy Button */}
      <button 
        onClick={() => setShowEulogy(!showEulogy)}
        className="bg-amber-600 text-white px-4 py-2 rounded-full flex items-center justify-center mx-auto hover:bg-amber-700 transition text-sm shadow-md mb-4 w-full max-w-xs"
      >
        Eulogy
        <ExpandMoreIcon className={`ml-auto transition-transform ${showEulogy ? 'rotate-180' : ''}`} fontSize="small" />
      </button>
      
      {showEulogy && (
        <div className="mt-2 w-full mb-6 text-left text-indigo-800 text-sm font-serif">
          <p>Eulogy from Alicia Ward (Daughter):</p>
          <p>[Insert generic eulogy tribute here: e.g., "Mam was a loving mother who brought joy to our lives with her bohemian spirit and endless stories." Keep it 100-200 words.]</p>
          <br />
          <p>Eulogy from Zak Ward (Grandson):</p>
          <p>[Insert generic eulogy tribute here: e.g., "As her grandson, I cherished the adventures and wisdom Mam shared. She will forever be in our hearts." Keep it 100-200 words.]</p>
        </div>
      )}
      
      {/* Survived By Button */}
      <button 
        onClick={() => setShowSurvivedBy(!showSurvivedBy)}
        className="bg-indigo-600 text-white px-4 py-2 rounded-full flex items-center justify-center mx-auto hover:bg-indigo-700 transition text-sm shadow-md mb-4 w-full max-w-xs"
      >
        Survived By
        <ExpandMoreIcon className={`ml-auto transition-transform ${showSurvivedBy ? 'rotate-180' : ''}`} fontSize="small" />
      </button>
      
      {showSurvivedBy && (
        <div className="mt-2 w-full mb-6 text-left text-indigo-800 text-sm font-serif">
          <ul className="list-disc pl-5">
            <li>Daughter: Alicia Ward of Ward, Arkansas</li>
            <li>Son: Mark Gardner of Viola, Arkansas</li>
            <li>Grandsons: Zak Ward, Clayton Gardner, Austin Gardner</li>
          </ul>
        </div>
      )}
      
      {/* Obituary/Life Story Button */}
      <button 
        onClick={() => setShowObituary(!showObituary)}
        className="bg-green-600 text-white px-4 py-2 rounded-full flex items-center justify-center mx-auto hover:bg-green-700 transition text-sm shadow-md mb-4 w-full max-w-xs"
      >
        Obituary / Life Story
        <ExpandMoreIcon className={`ml-auto transition-transform ${showObituary ? 'rotate-180' : ''}`} fontSize="small" />
      </button>
      
      {showObituary && (
        <div className="mt-2 w-full mb-6 text-left text-indigo-800 text-sm font-serif">
          <p>[Insert Obituary / Life Story here: Brief bio, achievements, hobbies, etc. Add more details later.]</p>
        </div>
      )}
      
      {/* Service Details Button */}
      <button 
        onClick={() => setShowServiceDetails(!showServiceDetails)}
        className="bg-purple-600 text-white px-4 py-2 rounded-full flex items-center justify-center mx-auto hover:bg-purple-700 transition text-sm shadow-md mb-4 w-full max-w-xs"
      >
        Service Details
        <ExpandMoreIcon className={`ml-auto transition-transform ${showServiceDetails ? 'rotate-180' : ''}`} fontSize="small" />
      </button>
      
      {showServiceDetails && (
        <div className="mt-2 w-full mb-6 text-left text-indigo-800 text-sm font-serif">
          <p>Mam's wishes were to not have a traditional funeral or service. A celebration of life "bonfire" in Mam's honor will be at the Ward Family Farm with details TBD.</p>
        </div>
      )}
    </div>
  );
}

export default Home;