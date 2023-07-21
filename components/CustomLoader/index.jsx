import { useProgress } from '@react-three/drei'

export function CustomLoader({ started, onStarted }) {
  const { progress } = useProgress()
  return (
    <div className={`loadingScreen ${started ? 'loadingScreen--started' : ''}`}>
      <div className="loadingScreen__progress">
        <div
          className="loadingScreen__progress__value"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
      <div className="loadingScreen__board">
        {progress === 100 && (
          <button className="button50" onClick={onStarted} type="button">
            Continue
          </button>
        )}
      </div>
    </div>
  )
}
