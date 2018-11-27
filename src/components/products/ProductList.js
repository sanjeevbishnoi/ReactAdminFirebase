import React from 'react';
import HeaderProducts from '../../components/products/HeaderProducts';
import { Button, Label, Menu, Table, Container,Image} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getProducts } from '../../actions';

import ProductItem from './ProductItem';
class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }
    componentWillMount() {
        this.props.getProducts();
    }

    componentWillReceiveProps(newProps) {
        console.log(newProps.products.productList);
        if (newProps && newProps.products.productList) {
            this.setState({
                products: newProps.products.productList
            });
        }
    }

    render() {
        return (
            <div style={{ padding: '10px' }}>
                <Container fluid>
                    <HeaderProducts pageTitle='Products' onAddClick={this.props.onAddClick} />
                    <Table >
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Product Image</Table.HeaderCell>
                                <Table.HeaderCell>Product Name</Table.HeaderCell>
                                <Table.HeaderCell>Product Price</Table.HeaderCell>
                                <Table.HeaderCell>Product Discount(%)</Table.HeaderCell>
                                <Table.HeaderCell>Product Quantity</Table.HeaderCell>
                                <Table.HeaderCell>Product SKU</Table.HeaderCell>
                                <Table.HeaderCell>Actions</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {this.state.products.map(item => {
                                return (<ProductItem item={item} history={this.props.history} />)
                            })}
                        </Table.Body>

                
                    </Table>
                </Container>
            </div>
        );

    }
}

const mapStateToProps = state => ({
    products: state.products
})

export default connect(mapStateToProps, { getProducts })(ProductList);