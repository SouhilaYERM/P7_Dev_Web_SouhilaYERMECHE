import React from 'react';
import './Tag-name.css'
export const Tagname = ({contenu})=>{
    return (
    <div className="kasa-tag">
        <div className="tagback">
            <span className="tagname">{contenu}</span>
        </div>
    </div>);
}