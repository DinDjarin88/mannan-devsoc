import arcing from '../../assets/Arcing.jpg'
import flybacknTransistor from '../../assets/FlybacknTransistor.jpg'
import diagram from '../../assets/Flyback Driver Circuit Diagram.jpg'
import CRT from '../../assets/Broken CRT.jpg'
import transformer1 from '../../assets/transformer1.jpg'
import transformer2 from '../../assets/transformer2.jpg'


function Project1() { 
    

    return ( 
        <> 
            <h1>MOSFET Flyback Driver</h1>
            <hr className="project-line"></hr>

            <div className="description-box">
                <div className="process-header-contain">
                    
                    <img src={arcing} className="project-description-image"></img>

                    <div className="description-text">
                        <h2 className="description-header">Project Description:</h2>
                        <text className="project-description">Within this project, I researched and learnt how to build a single MOSFET Flyback driver circuit, to drive a flyback transformer from an old CRT monitor. I did not have the more commonly used IRFZ44N Power MOSFET and hence supplemented it with the FQP30N06L N-Channel power MOSFET, (which I had on hand) , by checking their respective datasheets and ensuring that the specifications were similar.
                            This driver circuit uses minimal other components, including a 150 Ohm resistor, the flyback transformer itself, and wire to wind the primary of the transformer with a center tap at halfway.</text>    
                    </div>
   
                </div>


                
                <div className="project-process-container">
                    <h2 className="process-header">Process:</h2>

                    
                    <div className="process-list-holder">
                        <ol className="process">
                            
                            <p className="additional-process-text"> After removing the Flyback transformer from the CRT monitor, I wired the circuit as I drew up in the diagram below on the left.</p>
                            <img className="diagram" src={diagram} ></img> 
                             <img className="info-images" src={CRT} ></img> 

                            <li className="process-element"> When power is first turned on, the 5V at the center tap of the transformer triggers a small current to flow through the upper half of the primary winding and the 150 Ohm resistor to the gate of the MOSFET</li>
                            <img className="process-image" src={flybacknTransistor}></img> 
                            <li className="process-element">As the gate voltage rises above the threshold voltage of the MOSFET, the mosfet begins to conduct, allowing current to flow between the drain and the source.</li>
                            <li className="process-element">Due to the low resistance between the drain and the sourcem, a short circuit to ground is pretty much created in the bottom half of the coil</li>
                            <li className="process-element">This causes the MOSFET to switch off, and the current across the drain and source of the MOSFET (and hence, part of the primary coil) to rapidly drop.</li>
                            <li className="process-element">The short circuit thus causes the charge at the gate of the MOSFET to deplete, and hence causes the gate voltage to drop below the threshold voltage of the MOSFET. This causes the MOSFET to stop conducting, and the large Drain-Source current due to short circuit to suddenly stop flowing. This changing current produces a magnetic field in the core of the transformer and induces a voltage in the secondary winding (which is stepped up due to the high ratio of turns between the primary and seconday coils of the transformer). Finally, the process repeats itself and the circuit oscillates as the current begins flowing to the gate of the MOSFET again after it has stop conducting. </li>
                            <text>This process produces arcs which jump at a gap of approximately 12mm, indicating an estimated 20kV to 36kV induced voltage.</text>
                            <img className="process-image" src={transformer1}></img> 
                            <img className="process-image" src={transformer2}></img> 
                        </ol>                            
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project1;