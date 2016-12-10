import React from 'react'
import { connect } from 'react-redux'

import { setPage } from '../actions'
import loadingImage from './loading_image'

import { Row, Col, Pager, BootstrapInlineInput } from './bootstrap'

class App extends React.Component {
    render() {
        
        let {isLoading, page, sorting} = this.props.ui;
        let setPageDispatch = p => {
            this.props.dispatch(setPage(p))
        }
        
        return <div>
            
            {isLoading?<div className="loading">Loading&#8230;</div>:null}
            <Row>
                <Col>
                    Test
                </Col>
            </Row>
            <Row>
                <Col className='col-md-9'>
                    <BootstrapInlineInput name='test' labelText='test' />
                </Col>
            </Row>
        </div>
    }
    
    componentDidMount() {
        
    }
}

var mapStateToProps = function(state) {
    return {
        ui:state.ui,
    }
};

export default connect(mapStateToProps)(App);
