import React, { Component } from "react";

export default class NameListClass extends Component {
    constructor(){
        super()
        this.state = {
            nameList: [],
            first_name: '',
            last_name: '',
            num: ''
        }
    }

    componentDidMount(){
        fetch(`https://kekambas-bs.herokuapp.com/kekambas`)
        .then(res => res.json())
        .then(data => { this.setState({nameList:data}) })
    }

    handleFirstInput(e){this.setState({first_name: e.target.value})}
    handleLastInput(e){this.setState({last_name: e.target.value})}
    handleIdInput(e){this.setState({num: e.target.value})}

    render(){
        let tableHeaders = ['#', 'First Name', 'Last Name','id']
        return(
            <>
            <form>
                <div className="row">
                    <div className="col-2"><input type="text" className='form-control' name="first_name" value={this.state.first_name} onInput={this.handleFirstInput.bind(this)}/></div>
                    <div className="col-2"><input type="text" className='form-control' name="last_name" value={this.state.last_name} onInput={this.handleLastInput.bind(this)}/></div>
                    <div className="col-2"><input type="text" className='form-control' name="num" value={this.state.id} onInput={this.handleIdInput.bind(this)}/></div>
                </div>
            </form>

            {/* ------------------------------------------------------------------------------- */}
                <table className='table table-primary table-striped mt-3 w-50'>
                    <thead>
                        <tr>
                            {tableHeaders.map((head, i) => <th key={i}>{head}</th>)}
                        </tr>
                   </thead>
                        <tbody>
                            {this.state.nameList.map((person, idx) => 
                                { 
                                    if((person.first_name.toLowerCase().search(this.state.first_name.toLowerCase())>=0 || this.state.first_name==='') &&
                                       (person.last_name.toLowerCase().search(this.state.last_name.toLowerCase())>=0 || this.state.last_name==='') &&
                                       (person.id==this.state.num || this.state.num===''))
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