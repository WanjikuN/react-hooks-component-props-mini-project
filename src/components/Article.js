import React from "react";

const Article=({title,date="January 1, 1970", preview,minutes})=>{
    let fives =  (Math.ceil(minutes/5)*5)/5;
    let tens =  (Math.ceil(minutes/10)*10)/10;
    
    return(
        <article>
            <h3>{title}</h3>
            <small>{date}. {minutes <30 ? ("☕️".repeat(fives)):("🍱".repeat(tens))}</small>
            <p>{preview}</p>

        </article>
    )
}
export default Article;