import React from 'react';

class CardMovie extends React.Component{
    render() {
        return (
            <div className="card">
                <img src={ this.props.image } className="card-img-top" alt={ this.props.title } />
                <div className="card-body">
                    <h5 className="card-title">{ this.props.title }</h5>
                    <p className="card-text">{ this.props.description }</p>
                </div>
            </div>
        );
    }
}

export default CardMovie;