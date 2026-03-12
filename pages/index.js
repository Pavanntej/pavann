import { useEffect, useState } from "react"
import { createClient } from "@supabase/supabase-js"
import { motion } from "framer-motion"

const supabase = createClient(
  "YOUR_SUPABASE_URL",
  "YOUR_SUPABASE_KEY"
)

export default function Home() {

const [books,setBooks]=useState([])

useEffect(()=>{

fetchBooks()

},[])

async function fetchBooks(){

const {data}=await supabase.from("books").select("*")

setBooks(data)

}

return(

<div className="container">

<h1 className="logo">PAVANN</h1>

<div className="grid">

{books.map(book=>(

<motion.div 
className="card"
whileHover={{scale:1.05}}
key={book.id}
>

<img src={book.image}/>

<h2>{book.title}</h2>

<p>{book.genre}</p>

<div className="buttons">

<a href={book.color_link}>
<button>Colour</button>
</a>

<a href={book.bw_link}>
<button>Black & White</button>
</a>

<button onClick={()=>window.open(book.trailer)}>
Play Trailer
</button>

</div>

</motion.div>

))}

</div>

</div>

)

}
