import React from 'react'
import { useSelector } from 'react-redux'
import { Link ,useNavigate} from 'react-router-dom'



function UserHome() {
  const navigate = useNavigate()
  const authentication_user = useSelector(state => state.authentication_user)
 
  return (

    <>
      <div className="row my-4 mx-4 " >
        <div className="col-md-6 mb-4">
          <div className="bg-image hover-overlay ripple shadow-2-strong rounded-5" data-mdb-ripple-color="light">
          <img src="https://imgs.search.brave.com/QZDNv4ZFOhM3kKBk_s4VakzYOIYcBSrvIM8hpcUHcVQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/cHJlcGFyaW5nLWZv/ci10cmF2ZWwuanBn/P3dpZHRoPTEwMDAm/Zm9ybWF0PXBqcGcm/ZXhpZj0wJmlwdGM9/MA" className="img-fluid" alt='' style={{height:290 , width:720}}/>

            
            <a href="#!">
              <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}}></div>
            </a>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <span className="badge bg-danger px-2 py-1 shadow-1-strong mb-3">{authentication_user.isAuthenticated?<>Welcome Back {authentication_user.name} ! </>:<>Hello Guest User</>}</span>
          <h4><strong>Fly High... </strong></h4>
          <p className="text-muted">
          Travel broadens your horizons by exposing you to diverse cultures, traditions, and lifestyles. It challenges
           preconceptions, fosters understanding, and opens your mind to a world of possibilities.ourneys,
            whether big or small, contribute to personal growth. Stepping out of your comfort zone, adapting to new environments,
            and overcoming challenges during travel build resilience and self-confidence.
            Travel allows you to immerse yourself in different cultures, fostering appreciation for diversity. Experiencing local traditions, cuisine,
             and customs firsthand helps break down stereotypes and promotes global understanding.

          </p>
          
        </div>
      </div>


      <div className="row my-4 mx-4">
        <div className="col-md-6 mb-4">
            <h4><strong>Planning</strong></h4>
            <p className="text-muted">
            Planning a trip is an exciting and essential part of ensuring a smooth and enjoyable travel experience. 
            Here are some key aspects to consider when it comes to trip planning:
            The initial step in trip planning involves selecting a destination that resonates with your 
            interests and you seek. This decision sets the stage for
            the exploration that awaits, cultural offerings.Research becomes a crucial companion
            during the planning process. Dive into the nuances of your chosen destination, unraveling its. Crafting a
            well-thought-out itinerary comes next, mapping out the places to visit,
            activities to indulge in, and a loose timeline to guide your journey.
            </p>
            {authentication_user.isAuthenticated?<>
              <Link type="button" className="btn btn-primary" to='/profile'>Go To Profile  ! </Link></>
              :<><Link type="button" className="btn btn-primary" to='/login'> Login To Read More </Link></>}
        </div>
        <div className="col-md-6 mb-5">
          <div className="bg-image hover-overlay ripple shadow-2-strong rounded-5" data-mdb-ripple-color="light">
              <img src="https://imgs.search.brave.com/E7Rc4A2Hbj2g9f7re5tgo02yFQjvdda5ebn8mPjM7Lk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDg5/NTU2NDc4L3Bob3Rv/L3RyYXZlbGxpbmct/dG9vbHMuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVF0TEdD/Wm5Pckg1dnk4UTM5/SGk5ZDZUVjNfSU14/YjNramdkTkRoOFFa/Sms9" className="img-fluid" alt=''  style={{height:290 , width:720}}/>

              <a href="#!">
                <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}}></div>
              </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserHome