import "./Home.css"
import hongkong from "../../img/hong-kong.jpg"

export default function Home() {
  const text1 = "Reaching & Engaging Affluent Audiences"
  const text2 = "through Data, Creative & Media"
  const text3 = "BELLUNOMEDIA is a luxury digital marketing agnecy that drives strategy,"
  const text4 = "growth, and revenue.  The world’s only luxury data-driven,"
  const text5 = "creative media agency.  BELLUNOMEDIA provides full service performance"
  const text6 = "marketing for luxury and premium brands.  Based in London,"
  const text7 = "Manchester, New York, and Shanghai."
  
  return (

    <div class="row">
      <div class="col-6">
        <div class="wrapper">
        <img id="slide"/>

        <div className="main-title">
          <p>{text1}</p>
          <p>{text2}</p>
        </div>
        
        <div className="main-body">
          <p>{text3}</p>
          <p>{text4}</p>
          <p>{text5}</p>
          <p>{text6}</p>
          <p>{text7}</p>
        </div>

        
        <div class="d-grid gap-2 d-md-block">
          <button class="btn btn-outline-light" type="button">VIEW OUR WORK <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>
          </button>
          <button class="btn btn-outline-light border-0" id="showreel-button" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
            </svg> 
            FULL SHOWREEL
          </button>
        </div>

        


      </div>

      </div>

      <div class="col-6">
        <img src={hongkong} class="img-fluid" id="hongkong" alt=""></img>
      
      </div>
    </div>

    
  )
}