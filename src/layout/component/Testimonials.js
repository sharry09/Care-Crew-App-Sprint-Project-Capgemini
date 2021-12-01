import test1 from "./test1.jpg";
import test2 from "./test2.jpg";
import test3 from "./test3.jpg";
import test4 from "./test4.jpg";
import Contact from "./Contact";
import NavBar from "./NavBar";
function Testimonials(){
    let test1Style = {
        maxWidth: "12rem",
        borderRadius: "100%",
      };
      let testStyle = {
        marginTop: "40px",
        marginLeft: "450px",
        marginBottom: "30px",
      };
    return(
 <div>
     {/* <NavBar/> */}
 <div className="container">
 <h1 id="testimonials" className="mt-5" style={testStyle}>
   TESTIMONIALS
 </h1>
 <section id="testimonials">
   <div
     id="testimonial-carousel"
     class="carousel slide"
     data-ride="false"
   >
     <div class="carousel-inner">
       <div class="carousel-item active">
         <p>
           Dear Dr. Hegde, I wanted to let you know how great I am doing
           and wanted to Thank you from the very bottom of my heart. When
           you first met me I was at a constant 7 or 8 on the pain scale.
           But, ever since you did a wonderful job on my back I am at
           around 3 or 4 at times.I honestly wish there was a way I could
           ever pay you back. Thank you again
         </p>
         <img
           class="testimonial-image"
           src={test1}
           style={test1Style}
           alt=""
         />
          <strong><em>Michelle,Mumbai</em> </strong>
       </div>
       <div class="carousel-item">
         <p class="testimonial-text">
           Before the surgery I weighed 128 kg and was not even able to
           walk properly. My self esteem and self-confidence was low. Now
           after the surgery, I am 81kgs. I feel healthier, have better
           self-confidence and self-esteem. In simple terms the surgery
           has turned my life upside down. Thanking Apollo and its
           Bariatric team once again for changing my life.
         </p>
         <img
           class="testimonial-image"
           src={test2}
           style={test1Style}
           alt=""
         />
          <strong><em>Beverly,Chennai</em> </strong>
       </div>
       <div class="carousel-item">
         <p class="testimonial-text">
           
           When I was 80 in 2010, my surgeon Dr.Paul Ramesh told me that
           if I if I chose medicinal aid it will be palliative but
           choosing bypass surgery will be more curative. The one
           memorable line which made me decide on surgery was his saying
           "I will do it as I would do it to my father." I am hale and
           hearty now and better than what I was at 80.
         </p>
         <img
           class="testimonial-image"
           src={test3}
           style={test1Style}
           alt=""
         />
         <strong> <em>Ashok,Hyderabad</em> </strong>
       </div>
       <div class="carousel-item">
         <p class="testimonial-text">
           We would like to let you know how much we appreciate the
           special care our daughter was given by the doctors and staff
           at your hospital. Our baby’s physician was professional, kind,
           understanding, and her treatment was “right on.” Your
           organization should be proud to have such kind hearted people.
           They made sure that my daughter’s hospitalization was very
           pleasant..
         </p>
         <img
           class="testimonial-image"
           src={test4}
           style={test1Style}
           alt=""
         />
        <strong> <em>Dan Decker,Maharashtra</em></strong>
       </div>
     </div>
     <a
       class="carousel-control-prev"
       href="#testimonial-carousel"
       role="button"
       data-slide="prev"
     >
       <span
         class="carousel-control-prev-icon"
         aria-hidden="true"
       ></span>
       <span class="sr-only">Previous</span>
     </a>
     <a
       class="carousel-control-next"
       href="#testimonial-carousel"
       role="button"
       data-slide="next"
     >
       <span
         class="carousel-control-next-icon"
         aria-hidden="true"
       ></span>
       <span class="sr-only">Next</span>
     </a>
   </div>
 </section>
</div>
<Contact/>
</div>
    )
}
export default Testimonials;