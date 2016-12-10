import React from 'react'

const BootstrapWrapper = (props) => <div className={props.errorText?'form-group label-floating has-error':'form-group label-floating '}>
    <label className="control-label" htmlFor={'id_'+props.name}>{props.floatingLabelText}</label>
        {props.children}
    {props.errorText?<span id={"error_id_" + props.name} className="help-block"><strong>{props.errorText}</strong></span>:null}
    {props.hintText?<p id={"hint_id_" + props.name} className="help-block">{props.hintText}</p>:null}
</div>


export const BootstrapInput = (props) => <BootstrapWrapper {...props} >
        <input type="text" className="form-control" id={'id_'+props.name} {...props} />
    </BootstrapWrapper>
    

export const BootstrapCurrencyInput = (props) => <BootstrapWrapper {...props}>
        <input type="text" className="form-control" id={'id_'+props.name} {...props} />
    </BootstrapWrapper>

    
export const BootstrapTextArea = (props) => <BootstrapWrapper {...props}>
        <textarea type="text" className="form-control" id={'id_'+props.name} {...props} />
    </BootstrapWrapper>
    
export const BootstrapCheckBox = (props) => <div className="form-group">
        <label htmlFor={'id_'+props.name} className="">{props.floatingLabelText}</label>
        &nbsp;
        <input type="checkbox" className="checkboxinput" id={'id_'+props.name} {...props} />
        {props.errorText?<span id={"error_id_" + props.name} className="help-block"><strong>{props.errorText}</strong></span>:null}
        {props.hintText?<p id={"hint_id_" + props.name} className="help-block">{props.hintText}</p>:null}
</div>


export const BootstrapSelect = (props) => <BootstrapWrapper {...props} >
    <select className="form-control" id={'id_'+props.name} >
        <option key={undefined} value={''}>---</option>
        {
            props.options.map( o => <option key={o.id} value={o.id}>{o.name}</option> )
        }
            
    </select>
</BootstrapWrapper>


const BootstrapInlineWrapper = (props) => <div className='form-group'>
        <label htmlFor={'id_'+props.name}>{props.labelText}</label>
        {props.children}
    </div>


export const BootstrapInlineInput = (props) => <BootstrapInlineWrapper {...props} >
        <input type="text" style={{width:'100px'}} className="form-control" id={'id_'+props.name} />
    </BootstrapInlineWrapper>
    
    
export const BootstrapPanel = (props) => <div className="panel panel-default">
    {props.title?<div className="panel-heading">
        {
            props.smallTitle?
            props.title:
            <h3 className="panel-title"><strong>{props.title}</strong></h3>
        }
    </div>:null}
    <div className="panel-body">
        {props.children}
    </div>
</div>

export const Row = (props) => <div className='row'>
    {props.children}
</div>

export const Col = ({className: className = 'col-md-12', ...props}) => <div className={className}>
    {props.children}
</div>

export const Pager = ({page=1, pageSize=10, count=0, setPage, ...props }) => {
    const maxPage = Math.floor(count / pageSize) + 1;
    
    return <ul className="pager">
        <li className={page==1?'previous disabled':'previous'}>
            <a onClick={e=>{
                e.preventDefault(); 
                if(page>1) setPage(page-1);
            }} href="#">
                <span aria-hidden="true">&larr;</span>Προηγούμενη  σελίδα
            </a>
        </li>
        <li>
            {`Σελίδα ${page} από ${maxPage}` }
        </li>
        <li className={page==maxPage?'next disabled':'next'}>
            <a onClick={e=>{
                e.preventDefault(); 
                if(page < maxPage) setPage(page+1);
            }} href="#">
                Επόμενη σελίδα  <span aria-hidden="true">&rarr;</span>
            </a>
        </li>
      </ul>
}
    
export const colors = {
    primary: '#286090',
    success: '#5cb85c',
    info: '#31b0d5',
    warning: '#ec971f',
    danger: '#c9302c',
}