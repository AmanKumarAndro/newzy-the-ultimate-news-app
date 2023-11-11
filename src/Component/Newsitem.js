import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let { title, description,ImgUrl, NeusUrl } = this.props;
        return (
            <div>
                <div className="card mx- my-2" >
                    <img src={ImgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a rel="noreferrer" href={NeusUrl} target="_blank" className="btn btn-sm btn-primary">ReadMore</a>
                    </div>
                </div>
{/* 
                <div className="card" style={{width: "18rem"}}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div> */}
            </div>
        )
    }
}

export default Newsitem