
import Header from "../components/Common/Header"
import MainComponent from "../components/LandingPage/MainComponent"


function HomePage() {
  return (
    <div className="min-h-screen z-50 overflow-y-auto">
         <Header />
         <MainComponent />
    </div>
  )
}

export default HomePage