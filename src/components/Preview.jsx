import React from 'react'
const marked = require('marked');
let mostrar = ''

marked.setOptions({
    breaks: true
})


export const Preview = ({presentar}) => {

    if(presentar === undefined){
        mostrar = ''
    }else{
        mostrar = marked(`${presentar}`)
    }
    function createMarkup() {
        return {
           __html: mostrar };
     }; 
    return (

        <div className="bg-info container" dangerouslySetInnerHTML={createMarkup()} />
    )
}

