import React, { Component } from "react";

export default class NameListClass extends Component {
    constructor(props){
        super(props);
        this.state = {
            nameList: [],
            first_name: '',
            last_name: '',
            id: ''
        }
    }

    componentDidMount(){
        fetch(`https://kekambas-bs.herokuapp.com/kekambas`)
        .then(res => res.json())
        .then(data => { this.setState({nameList:data}) })
    }

    render(){
        let tableHeaders = ['#', 'First Name', 'Last Name','id']
        return(
            <>
                <table className='table table-primary table-striped mt-3 w-50'>
                    <thead>
                        <tr>
                            {tableHeaders.map((head, i) => <th key={i}>{head}</th>)}
                        </tr>
                   </thead>
                        <tbody>
                            {this.state.nameList.map((person, idx) => 
                                {
                                    return(
                                        <tr key={idx}>
                                            <th>{idx}</th>
                                            <th>{person.first_name}</th>
                                            <th>{person.last_name}</th>
                                            <th>{person.id}</th>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                </table>
            </>
        )
    }
}