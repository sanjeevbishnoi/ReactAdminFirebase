import React from 'react';
import Header from '../../components/Header';
import { Button, Label, Menu, Table, Container,Image} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getAllUsers } from '../../actions';
import FontAwesome from 'react-fontawesome';
class UsersList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }
    componentWillMount() {
        this.props.getAllUsers();
    }
    componentWillReceiveProps(newProps) {
        console.log(newProps.auth.userList);
        if (newProps && newProps.auth.userList) {
            this.setState({
                products: newProps.auth.userList
            });
        }
    }

    render() {
        return (
            <div style={{ padding: '10px' }}>
                <Container fluid>
                    <Header pageTitle='Customers' />
                    <Table>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>User Avatar</Table.HeaderCell>
                                <Table.HeaderCell>User Name</Table.HeaderCell>
                                <Table.HeaderCell>User Email</Table.HeaderCell>
                                <Table.HeaderCell>Actions</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {this.state.products.map(item => {
                                return (<Table.Row>
                                     <Table.Cell>
                                     <Image src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH1j5hSx8OE1R1d2i7Wx29y5D_jvjfPBeaofFPDWOVSRshJcXj'} size='tiny' verticalAlign='middle' />
                                     </Table.Cell>
                                    <Table.Cell  verticalAlign='middle'>{item.name}</Table.Cell>
                                    <Table.Cell  verticalAlign='middle'> {item.email}</Table.Cell>
                                    <Table.Cell  verticalAlign='middle'> 
                                    <Button.Group>
                                    <Button style={{background:'#f5f5f5',color:'green'}}> <FontAwesome  className='menu-icon' name={'eye'} size={'lg'} /></Button>
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
    auth: state.auth
})

export default connect(mapStateToProps, { getAllUsers })(UsersList);