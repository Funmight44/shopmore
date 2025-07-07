import { useState } from "react";

const Accordion = ({faq}) => {
    const [show, setShow]= useState(false)


    return ( 
        <div className="accordion">
           <h3>
              <button onClick={() => setShow(!show)}>
                <span>{faq.question}</span>
               {show ?  (<i class="bi bi-chevron-compact-left"></i>) :
                (<i class="bi bi-chevron-compact-right"></i>)}
              </button>
          </h3> 
           {show && <div className="answer">
             <p className="answer">{faq.answer}</p>
            </div>}
        </div>
     );
}
 
export default Accordion;

