import { useProgress } from "@react-three/drei"
import { useEffect } from "react"
import { MutatingDots } from  'react-loader-spinner'

export const LoadingScreen = ({ started, onStarted }) => { 
  const { progress } = useProgress();

  useEffect(() => {
    if(progress >= 100) {
      onStarted();
    }
  }, [progress])

  return (
    <div
      style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}
    >
      <div className="text-center">
      <MutatingDots 
        height="100"
        width="100"
        color="#5CE4CF"
        secondaryColor= '#62d5c4'
        radius='12.5'
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{justifyContent: 'center'}}
        wrapperClass=""
        visible={true}
      />
        <div className="text-sm" style={{ fontFamily: 'Inconsolata' }}>
          <p>Voltrox website is loading ...</p>
        </div>
          
      </div>
    </div>
  );
};
