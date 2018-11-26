import React from 'react';
import HeaderProducts from '../components/products/HeaderProducts';
import { Icon, Label, Menu, Table,Container } from 'semantic-ui-react'

export default class Products extends React.Component{

constructor(props){
    super(props);
  }

  render(){
    return (<div style={{padding:'10px'}}>
    <Container fluid>
    <HeaderProducts pageTitle='Products' onAddClick={this.onAddClick }/>
     <Table padded>
     <Table.Header>
       <Table.Row>
         <Table.HeaderCell>Name</Table.HeaderCell>
         <Table.HeaderCell>Email</Table.HeaderCell>
         <Table.HeaderCell>Action</Table.HeaderCell>
       </Table.Row>
     </Table.Header>
    
     <Table.Body>
       <Table.Row>
         <Table.Cell>
           First
         </Table.Cell>
         <Table.Cell>Cell</Table.Cell>
         <Table.Cell>Cell</Table.Cell>
       </Table.Row>
       <Table.Row>
         <Table.Cell>Cell</Table.Cell>
         <Table.Cell>Cell</Table.Cell>
         <Table.Cell>Cell</Table.Cell>
       </Table.Row>
       <Table.Row>
         <Table.Cell>Cell</Table.Cell>
         <Table.Cell>Cell</Table.Cell>
         <Table.Cell>Cell</Table.Cell>
       </Table.Row>
     </Table.Body>
    
     <Table.Footer>
       <Table.Row>
         <Table.HeaderCell colSpan='3'>
           <Menu floated='right' pagination>
             <Menu.Item as='a' icon>
               <Icon name='chevron left' />
             </Menu.Item>
             <Menu.Item as='a'>1</Menu.Item>
             <Menu.Item as='a'>2</Menu.Item>
             <Menu.Item as='a'>3</Menu.Item>
             <Menu.Item as='a'>4</Menu.Item>
             <Menu.Item as='a' icon>
               <Icon name='chevron right' />
             </Menu.Item>
           </Menu>
         </Table.HeaderCell>
       </Table.Row>
     </Table.Footer>
    </Table>
    </Container>
    </div>);
  }

  onAddClick=()=>{
    this.props.history.push('products/addproduct');

  }
}
