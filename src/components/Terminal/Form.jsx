import React, { Component } from 'react';
import {IMaskInput} from 'react-imask';
import {sendRequest} from '../../actions/terminal';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            operator: props.operator,
            phone: '',
            phoneValidation: false,
            phoneShowError: false,
            value: '',
            valueValidation: false,
            valueShowError: false
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount(){
        //hack for imask, 
        //if min property isset, it set default value in input 
        //and in state still empty string
        let {value} = this.refs.value.element;
        this.setState({
            value: value,
            valueValidation: value.length
        })
    }

    onSubmit(event){
        event.preventDefault();
        let {phone, value, phoneValidation, valueValidation, operator, fromSuccess} = this.state;
        if(fromSuccess) return;
        !phoneValidation && this.setState({
            phoneShowError: true
        });
        !valueValidation && this.setState({
            valueShowError: true
        });
        if(!phoneValidation || !valueValidation) return;
        this.setState({
            fromError: '',
            fromSuccuess: '',
            formLoading: true
        })
        sendRequest({
            phone,
            value,
            operator
        }).then((resp) => {
            this.setState({
                fromSuccess: resp.text,
                formLoading: false
            }, () => {
                this.props.onSuccess && this.props.onSuccess(resp);
            })
        }).catch((error) => {
            this.setState({
                fromError: error.text,
                formLoading: false
            })
        });
    }

    render() {
        let {phoneShowError, valueShowError, fromError, fromSuccess, formLoading} = this.state;
        return (
            <form className="form" onSubmit={this.onSubmit}>
                <div className={phoneShowError ? 'form-item form-item__error' : 'form-item'}>
                    <label>
                        <div className="form-item-label">
                            Your phone
                        </div>
                        <IMaskInput
                            mask="+0(000)-000-00-00"
                            value={this.state.phone}
                            onAccept={(value, mask) => {
                                this.setState({ 
                                    phone: value,
                                    phoneValidation: false,
                                    phoneShowError: false,
                                    fromError: ''
                                })
                            }}
                            onBlur={() => {
                                if(!this.state.phoneValidation){
                                    this.setState({
                                        phone: '',
                                        phoneShowError: false
                                    })
                                }
                            }}
                            onComplete={(value, mask) => {
                                this.setState({ 
                                    phone: value,
                                    phoneValidation: true,
                                    phoneShowError: false
                                })
                            }}
                        />
                    </label>                    
                </div>
                <div className={valueShowError ? 'form-item form-item__error' : 'form-item'}>
                    <label>
                        <div className="form-item-label">
                            Amount
                        </div>
                        <IMaskInput
                            mask={Number}
                            min={1}
                            max={1000}
                            value={this.state.value}
                            ref="value"
                            onComplete={(value, mask) => {
                                this.setState({ 
                                    value: value,
                                    valueValidation: value.length,
                                    valueShowError: false,
                                    fromError: ''
                                })
                            }}
                        />
                    </label>
                    
                </div>
                <div className="form-item">
                    <button disabled={fromSuccess || formLoading} type="submit" className={formLoading ? 'button button__loading' : 'button'}>
                        Take my money!
                        <div className="button-loader"></div>
                    </button>
                </div>
                {fromError && 
                    <div className="form-message form-message__error">
                        {fromError}
                    </div>
                }
                {fromSuccess && 
                    <div className="form-message form-message__success">
                        {fromSuccess}
                    </div>
                }
            </form>
        );
    }
}

export default Form;
