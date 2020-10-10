import React ,{Component} from 'react';


class SearchProduct extends Component{

  state = {
    isOpen: false
  };

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });


    render() {
      const menuClass = `dropdown-menu dropdown-menu-right ${this.state.isOpen ? " show" : ""}`;
        return (
          <div className="search-appointments row justify-content-center my-4">
            <div className="col-md-6">
              <div className="input-group">
                <input
                  id="SearchApts"
                  type="text"
                  className="form-control"
                  aria-label="Search Appointments"
                 onChange={e=>this.props.searchOrder(e.target.value)}
                />
                <div className="input-group-append">
                  <button
                    type="button"
                    className="btn btn-info dropdown-toggle"
                    data-toggle="dropdown"
         

                    aria-haspopup="true"
                    aria-expanded="false"
                    onClick={this.toggleOpen}
                  >
                    Sort by: <span className="caret" />
                  </button>
    
                  <div className={menuClass}>
                                      <button
                      className={
                          ' dropdown-item ' +
                          ((this.props.orderBy === 'name') ? 'active' : '')}
                          onClick={e=>this.props.changeorder('name',this.props.orderBy)}
                          href='#' >                      
                      Name
                    </button>
                  
                    <button
                     className={
                        ' dropdown-item ' +
                        ((this.props.orderBy === 'price') ? 'active' : '')}
                        onClick={e=>this.props.changeorder('price',this.props.orderBy)}
                        href='#' >
                    
                     Price
                    </button>
                    <div role="separator" className="dropdown-divider" />
                    <button
                     className={
                        ' dropdown-item ' +
                        ((this.props.orderDir === 'asc' )? 'active' : '')}
                        onClick={e=>this.props.changeorder(this.props.orderBy,'asc')}
                        href='#' >
                     
                      Asc
                    </button>
                    <button
                     className={
                        ' dropdown-item ' +
                        ((this.props.orderDir === 'desc') ? 'active' : '')}
                        onClick={e=>this.props.changeorder(this.props.orderBy,'desc')}
                        href='#' >
                    
                      Desc
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
}

export default SearchProduct;