import React from 'react';

function App() {

  function playSong(audioId) {
    const audios = document.getElementsByTagName("audio");
    
    for (let i = 0; i < audios.length; i++) {
      const audio = audios[i];
      if (audio.id !== audioId) {
        audio.pause();
      }
    }
  }

  return (
    <>
      <article className='flex flex-col bg-black h-screen justify-center items-center gap-10'>
        <audio onPlay={() => playSong("song1")} id="song1" className="block w-full max-w-md mx-auto" controls>
          <source src="/Never.mp3" type="audio/mpeg" />
        </audio>
        <audio onPlay={() => playSong("song2")} id="song2" className="block w-full max-w-md mx-auto" controls>
          <source src="/discoADisco.mp3" type="audio/mpeg" />
        </audio>
      </article>
    </>
  );
}

export default App;