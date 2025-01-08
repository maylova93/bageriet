import { Newsletter } from "../../components/Newsletter/Newsletter"
import { Slideshow } from "../../components/Slideshow/Slideshow"
import {Nyhedsbrev} from "../../components/Nyhedsbrev/Nyhedsbrev"


export function FrontPage(){
    return (
        <>
      <Slideshow />
      <Newsletter />
      <Nyhedsbrev/>
    </>
    )
}