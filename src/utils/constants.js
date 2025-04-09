export const  LOGO_URL = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const POSTER_PATH = "https://image.tmdb.org/t/p/w500/";

export const NOW_PLAYING =  {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer' + + import.meta.env.VITE_API_KEY,
    }
  };


  export const BACKGROUND_IMAGE = "https://assets.nflxext.com/ffe/siteui/vlv3/fbf440b2-24a0-49f5-b2ba-a5cbe8ea8736/web_tall_panel/IN-en-20250324-TRIFECTA-perspective_69cb00d3-7b5e-45e8-b378-7757f9c8f60b_large.jpg";


  export  const OPEN_AI_API_KEY = import.meta.env.VITE_OPEN_AI_KEY ; 