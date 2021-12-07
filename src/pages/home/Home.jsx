import "./Home.css"

export default function Home() {
  return (
    <div class="wrapper">
      <img id="slide"/>

      <p>Reaching & Engaging Affluent Audiences through Data, Creative & Media</p>
      <p>BELLUNOMEDIA is a luxury digital marketing agnecy that drives strategy,
          growth, and revenue.  The world’s only luxury data-driven,
          creative media agency.  BELLUNOMEDIA provides full service performance
          marketing for luxury and premium brands.  Based in London,
          Manchester, New York, and Shanghai. 
      </p>

      <div class="d-grid gap-2 col-6 mx-auto">
        <button class="btn btn-outline-light" type="button">VIEW OUR WORK <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg>
        </button>
      </div>
      
      <div class="d-grid gap-2 col-6 mx-auto">
        <button class="btn btn-outline-light" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
          </svg> 
          FULL SHOWREEL
        </button>
      </div>


    </div>
  )
}