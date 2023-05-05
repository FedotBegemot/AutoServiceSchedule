import React from 'react';

class Welcome extends React.Component{
    render() {
        return(
            <div className="jumbotron">
                <h1 className="display-4">Добро пожаловать!</h1>
                <p className="lead">Здесь вы сможете отслеживать все активные заявки по ремонтным работам автомобилей
                в вашем автосервисе</p>
            </div>
        );
    }
}

export default Welcome