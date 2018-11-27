import React from 'react';
import HeaderProducts from '../../components/products/HeaderProducts';
import { Button, Label, Menu, Table, Container,Image} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getProducts } from '../../actions';
import FontAwesome from 'react-fontawesome';
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
                                return (<Table.Row>
                                     <Table.Cell>
                                     <Image src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5d_Un6zihdvxaylaXa-_XzhENCPWRTJ_Flk86WvGCz-6G1PPq'} size='tiny' verticalAlign='middle' />
                                     </Table.Cell>
                                    <Table.Cell  verticalAlign='middle'>{item.productName}</Table.Cell>
                                    <Table.Cell  verticalAlign='middle'> {item.productPrice}</Table.Cell>
                                    <Table.Cell  verticalAlign='middle'> {item.discount}</Table.Cell>
                                    <Table.Cell  verticalAlign='middle'> {item.quantity}</Table.Cell>
                                    <Table.Cell  verticalAlign='middle'> {item.sku}</Table.Cell>
                                    <Table.Cell  verticalAlign='middle'> 
                                    <Button.Group>
                                    <Button style={{background:'#f5f5f5',color:'green'}}> <FontAwesome  className='menu-icon' name={'image'} size={'lg'} /></Button>
                                        <Button style={{background:'#f5f5f5',color:'green'}}> <FontAwesome  className='menu-icon' name={'edit'} size={'lg'} /></Button>
                                        <Button style={{background:'#f5f5f5',color:'red'}} ><FontAwesome  className='menu-icon' name={'trash'} size={'lg'} /></Button>
                                    </Button.Group>
                                    </Table.Cell>
                                </Table.Row>)
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