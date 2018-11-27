import React from 'react';
import { Button, Label, Menu, Table, Container, Image } from 'semantic-ui-react';
import FontAwesome from 'react-fontawesome';
export default class ProductItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: props.item
        }
    }

    render() {
        return (
            <Table.Row>
                <Table.Cell>
                    <Image src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5d_Un6zihdvxaylaXa-_XzhENCPWRTJ_Flk86WvGCz-6G1PPq'} size='tiny' verticalAlign='middle' />
                </Table.Cell>
                <Table.Cell verticalAlign='middle'>{this.state.item.productName}</Table.Cell>
                <Table.Cell verticalAlign='middle'> {this.state.item.productPrice}</Table.Cell>
                <Table.Cell verticalAlign='middle'> {this.state.item.discount}</Table.Cell>
                <Table.Cell verticalAlign='middle'> {this.state.item.quantity}</Table.Cell>
                <Table.Cell verticalAlign='middle'> {this.state.item.sku}</Table.Cell>
                <Table.Cell verticalAlign='middle'>
                    <Button.Group>
                        <Button style={{ background: '#f5f5f5', color: 'green' }}> <FontAwesome className='menu-icon' name={'image'} size={'lg'} onClick={()=>this.props.history.push('firebasefileuploader')} /></Button>
                        <Button style={{ background: '#f5f5f5', color: 'green' }}> <FontAwesome className='menu-icon' name={'edit'} size={'lg'} /></Button>
                        <Button style={{ background: '#f5f5f5', color: 'red' }} ><FontAwesome className='menu-icon' name={'trash'} size={'lg'} /></Button>
                    </Button.Group>
                </Table.Cell>
            </Table.Row>
        );
    }
}